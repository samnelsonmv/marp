export const DONE = 'done';
export const IN_PROGRESS = 'in-progress';

export const PROGRAMS = [
  {
    id: 'pygmy-goat',
    name: 'Pygmy Goat',
    emoji: '🐾',
    tagline: 'Young Adventurers',
    kids: ['Rudy', 'Monty'],
    spheres: [
      {
        name: 'Faith & Character',
        icon: '🙏',
        color: '#7c3aed',
        lightColor: '#f5f3ff',
        badges: [
          {
            name: 'The Kindness Badge',
            icon: '💙',
            requirements: [
              'Do a secret service for a different family member every day for one week.',
              'Write a thank-you note to a teacher, coach, or leader and deliver it.',
              'Without being asked by a parent, find a way to help a younger sibling or a friend.',
            ],
          },
          {
            name: 'The Personal Prayer Badge',
            icon: '🙏',
            requirements: [
              'For two weeks, keep a simple journal by drawing or writing one thing you are thankful for before your evening prayer.',
              'Memorize the first 4 articles of faith.',
              'Find a quiet place and say your own personal prayer, out loud, for three days in a row.',
            ],
          },
          {
            name: 'The Gospel Stories Badge',
            icon: '📖',
            requirements: [
              'Read or listen to five stories about heroes from the scriptures (e.g., David, Esther, Captain Moroni).',
              'Create a comic strip or a drawing that tells one of your favorite scripture stories from beginning to end.',
              'Explain to your family who your favorite scripture hero is and why.',
            ],
          },
        ],
      },
      {
        name: 'Health & Wellness',
        icon: '💪',
        color: '#16a34a',
        lightColor: '#f0fdf4',
        badges: [
          {
            name: 'The Active Kid Badge',
            icon: '🏃',
            requirements: [
              'Set a fitness goal. Choose a measurable fitness goal that is challenging for you (e.g., run a continuous half-mile, do 10 consecutive push-ups, hold a plank for 60 seconds).',
              'Train for your goal. For two weeks, practice or train for your goal at least three times per week. Keep a simple log of the date and what you did for each training session.',
              'Warm up properly. Explain to a parent why it is important to warm up before exercising. Then, demonstrate two dynamic stretches (like high knees or butt kicks) and two static stretches (like a hamstring or quad stretch).',
            ],
          },
          {
            name: 'The Healthy Eater Badge',
            icon: '🥗',
            requirements: [
              'Help a parent plan one dinner based on the five food groups (fruits, vegetables, grains, protein, dairy).',
              "Make your own healthy snack, such as 'ants on a log,' a fruit smoothie, or a yogurt parfait.",
              'Drink the recommended amount of water for your age for three straight days, tracking it on a chart.',
            ],
          },
          {
            name: 'The Kitchen Skills Badge',
            icon: '🍳',
            requirements: [
              'Master the skill of making perfect scrambled eggs for yourself (with supervision).',
              'Demonstrate that you can safely get yourself a bowl of cereal and milk and completely clean up your dishes and spills afterward.',
            ],
          },
        ],
      },
      {
        name: 'Outdoor Explorer',
        icon: '🏕️',
        color: '#92400e',
        lightColor: '#fdf7f0',
        badges: [
          {
            name: 'The Hike Smart Badge',
            icon: '🥾',
            requirements: [
              'Pack your own small backpack for a day hike, including the essentials: water, a snack, a rain jacket, and a whistle.',
              'Learn the buddy system and stay with your buddy for an entire hike or walk in a park.',
              'Identify three common trail markers or signs and explain what they mean (e.g., blaze, cairn, directional arrow).',
            ],
          },
          {
            name: 'The Nature Observer Badge',
            icon: '🔭',
            requirements: [
              'Find a comfortable spot outside and sit silently for 10 minutes, then report back to a parent on all the different sounds you heard.',
              'Using a guide or an app (with a parent), identify two different types of trees and two different types of birds in your neighborhood or a local park.',
            ],
          },
          {
            name: 'The Camping Badge',
            icon: '⛺',
            requirements: [
              'Plan your campout. Make a checklist of all the gear and food you will need for one night of camping.',
              "Set up your shelter. With minimal help, set up a tent correctly. You must also demonstrate how to tie one useful knot, such as a taut-line hitch, on a tent's guy line.",
              'Be self-sufficient. After sleeping in the tent you set up, wake up, and pack away your own sleeping bag and gear neatly into their stuff sacks.',
            ],
          },
        ],
      },
      {
        name: 'Home Helper',
        icon: '🏠',
        color: '#ea580c',
        lightColor: '#fff7ed',
        badges: [
          {
            name: 'The Room Responsibility Badge',
            icon: '🛏️',
            requirements: [
              'Follow a daily checklist for one week to keep your room tidy (e.g., bed made, floor clear of toys, dirty clothes in hamper).',
              'With a parent, change the sheets on your bed.',
              'Wipe down all the surfaces in your room (desk, nightstand, dresser) with a cleaning cloth.',
            ],
          },
          {
            name: 'The Laundry Assistant Badge',
            icon: '👕',
            requirements: [
              'Master the skill of correctly folding different types of clothing: t-shirts, pants, and towels.',
              'Be responsible for putting away all of your own clean laundry in the correct drawers for two weeks.',
              'Learn how to treat a simple stain, like a drip of chocolate or a spot of mud, before it goes in the wash.',
            ],
          },
          {
            name: 'The Handy Helper Badge',
            icon: '🔧',
            requirements: [
              'With supervision, learn how to safely change a burnt-out lightbulb.',
              'Find three things in the house that need new batteries and replace them correctly.',
              'Learn how to fix a constantly running toilet by showing a parent how to check the flapper chain inside the tank.',
            ],
          },
        ],
      },
      {
        name: 'STEM Skills',
        icon: '🔬',
        color: '#2563eb',
        lightColor: '#eff6ff',
        badges: [
          {
            name: 'The Lego Engineer Badge',
            icon: '🧱',
            requirements: [
              'Follow the instructions to build a Lego set with at least 100 pieces by yourself.',
              'Create at least 2 creations out of the Lego engineer book. Explain how the creation works in real life.',
              'Build a bridge out of Legos that can span a 12-inch gap and support the weight of a full can of soda.',
            ],
          },
          {
            name: 'The Money Math Badge',
            icon: '💰',
            requirements: [
              'Become an earner. Earn at least $20 from jobs that are not your regular family chores. Keep a simple ledger showing the date, job, and amount earned.',
              'Create a budget. Write a simple budget showing how you plan to allocate the $20 you earned into three categories: Save, Spend, and Give.',
              'Start saving. Open a real savings account with a parent at a bank or credit union, or create a labeled savings jar for a long-term goal (for an item costing over $25) and deposit at least half of your earnings.',
            ],
          },
          {
            name: 'The Digital Creator Badge',
            icon: '💻',
            requirements: [
              'Create a slideshow presentation (at least 5 slides) about your favorite animal, including pictures and text.',
              'Using a tablet or phone, create a stop-motion video that is at least 15 seconds long.',
              'Learn how to create a custom playlist of your favorite appropriate songs on a music app.',
            ],
          },
        ],
      },
      {
        name: 'Other',
        icon: '🌟',
        color: '#db2777',
        lightColor: '#fdf2f8',
        badges: [
          {
            name: 'The Hola Amigo Badge',
            icon: '🌎',
            requirements: [
              'Greetings: Independently recite the following five greetings and introductions in Spanish to a parent: Hola (Hello), Buenos días (Good morning), ¿Cómo estás? (How are you?), Me llamo... (My name is...), and Mucho gusto (Nice to meet you).',
              'Numbers: Count out loud from 1 to 20 in Spanish without any mistakes or prompts.',
              'Gospel Language: Memorize and recite a simple mealtime prayer in Spanish (e.g., "Querido Padre Celestial, te damos gracias por esta comida. En el nombre de Jesucristo, amén").',
              'Vocabulary: Correctly identify 10 common household items in Spanish. Place sticky-note labels on 10 items (e.g., mesa for table, leche for milk, libro for book) and lead a parent on a "house tour" naming each one.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'goat',
    name: 'Goat',
    emoji: '🐐',
    tagline: 'Advanced Achievers',
    kids: ['Duke', 'Indiana'],
    spheres: [
      {
        name: 'Faith',
        icon: '🙏',
        color: '#7c3aed',
        lightColor: '#f5f3ff',
        badges: [
          {
            name: 'The Disciple Leader Badge',
            icon: '👑',
            requirements: [
              'Plan, budget for, and lead a complete youth activity for your quorum, class, or family (e.g., a service project, a hike with a spiritual thought, a game night).',
              'Serve faithfully in a quorum or class presidency or as a ministering brother/sister for at least three consecutive months, reporting on your responsibilities to a parent or leader.',
              'Prepare and give a talk, at least five minutes in length, in a sacrament meeting.',
              'Fulfill the "Teach the Gospel" requirement by preparing and teaching one complete lesson for a family home evening or a segment of a "Come, Follow Me" lesson with the family.',
            ],
          },
          {
            name: 'The Gospel Scholar Badge',
            icon: '📚',
            requirements: [
              'Read the Book of Mormon from cover to cover and keep a written or digital journal with at least one paragraph of notes/impressions for each of the 15 books within it.',
              "Choose one gospel topic (e.g., The Atonement of Jesus Christ, The Plan of Salvation, Faith) and find and read 10 different scripture references about it using the Gospel Library app's Topic Guide or search function. List the references and a one-sentence summary for each.",
              'Memorize all thirteen Articles of Faith verbatim and be able to recite them to a parent.',
              'Memorize and be able to explain the "The Living Christ: The Testimony of the Apostles" document to your family.',
            ],
          },
          {
            name: 'The Temple Seeker Badge',
            icon: '⛪',
            requirements: [
              'Using FamilySearch.org, find at least four unique ancestors who require temple ordinances (e.g., baptism, confirmation).',
              'Prepare and print the temple ordinance cards for the four ancestors you found.',
              'Attend the temple and perform baptisms for the dead for the names you found, or for other names provided at the temple.',
              'Write a one-page journal entry about your experience in the temple and what the concept of sealing families means to you.',
            ],
          },
          {
            name: 'The Good Samaritan Badge',
            icon: '🤝',
            requirements: [
              'Independently identify a need in your community, ward, or family and organize a service project to address it. You must document at least 10 hours of planning and execution for this project.',
              'Volunteer for a single organization (e.g., a food bank, community cleanup crew, JustServe.org project) for at least four separate occasions.',
              '"Mourn with those that mourn" by preparing a meal for, writing a thoughtful card to, or performing a specific act of service for a family in the ward who is experiencing a trial.',
              '"Comfort those that stand in need of comfort" by visiting with an elderly or homebound member of your ward for at least 30 minutes on two separate occasions (with a parent).',
            ],
          },
          {
            name: 'The Prayer Warrior Badge',
            icon: '✨',
            requirements: [
              'For one month, keep a prayer journal, writing down what you prayed for in the morning and any answers or impressions you received by the evening.',
              'Following the pattern taught in the scriptures, say the opening or closing prayer in three different official church meetings (e.g., Sacrament Meeting, Sunday School, Quorum/Class meeting).',
              'Find three different scriptures that teach how to pray, and in your own words, write down what each scripture teaches.',
              'Conduct a personal fast for two consecutive meals for a specific, righteous purpose. Write down the purpose beforehand and the spiritual impressions you received afterward.',
            ],
          },
          {
            name: 'The Restoration Steward Badge',
            icon: '🕊️',
            requirements: [
              'Memorize all 13 articles of faith.',
              'Prepare and give a 10-minute presentation to your family on the First Vision, using Joseph Smith—History 1:1-20 as your primary source.',
              'Create a timeline that lists at least 10 key events of the Restoration, from the First Vision to the dedication of the Salt Lake Temple.',
              'Explain the roles of the Aaronic and Melchizedek Priesthoods and list the specific offices within each (e.g., Deacon, Teacher, Priest, Elder).',
            ],
          },
        ],
      },
      {
        name: 'Physical Health & Nutrition',
        icon: '🥗',
        color: '#16a34a',
        lightColor: '#f0fdf4',
        badges: [
          {
            name: 'The Body Architect Badge',
            icon: '💪',
            requirements: [
              'Design a personal 6-week fitness plan that includes at least three 30-minute workouts per week, specifying exercises for cardiovascular, strength, and flexibility training.',
              'Keep a detailed log of your workouts for the entire 6-week plan, recording the date, duration, and exercises completed.',
              'Demonstrate the proper form for five foundational exercises to a parent: a bodyweight squat, a push-up (on knees or toes), a plank, a lunge, and a glute bridge.',
              'Achieve a measurable fitness goal you set for yourself at the beginning of the 6 weeks (e.g., run a continuous mile, hold a plank for 90 seconds, do 20 consecutive push-ups).',
            ],
          },
          {
            name: 'The Pitch Pro Badge',
            icon: '⚽',
            requirements: [
              'The Century Wall-Volley: Stand 3 to 5 feet from a solid wall. Using only your feet, complete 100 consecutive one-touch passes against the wall without the ball stopping or you having to use your hands. If the ball rolls away or stops, the count resets to zero.',
              'The Master Juggler: Successfully complete a sequence of 30 consecutive juggles. The ball must not touch the ground or your hands.',
              'The Weak-Foot Weave: Set up 10 cones (or markers) exactly 1 yard apart in a straight line. Dribble through the cones and back using only your non-dominant foot. You must complete the course 5 times in a row without hitting a cone and while finishing each lap in under 15 seconds.',
              'The "7-Day Pro" Habit: Design and execute a 7-day consecutive solo training block. Each day must last at least 30 minutes.',
            ],
          },
          {
            name: 'The Nutrition Navigator Badge',
            icon: '🥦',
            requirements: [
              'Track all food and beverage intake for seven consecutive days using an app (like MyFitnessPal) or a journal.',
              'Using your 7-day food log, calculate your average daily intake of calories, protein, carbohydrates, and fats.',
              'Create a visual guide (e.g., a poster or slideshow) that explains the function of macronutrients (proteins, carbs, fats) and lists three healthy sources for each.',
              'Read the nutritional labels on five different packaged foods in your pantry and correctly identify the serving size, calories, grams of sugar, and grams of protein for each.',
            ],
          },
          {
            name: 'The Culinary Chemist Badge',
            icon: '🧑‍🍳',
            requirements: [
              'Plan a menu for one full week (7 days) of healthy family dinners, including at least one serving of vegetables in each meal.',
              'Create a comprehensive grocery list based on your 7-day menu.',
              'Independently cook at least four of the healthy dinners from your menu for the entire family.',
              'Demonstrate three different healthy cooking techniques: steaming vegetables, baking a protein (like chicken or fish) without excessive oil, and creating a salad dressing from scratch.',
            ],
          },
          {
            name: 'The Endurance Expert Badge',
            icon: '🏅',
            requirements: [
              'Complete a formal 5k run or walk (a community race or a measured course you complete with a parent).',
              'Follow a structured training program for an endurance event (like a 5k or a long-distance hike) for at least four weeks.',
              'Track your daily water intake for two weeks, ensuring you consume the recommended amount (e.g., 64 ounces) each day.',
              'Demonstrate three different dynamic stretches (e.g., high knees, butt kicks) and three different static stretches (e.g., hamstring stretch, quad stretch), explaining when each type is most effective.',
            ],
          },
          {
            name: 'The Zen Master Badge',
            icon: '🧘',
            requirements: [
              'Practice a mindfulness or meditation exercise for at least 10 minutes a day, for 15 days over a one-month period. Keep a log of your sessions.',
              'Keep a "gratitude journal" for one month, writing down three specific things you are grateful for each day.',
              'Identify three healthy coping strategies for stress or anxiety (e.g., exercise, talking to someone, deep breathing) and write a paragraph describing a situation where you could use each one.',
              'Go completely screen-free (no phone, tablet, computer, or TV for personal use) for 7 consecutive days. Write a half-page reflection on the experience.',
            ],
          },
          {
            name: 'The Hydration Hero Badge',
            icon: '💧',
            requirements: [
              'Calculate your recommended daily water intake based on your body weight and activity level.',
              'Create a chart and track your water consumption for 14 consecutive days to ensure you meet your daily goal.',
              'Give a 3-minute presentation to your family on the signs of dehydration and the importance of electrolytes.',
              'Prepare two different types of naturally infused water (e.g., with lemon and mint, or cucumber and basil) for the family to try.',
            ],
          },
        ],
      },
      {
        name: 'Outdoor & Survival Skills',
        icon: '🏕️',
        color: '#92400e',
        lightColor: '#fdf7f0',
        badges: [
          {
            name: 'The Wilderness Medic Badge',
            icon: '🩺',
            requirements: [
              'Earn a First Aid and CPR/AED certification from a recognized organization (e.g., American Red Cross, American Heart Association).',
              'Assemble a personal first-aid kit in a waterproof container that includes at least 15 specific, required items (e.g., assorted bandages, antiseptic wipes, gauze pads, medical tape, moleskin, etc.).',
              'Demonstrate to a parent how to properly treat a sprained ankle using the R.I.C.E. (Rest, Ice, Compression, Elevation) method.',
              'Correctly identify three poisonous plants native to your area (e.g., poison ivy, poison oak, poison sumac) from photos or real-life examples during a hike.',
            ],
          },
          {
            name: 'The Firecrafter Badge',
            icon: '🔥',
            requirements: [
              'Demonstrate the ability to safely build, maintain, and extinguish a campfire. The fire must be completely cold to the touch upon completion.',
              'Successfully build a fire using a ferrocerium rod (ferro rod) and natural tinder that you have gathered.',
              'Successfully build a fire in damp conditions using only waterproof matches and tinder you have brought or prepared (e.g., cotton balls with petroleum jelly).',
              'Cook a complete meal (e.g., foil packet dinner with a protein and vegetable) over a fire that you have built.',
            ],
          },
          {
            name: 'The Shelter Architect Badge',
            icon: '⛺',
            requirements: [
              'Set up, take down, and correctly pack a tent by yourself.',
              'Construct a functional, waterproof lean-to shelter using a tarp, rope, and natural anchor points. It must be large enough for you to lie down inside.',
              'Construct a natural debris hut that is large enough for you to fit inside and that would offer reasonable protection from wind.',
              'Sleep outside for one night in a tent or shelter that you have set up.',
            ],
          },
          {
            name: 'The Trailblazer Badge',
            icon: '🗺️',
            requirements: [
              'Using a topographic map and a compass, orient the map to North.',
              'Plot a course on a map with at least three waypoints, and then navigate that exact course in the field.',
              'Identify five different types of animal tracks in the wild or from a field guide.',
              'Identify five different edible or useful plants native to your area (with the guidance of an expert or a reliable field guide).',
            ],
          },
          {
            name: 'The Leave No Trace Guardian Badge',
            icon: '🌿',
            requirements: [
              'Memorize and be able to explain all seven Leave No Trace principles to your family.',
              'Plan and execute a day hike where you demonstrate proper disposal of all waste, including packing out all trash, food scraps, and toilet paper.',
              'Participate in a trail cleanup or similar conservation project for at least two hours.',
              'Demonstrate how to properly dig a "cathole" for human waste in an appropriate location, at least 200 feet from water, trails, and campsites.',
            ],
          },
          {
            name: 'The Emergency Preparedness Pro Badge',
            icon: '🎒',
            requirements: [
              'Assemble a complete personal 72-hour emergency kit (bug-out bag) with all items from a pre-approved family checklist (to include water, food, first aid, shelter, clothing, etc.).',
              'Demonstrate two different methods for purifying water in an emergency situation (e.g., boiling, using a filter, using purification tablets).',
              'Create a written family emergency plan that includes two meeting locations (one near the home, one outside the neighborhood), an out-of-state contact, and evacuation routes.',
              'Demonstrate how to tie three essential knots: the bowline, the taut-line hitch, and the two half-hitches.',
            ],
          },
        ],
      },
      {
        name: 'Home-making Skills',
        icon: '🏠',
        color: '#ea580c',
        lightColor: '#fff7ed',
        badges: [
          {
            name: 'The Culinary Craftsman Badge',
            icon: '👨‍🍳',
            requirements: [
              'Bake a loaf of yeast bread from scratch.',
              'Plan, budget for (under $50), shop for, and independently cook a three-course meal for the family (appetizer, main course, dessert).',
              "Properly and safely demonstrate how to use a chef's knife to perform three classic cuts: dice (onion), julienne (carrot), and chiffonade (basil or spinach).",
              'Make a "mother sauce" (e.g., Béchamel, Espagnole, or Hollandaise) from scratch and use it as a component in a finished dish.',
            ],
          },
          {
            name: 'The Spotless Specialist Badge',
            icon: '✨',
            requirements: [
              'Create a detailed, written "deep cleaning" checklist for one room in the house (e.g., a bathroom or the kitchen).',
              'Perform the full deep clean of the selected room, checking off every item on your list. The result will be inspected by a parent.',
              'Make your own all-purpose, non-toxic household cleaner using common ingredients (e.g., vinegar, water, essential oils) and use it to clean three different surfaces.',
              'Demonstrate how to properly clean three different types of flooring: wood/laminate, tile, and carpet (spot treatment).',
            ],
          },
          {
            name: 'The Textile Technician Badge',
            icon: '🧺',
            requirements: [
              "Demonstrate mastery of the laundry process by washing, drying, and folding three full loads of laundry (whites, colors, delicates) according to their care labels.",
              'Successfully remove three different types of specific stains from fabric (e.g., grass on jeans, chocolate on a t-shirt, ink on a shirt).',
              'Demonstrate how to properly iron a button-down dress shirt.',
              'Perform two different clothing repairs: sew a button onto a shirt and properly mend a 2-inch tear or seam separation in a piece of clothing.',
            ],
          },
          {
            name: 'The Master Host Badge',
            icon: '🥂',
            requirements: [
              'Plan a family event or a gathering for at least four guests (e.g., a birthday party, a holiday dinner, a game night). Your plan must include a guest list, invitations, a menu, and a schedule of activities.',
              'Set a formal dinner table, correctly placing the tablecloth, chargers, plates, all silverware, glasses, and napkins for a three-course meal.',
              'Create a centerpiece for the dining table for your planned event.',
              'Write thank-you notes to each guest who attended your event.',
            ],
          },
          {
            name: 'The Organizational Guru Badge',
            icon: '📋',
            requirements: [
              'Completely organize one "problem area" in the home (e.g., the pantry, a linen closet, a garage workbench). This includes removing all items, cleaning the space, sorting items into keep/donate/discard piles, and returning the "keep" items in a logical system.',
              'Create a digital or physical file system to organize important family documents (or your own personal documents), with clearly labeled folders for different categories.',
              "Plan the family's schedule for one week, coordinating school, work, church, and extracurricular activities on a shared calendar (digital or physical).",
              'Apply the "one in, one out" rule to your personal wardrobe for one month, donating or discarding one item of clothing for every new item you acquire.',
            ],
          },
          {
            name: 'The Canning & Preservation Badge',
            icon: '🫙',
            requirements: [
              'Using a water bath canning method, safely can at least four jars of a high-acid food like jam, salsa, or pickles.',
              'Using a pressure canner, safely can at least four jars of a low-acid food like green beans, carrots, or meat (with direct adult supervision).',
              'Demonstrate how to properly dehydrate a fruit or vegetable using an oven or a dehydrator.',
              'Correctly label and store all your preserved food, and check the seals after 24 hours to ensure they are properly sealed.',
            ],
          },
        ],
      },
      {
        name: 'Handyman & Mechanic Skills',
        icon: '🔧',
        color: '#dc2626',
        lightColor: '#fef2f2',
        badges: [
          {
            name: 'The Automotive Apprentice Badge',
            icon: '🚗',
            requirements: [
              'Safely and correctly change a flat tire on a family vehicle.',
              'Check the oil level, tire pressure (and inflate to the proper PSI), and windshield washer fluid on a car.',
              'Replace both windshield wiper blades on a family car.',
              'Use a multimeter to check the voltage of a car battery and demonstrate how to properly connect jumper cables to another car (without starting the engines).',
            ],
          },
          {
            name: 'The Household Hero Badge',
            icon: '🏠',
            requirements: [
              'Patch a hole in drywall (minimum size 3x3 inches), including applying tape, mudding, sanding, and priming the patch.',
              'Fix a constantly running toilet by replacing the flapper or fill valve mechanism.',
              'Unclog a sink drain by cleaning out the P-trap.',
              'Stop a leaky faucet by replacing the O-rings or washer in the handle.',
            ],
          },
          {
            name: 'The Tool Master Badge',
            icon: '🔨',
            requirements: [
              'Demonstrate the safe and proper use of a power drill (drilling a pilot hole, driving a screw) and a circular or miter saw (making a straight cut on a piece of wood), with direct adult supervision.',
              'Identify and explain the function of 10 different hand tools from the family toolbox (e.g., Phillips screwdriver, flathead screwdriver, crescent wrench, socket wrench, pliers, hammer, level).',
              'Take apart a bed frame using a power drill.',
              'Demonstrate how to safely shut off the main water supply and the main electrical breaker for the house.',
            ],
          },
          {
            name: 'The Circuit Sage Badge',
            icon: '⚡',
            requirements: [
              'With the power turned off at the breaker, safely replace a standard light switch.',
              'With the power turned off at the breaker, safely replace a standard electrical outlet.',
              'Create a simple circuit using a battery, wires, and a small light bulb that successfully lights up.',
              'Draw a simple wiring diagram for a room in your house, showing the path of electricity from the breaker to the switch and then to the light fixture.',
            ],
          },
          {
            name: 'The Project Foreman Badge',
            icon: '📐',
            requirements: [
              'Choose a small home improvement project (e.g., painting a small room, building a shelf, installing a new shower head).',
              'Create a detailed project plan including a list of all required materials and tools, a step-by-step procedure, and a budget.',
              'Execute the project from start to finish according to your plan and within your budget.',
              'Present the finished project to a parent, explaining any challenges you faced and how you overcame them.',
            ],
          },
          {
            name: 'The Maintenance Minder Badge',
            icon: '🔍',
            requirements: [
              'Clean the coils on the back or bottom of the kitchen refrigerator.',
              'Clean the lint out of the entire dryer vent hose, from the back of the dryer to the exterior vent.',
              "Replace the air filter in the home's HVAC system.",
              'Create a 12-month home maintenance checklist with seasonal tasks (e.g., "Spring: Clean gutters," "Fall: Winterize sprinklers").',
            ],
          },
        ],
      },
      {
        name: 'Financial Acumen',
        icon: '💰',
        color: '#b45309',
        lightColor: '#fffbeb',
        badges: [
          {
            name: 'The Budget Boss Badge',
            icon: '📊',
            requirements: [
              'Create a detailed personal budget using a spreadsheet or budgeting app, allocating funds for savings, giving (tithing), and spending categories.',
              'Track every dollar you earn and spend for three consecutive months, ensuring your log matches your budget.',
              'Write a one-page report after the three months analyzing your spending, comparing it to your budget, and identifying two areas for improvement.',
              'Successfully open a personal checking or savings account at a bank or credit union (with a parent).',
            ],
          },
          {
            name: 'The Compound King/Queen Badge',
            icon: '📈',
            requirements: [
              'Write a clear definition of simple interest and compound interest, highlighting the key difference.',
              'Using the compound interest formula A=P(1+r/n)^nt, calculate the final value of a $1,000 principal investment after 20 years with an annual interest rate of 8% compounded monthly. Show all your work.',
              'Create a spreadsheet that shows the year-by-year growth of a $500 investment for 10 years at a 5% interest rate, with columns for the year, starting balance, interest earned, and ending balance.',
              'Give a 5-minute presentation to the family explaining what you learned about compound interest and why starting to save early is important.',
            ],
          },
          {
            name: 'The Asset Allocator Badge',
            icon: '💼',
            requirements: [
              'Define the following investment terms: stock, bond, mutual fund, and index fund.',
              'Choose one publicly traded company (e.g., Disney, Apple, Nike) and track its stock price every day for one month, plotting the closing price on a graph.',
              '"Invest" a virtual $10,000 into a portfolio of at least three different stocks or mutual funds using a free online stock market simulator. Track its performance for three months and report on its gains or losses.',
              'Explain the concept of "risk vs. reward" in investing and why a diversified portfolio is important.',
            ],
          },
          {
            name: 'The Credit Captain Badge',
            icon: '💳',
            requirements: [
              'Explain what a credit score is, what factors influence it (payment history, amounts owed, etc.), and why it is important.',
              'Research and compare two different types of credit cards, listing their interest rates (APR), annual fees, and rewards programs.',
              'Explain the difference between a credit card and a debit card.',
              'Calculate the total amount you would pay back if you charged $500 to a credit card with a 21% APR and only made the minimum payment each month (using an online calculator).',
            ],
          },
          {
            name: 'The Tax Titan Badge',
            icon: '🧾',
            requirements: [
              'Define the following tax terms: gross income, adjusted gross income (AGI), tax deduction, and taxable income.',
              'Using a mock W-2 form and a current IRS Form 1040, complete a practice federal tax return.',
              'Explain the difference between property tax, sales tax, and income tax.',
              'Research and list three things that federal income taxes are used to pay for.',
            ],
          },
          {
            name: 'The Entrepreneurial Eagle Badge',
            icon: '🦅',
            requirements: [
              'Create a business plan for a simple service or product (e.g., lawn mowing, babysitting, selling a craft). The plan must include your service/product description, target market, pricing, and a marketing strategy.',
              'Design a simple flyer or social media post to advertise your business.',
              'Run your business and earn at least $100 in profit (revenue minus expenses).',
              'Create a simple profit and loss statement for your business, showing all income and all expenses for the duration of the project.',
            ],
          },
        ],
      },
      {
        name: 'Technology',
        icon: '💻',
        color: '#4f46e5',
        lightColor: '#eef2ff',
        badges: [
          {
            name: 'The Digital Citizen Badge',
            icon: '🛡️',
            requirements: [
              'Create a "Family Online Safety Pledge" that includes rules about not sharing personal information, treating others with respect online, and what to do if you encounter cyberbullying or inappropriate content.',
              'Give a 5-minute presentation to your family about the dangers of phishing scams and how to identify a phishing email or text message.',
              "Review the privacy settings on your primary social media account (or a parent's account) and adjust them to be more secure.",
              'Use a password manager to create and store unique, strong passwords (at least 12 characters with a mix of letters, numbers, and symbols) for five of your online accounts.',
            ],
          },
          {
            name: 'The Code Commander Badge',
            icon: '👨‍💻',
            requirements: [
              'Complete an intro to Python course.',
              'Build a game using Python.',
              'Host your completed two-page website live on the internet using a free service like GitHub Pages or Netlify.',
              'Explain the function of a <div> tag in HTML, a color: property in CSS, and a hyperlink (<a> tag) to a parent.',
            ],
          },
          {
            name: 'The Hardware Specialist Badge',
            icon: '🖥️',
            requirements: [
              'With supervision, open a desktop computer case and correctly identify the following six components: Motherboard, CPU (under the heat sink), RAM, Storage Drive (SSD or HDD), Power Supply Unit (PSU), and Graphics Card (GPU, if present).',
              'Create a one-page document with pictures that explains the primary function of each of the six components listed above.',
              'Using an online tool like PCPartPicker, create a complete parts list for a new computer that costs less than $800 and would be suitable for schoolwork and light gaming.',
              "Demonstrate how to properly install or reseat a stick of RAM into a motherboard's DIMM slot.",
            ],
          },
          {
            name: 'The Media Mogul Badge',
            icon: '🎬',
            requirements: [
              'Using a free video editing program (like DaVinci Resolve or CapCut), edit a video that is at least 60 seconds long and includes at least three of the following: titles, background music, multiple clips stitched together, and a voiceover.',
              'Using a free graphic design program (like Canva or GIMP), create an 8.5x11 inch flyer for a fictional event that includes text, images, and a clear visual hierarchy.',
              'Record and edit a 3-minute podcast episode on a topic of your choice. The final audio must be edited to remove mistakes and have consistent volume levels.',
              'Create a 10-slide presentation (using Google Slides or PowerPoint) about one of your other badge projects. The presentation must have a consistent design theme, include both images and text, and feature slide transitions.',
            ],
          },
          {
            name: 'The Network Navigator Badge',
            icon: '🌐',
            requirements: [
              'Draw a diagram of your home network, showing how the internet signal flows from the outside line to the modem, to the router, and then to various devices (both wired and wireless).',
              'Find the IP address, MAC address, and Default Gateway for the computer you are using.',
              "Successfully log in to your home's router administration page (with parental permission) and find the list of connected devices.",
              'Explain the difference between a modem and a router, and the difference between a Wi-Fi and an Ethernet connection.',
            ],
          },
          {
            name: 'The Tech Troubleshooter Badge',
            icon: '🔧',
            requirements: [
              'Successfully perform a "force quit" on an unresponsive application on both a Windows/Mac computer and a smartphone.',
              'Restart a "frozen" computer using the proper key command or button press.',
              'Clear the cache and cookies from a web browser and explain why this is a common first step in fixing website issues.',
              "Given a scenario by a parent (e.g., \"The Wi-Fi isn't working,\" \"The printer won't print\"), verbally walk them through at least three logical troubleshooting steps you would take to solve the problem.",
            ],
          },
        ],
      },
    ],
  },
];

// Initial progress seeded from the spreadsheet.
// Keys: 'sphereName||badgeName||reqIndex', values: DONE | IN_PROGRESS
export const INITIAL_PROGRESS = {
  'pygmy-goat': {
    Rudy: {
      'Faith & Character||The Kindness Badge||0': DONE,
      'Faith & Character||The Kindness Badge||1': DONE,
      'Faith & Character||The Kindness Badge||2': DONE,
      'Faith & Character||The Personal Prayer Badge||2': DONE,
      'Health & Wellness||The Active Kid Badge||0': DONE,
      'Health & Wellness||The Active Kid Badge||1': DONE,
      'Health & Wellness||The Healthy Eater Badge||0': DONE,
      'Health & Wellness||The Healthy Eater Badge||1': DONE,
      'Health & Wellness||The Healthy Eater Badge||2': DONE,
      'Health & Wellness||The Kitchen Skills Badge||0': DONE,
      'Health & Wellness||The Kitchen Skills Badge||1': DONE,
      'Outdoor Explorer||The Hike Smart Badge||0': DONE,
      'Outdoor Explorer||The Hike Smart Badge||1': DONE,
      'Outdoor Explorer||The Nature Observer Badge||0': DONE,
      'Outdoor Explorer||The Nature Observer Badge||1': DONE,
      'Outdoor Explorer||The Camping Badge||0': DONE,
      'Outdoor Explorer||The Camping Badge||1': DONE,
      'Outdoor Explorer||The Camping Badge||2': DONE,
      'STEM Skills||The Lego Engineer Badge||0': DONE,
      'STEM Skills||The Lego Engineer Badge||1': DONE,
      'STEM Skills||The Lego Engineer Badge||2': DONE,
      'Other||The Hola Amigo Badge||1': DONE,
    },
    Monty: {
      'Faith & Character||The Personal Prayer Badge||2': IN_PROGRESS,
      'Health & Wellness||The Healthy Eater Badge||1': DONE,
      'Health & Wellness||The Kitchen Skills Badge||1': DONE,
      'Outdoor Explorer||The Nature Observer Badge||1': DONE,
      'STEM Skills||The Lego Engineer Badge||0': IN_PROGRESS,
      'STEM Skills||The Lego Engineer Badge||1': IN_PROGRESS,
    },
  },
  goat: {
    Duke: {
      'Faith||The Disciple Leader Badge||0': DONE,
      'Faith||The Disciple Leader Badge||1': DONE,
      'Faith||The Disciple Leader Badge||2': DONE,
      'Faith||The Disciple Leader Badge||3': DONE,
      'Faith||The Gospel Scholar Badge||0': IN_PROGRESS,
      'Faith||The Temple Seeker Badge||0': DONE,
      'Faith||The Temple Seeker Badge||1': IN_PROGRESS,
      'Faith||The Temple Seeker Badge||2': DONE,
      'Faith||The Temple Seeker Badge||3': IN_PROGRESS,
      'Faith||The Prayer Warrior Badge||1': DONE,
      'Faith||The Prayer Warrior Badge||3': DONE,
      'Physical Health & Nutrition||The Body Architect Badge||2': DONE,
      'Physical Health & Nutrition||The Body Architect Badge||3': DONE,
      'Physical Health & Nutrition||The Pitch Pro Badge||0': DONE,
      'Physical Health & Nutrition||The Nutrition Navigator Badge||3': DONE,
      'Physical Health & Nutrition||The Culinary Chemist Badge||0': DONE,
      'Physical Health & Nutrition||The Culinary Chemist Badge||1': DONE,
      'Physical Health & Nutrition||The Culinary Chemist Badge||2': DONE,
      'Physical Health & Nutrition||The Culinary Chemist Badge||3': DONE,
      'Physical Health & Nutrition||The Endurance Expert Badge||0': DONE,
      'Physical Health & Nutrition||The Endurance Expert Badge||3': IN_PROGRESS,
      'Physical Health & Nutrition||The Zen Master Badge||2': IN_PROGRESS,
      'Physical Health & Nutrition||The Hydration Hero Badge||0': DONE,
      'Outdoor & Survival Skills||The Wilderness Medic Badge||3': DONE,
      'Outdoor & Survival Skills||The Firecrafter Badge||0': DONE,
      'Outdoor & Survival Skills||The Firecrafter Badge||3': DONE,
      'Outdoor & Survival Skills||The Shelter Architect Badge||0': DONE,
      'Outdoor & Survival Skills||The Shelter Architect Badge||1': DONE,
      'Outdoor & Survival Skills||The Shelter Architect Badge||2': DONE,
      'Outdoor & Survival Skills||The Shelter Architect Badge||3': DONE,
      'Outdoor & Survival Skills||The Emergency Preparedness Pro Badge||3': DONE,
      'Home-making Skills||The Culinary Craftsman Badge||0': DONE,
      'Home-making Skills||The Culinary Craftsman Badge||1': DONE,
      'Home-making Skills||The Culinary Craftsman Badge||2': DONE,
      'Home-making Skills||The Culinary Craftsman Badge||3': IN_PROGRESS,
      'Home-making Skills||The Spotless Specialist Badge||3': DONE,
      'Home-making Skills||The Textile Technician Badge||0': DONE,
      'Home-making Skills||The Textile Technician Badge||1': DONE,
      'Home-making Skills||The Textile Technician Badge||2': DONE,
      'Home-making Skills||The Textile Technician Badge||3': DONE,
      'Home-making Skills||The Master Host Badge||0': DONE,
      'Home-making Skills||The Master Host Badge||1': DONE,
      'Home-making Skills||The Master Host Badge||2': DONE,
      'Home-making Skills||The Organizational Guru Badge||0': DONE,
      'Handyman & Mechanic Skills||The Tool Master Badge||0': DONE,
      'Handyman & Mechanic Skills||The Tool Master Badge||1': DONE,
      'Handyman & Mechanic Skills||The Tool Master Badge||2': DONE,
      'Handyman & Mechanic Skills||The Tool Master Badge||3': DONE,
      'Handyman & Mechanic Skills||The Circuit Sage Badge||2': DONE,
      'Financial Acumen||The Compound King/Queen Badge||0': DONE,
      'Financial Acumen||The Compound King/Queen Badge||1': DONE,
      'Financial Acumen||The Compound King/Queen Badge||2': DONE,
      'Financial Acumen||The Compound King/Queen Badge||3': DONE,
      'Financial Acumen||The Credit Captain Badge||2': DONE,
      'Financial Acumen||The Tax Titan Badge||0': DONE,
      'Financial Acumen||The Tax Titan Badge||1': DONE,
      'Financial Acumen||The Tax Titan Badge||2': DONE,
      'Financial Acumen||The Tax Titan Badge||3': DONE,
      'Technology||The Code Commander Badge||0': IN_PROGRESS,
      'Technology||The Code Commander Badge||1': IN_PROGRESS,
      'Technology||The Media Mogul Badge||0': DONE,
      'Technology||The Media Mogul Badge||1': DONE,
      'Technology||The Media Mogul Badge||2': DONE,
      'Technology||The Media Mogul Badge||3': DONE,
      'Technology||The Tech Troubleshooter Badge||0': DONE,
      'Technology||The Tech Troubleshooter Badge||1': DONE,
      'Technology||The Tech Troubleshooter Badge||2': DONE,
      'Technology||The Tech Troubleshooter Badge||3': DONE,
    },
    Indiana: {
      'Physical Health & Nutrition||The Culinary Chemist Badge||3': IN_PROGRESS,
      'Outdoor & Survival Skills||The Shelter Architect Badge||1': DONE,
      'Outdoor & Survival Skills||The Shelter Architect Badge||2': DONE,
      'Outdoor & Survival Skills||The Shelter Architect Badge||3': DONE,
      'Outdoor & Survival Skills||The Emergency Preparedness Pro Badge||3': DONE,
      'Home-making Skills||The Culinary Craftsman Badge||0': IN_PROGRESS,
      'Home-making Skills||The Culinary Craftsman Badge||1': IN_PROGRESS,
      'Home-making Skills||The Culinary Craftsman Badge||2': IN_PROGRESS,
      'Home-making Skills||The Spotless Specialist Badge||2': DONE,
      'Home-making Skills||The Textile Technician Badge||0': DONE,
      'Home-making Skills||The Canning & Preservation Badge||0': DONE,
      'Technology||The Media Mogul Badge||1': DONE,
      'Technology||The Media Mogul Badge||3': DONE,
    },
  },
};

export function makeProgressKey(sphereName, badgeName, reqIndex) {
  return `${sphereName}||${badgeName}||${reqIndex}`;
}

export function cycleStatus(current) {
  if (!current) return IN_PROGRESS;
  if (current === IN_PROGRESS) return DONE;
  return null;
}
