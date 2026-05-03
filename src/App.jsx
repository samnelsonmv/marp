import { useState, useEffect, useCallback } from 'react';
import { PROGRAMS, INITIAL_PROGRESS, DONE, IN_PROGRESS, makeProgressKey, cycleStatus } from './data.js';

const STORAGE_KEY = 'goat-tracker-v1';

function loadProgress() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return null;
}

function countDone(requirements, kidProgress, sphereName, badgeName) {
  return requirements.filter((_, i) =>
    kidProgress[makeProgressKey(sphereName, badgeName, i)] === DONE
  ).length;
}

function totalForProgram(program, kidName, progress) {
  let done = 0, total = 0;
  const kidProgress = progress[program.id]?.[kidName] ?? {};
  for (const sphere of program.spheres) {
    for (const badge of sphere.badges) {
      total += badge.requirements.length;
      done += countDone(badge.requirements, kidProgress, sphere.name, badge.name);
    }
  }
  return { done, total };
}

// ── Status button ────────────────────────────────────────────────────────────

function StatusButton({ status, onClick }) {
  let label, title;
  if (status === DONE) { label = '✓'; title = 'Done — click to reset'; }
  else if (status === IN_PROGRESS) { label = '…'; title = 'In progress — click to mark done'; }
  else { label = '○'; title = 'Not started — click to start'; }

  return (
    <button
      className={`status-btn status-${status ?? 'empty'}`}
      onClick={onClick}
      title={title}
      aria-label={title}
    >
      {label}
    </button>
  );
}

// ── Badge card ───────────────────────────────────────────────────────────────

function BadgeCard({ badge, sphere, kidProgress, onToggle, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen ?? false);
  const doneCount = countDone(badge.requirements, kidProgress, sphere.name, badge.name);
  const total = badge.requirements.length;
  const earned = doneCount === total;
  const pct = Math.round((doneCount / total) * 100);

  return (
    <div className={`badge-card ${earned ? 'badge-earned' : ''}`} style={{ borderLeftColor: sphere.color }}>
      <button className="badge-header" onClick={() => setOpen(o => !o)}>
        <span className="badge-icon">{badge.icon}</span>
        <span className="badge-name">{badge.name}</span>
        <span className="badge-progress-label">{doneCount}/{total}</span>
        {earned && <span className="earned-tag">🏆 Earned!</span>}
        <span className="chevron">{open ? '▲' : '▼'}</span>
      </button>

      <div className="progress-bar-wrap">
        <div
          className="progress-bar-fill"
          style={{ width: `${pct}%`, backgroundColor: earned ? '#16a34a' : sphere.color }}
        />
      </div>

      {open && (
        <ul className="req-list">
          {badge.requirements.map((req, i) => {
            const key = makeProgressKey(sphere.name, badge.name, i);
            const status = kidProgress[key] ?? null;
            return (
              <li key={i} className={`req-item req-${status ?? 'empty'}`}>
                <StatusButton status={status} onClick={() => onToggle(key)} />
                <span className="req-text">{req}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

// ── Sphere section ───────────────────────────────────────────────────────────

function SphereSection({ sphere, kidProgress, onToggle }) {
  const [open, setOpen] = useState(true);

  let sphereDone = 0, sphereTotal = 0;
  for (const badge of sphere.badges) {
    sphereDone += countDone(badge.requirements, kidProgress, sphere.name, badge.name);
    sphereTotal += badge.requirements.length;
  }
  const earnedBadges = sphere.badges.filter(b =>
    countDone(b.requirements, kidProgress, sphere.name, b.name) === b.requirements.length
  ).length;

  return (
    <section className="sphere-section">
      <button
        className="sphere-header"
        style={{ backgroundColor: sphere.color }}
        onClick={() => setOpen(o => !o)}
      >
        <span className="sphere-icon">{sphere.icon}</span>
        <span className="sphere-name">{sphere.name}</span>
        <span className="sphere-stats">
          {earnedBadges}/{sphere.badges.length} badges · {sphereDone}/{sphereTotal} reqs
        </span>
        <span className="chevron">{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <div className="badge-list" style={{ backgroundColor: sphere.lightColor }}>
          {sphere.badges.map(badge => (
            <BadgeCard
              key={badge.name}
              badge={badge}
              sphere={sphere}
              kidProgress={kidProgress}
              onToggle={onToggle}
            />
          ))}
        </div>
      )}
    </section>
  );
}

// ── Program view ─────────────────────────────────────────────────────────────

function ProgramView({ program, progress, onBack, onToggle }) {
  const [activeKid, setActiveKid] = useState(program.kids[0]);
  const kidProgress = progress[program.id]?.[activeKid] ?? {};

  const { done, total } = totalForProgram(program, activeKid, progress);
  const overallPct = Math.round((done / total) * 100);

  return (
    <div className="program-view">
      <div className="program-header">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <div className="program-title">
          <span className="program-emoji">{program.emoji}</span>
          <h1>{program.name} Program</h1>
        </div>
      </div>

      <div className="kid-tabs">
        {program.kids.map(kid => {
          const { done: kd, total: kt } = totalForProgram(program, kid, progress);
          return (
            <button
              key={kid}
              className={`kid-tab ${activeKid === kid ? 'active' : ''}`}
              onClick={() => setActiveKid(kid)}
            >
              <span className="kid-name">{kid}</span>
              <span className="kid-stat">{kd}/{kt}</span>
            </button>
          );
        })}
      </div>

      <div className="overall-progress">
        <div className="overall-label">
          <strong>{activeKid}'s Overall Progress</strong>
          <span>{done} of {total} requirements done ({overallPct}%)</span>
        </div>
        <div className="progress-bar-wrap large">
          <div
            className="progress-bar-fill"
            style={{ width: `${overallPct}%`, backgroundColor: '#2563eb' }}
          />
        </div>
      </div>

      <div className="spheres">
        {program.spheres.map(sphere => (
          <SphereSection
            key={sphere.name}
            sphere={sphere}
            kidProgress={kidProgress}
            onToggle={(key) => onToggle(program.id, activeKid, key)}
          />
        ))}
      </div>
    </div>
  );
}

// ── Home screen ──────────────────────────────────────────────────────────────

function HomeScreen({ progress, onSelect }) {
  return (
    <div className="home-screen">
      <header className="home-header">
        <div className="home-logo">🐐</div>
        <h1>GOAT Program Tracker</h1>
        <p>Greatest Of All Trackers — earn badges, build skills, grow character</p>
      </header>

      <div className="program-cards">
        {PROGRAMS.map(program => {
          const kidStats = program.kids.map(kid => {
            const { done, total } = totalForProgram(program, kid, progress);
            return { kid, done, total };
          });

          const totalBadges = program.spheres.reduce((s, sp) => s + sp.badges.length, 0);

          return (
            <button key={program.id} className="program-card" onClick={() => onSelect(program)}>
              <div className="program-card-emoji">{program.emoji}</div>
              <h2>{program.name}</h2>
              <p className="program-tagline">{program.tagline}</p>
              <div className="program-card-stats">
                <span>{program.spheres.length} spheres</span>
                <span>{totalBadges} badges</span>
              </div>
              <div className="kid-progress-rows">
                {kidStats.map(({ kid, done, total }) => {
                  const pct = Math.round((done / total) * 100);
                  return (
                    <div key={kid} className="kid-row">
                      <span className="kid-row-name">{kid}</span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar-fill"
                          style={{ width: `${pct}%`, backgroundColor: '#2563eb' }}
                        />
                      </div>
                      <span className="kid-row-pct">{pct}%</span>
                    </div>
                  );
                })}
              </div>
              <span className="program-card-arrow">→</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ── Root app ─────────────────────────────────────────────────────────────────

export default function App() {
  const [progress, setProgress] = useState(() => {
    const stored = loadProgress();
    if (stored) return stored;
    return INITIAL_PROGRESS;
  });
  const [activeProgram, setActiveProgram] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {}
  }, [progress]);

  const handleToggle = useCallback((programId, kidName, key) => {
    setProgress(prev => {
      const kidPrev = prev[programId]?.[kidName] ?? {};
      const current = kidPrev[key] ?? null;
      const next = cycleStatus(current);
      const updated = { ...kidPrev };
      if (next === null) {
        delete updated[key];
      } else {
        updated[key] = next;
      }
      return {
        ...prev,
        [programId]: {
          ...prev[programId],
          [kidName]: updated,
        },
      };
    });
  }, []);

  if (!activeProgram) {
    return <HomeScreen progress={progress} onSelect={setActiveProgram} />;
  }

  return (
    <ProgramView
      program={activeProgram}
      progress={progress}
      onBack={() => setActiveProgram(null)}
      onToggle={handleToggle}
    />
  );
}
