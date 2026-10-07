/* ============================================================
       YOUR EXISTING TRAINING DATA
       ============================================================ */

const trainingTechniques = {
  myoreps: {
    name: "MYOREPS",

    description:
      "A subcategory of rest-pause sets and very useful for hypertrophy. Use it for forearms, biceps, delts, traps, calves.",

    how_to: [
      "Choose a load you can lift for 10-20 reps (usually).",

      {
        step: "Do your first working set",

        instructions: [
          "Rest enough to just get the burn out (5-10s).",
          "Repeat until set is below 5 reps or so.",
          "RIR is same as weekly RIR for the rest of the program.",
        ],
      },
    ],

    upsides: [
      "Amazing stimulus especially for muscles resistant to it (forearms, biceps, delts, traps, calves).",
      "Easy to sum up loads of work otherwise daunting.",
      "Saves tons of time.",
    ],

    downsides: [
      "Can't be done with exercises that generate systemic fatigue (big muscle groups).",
      "Pretty damn fatiguing, perhaps not something to use on ALL exercises in a session.",
    ],
  },

  myoreps_match_sets: {
    name: "MYOREPS MATCH SETS",

    description:
      "Great for low-systemic muscles like biceps, calves, side/rear delts, hams and RPI quads in isolation (curls, extns), lat prayers, pushdowns, etc!",

    how_to: [
      "Myoreps: do a set of 10-20 reps, rest 2-5 seconds, do another set of 5-10 reps, continue until reps drop under 3-5.",
      "Myorep match sets: do one set straight first, for instance let's say you get 18 reps at 2 RIR.",
      "Rest a normal amount of time.",
      "Do your next set and hit 18 reps AGAIN with as many myorep 3-5s pauses as needed to total 18.",
      "Repeat that as many times as needed to hit stimulus/fatigue proxies like pump and weakness.",
    ],

    upsides: [
      "Can smash stubborn muscles with tons of failure approaches.",
      "Have objective first straight set with which to track performance.",
    ],
  },

  drop_sets: {
    name: "DROP SETS",

    description:
      "Great for low-systemic muscles like biceps, calves, side/rear delts, hams and RPI quads in isolation (curls, extns), lat prayers, pushdowns, etc!",

    how_to: [
      "Do an exercise for (usually) 10-20 reps.",
      "Reduce the load on the exercise by 10-30%.",
      "Minimal to no rest at all between sets, repeat process.",
    ],

    upsides: [
      "Good stimulus for muscles that respond best to high reps/metabolites (get the biggest burns).",
      "Saves a decent amount of time.",
    ],

    downsides: [
      "Can't be done with exercises that generate systemic fatigue (big muscle groups).",
      "Best done on cable or selectorized machines, or maybe on PowerBlock dumbbells.",
      "Stop when it becomes too light to avoid junk volume.",
    ],
  },
};

/* ============================================================
       EVENTS DATA
       ============================================================ */

const events = {
  hyrox: {
    title: "HYROX",

    subtitle: "8 km of running alternating with 8 functional workout stations.",

    description:
      "HYROX consists of eight 1 km runs alternating with eight workout stations. Every athlete completes the same sequence, while prescribed weights vary according to division, gender and event format.",

    totalRunDistance: "8 km",

    runDistancePerSegment: "1 km",

    sequence: [
      {
        order: 1,
        type: "run",
        exercise: "Run",
        distance: "1 km",
      },
      {
        order: 2,
        type: "exercise",
        exercise: "SkiErg",
        distance: "1000 m",
      },
      {
        order: 3,
        type: "run",
        exercise: "Run",
        distance: "1 km",
      },
      {
        order: 4,
        type: "exercise",
        exercise: "Sled Push",
        distance: "50 m",
      },
      {
        order: 5,
        type: "run",
        exercise: "Run",
        distance: "1 km",
      },
      {
        order: 6,
        type: "exercise",
        exercise: "Sled Pull",
        distance: "50 m",
      },
      {
        order: 7,
        type: "run",
        exercise: "Run",
        distance: "1 km",
      },
      {
        order: 8,
        type: "exercise",
        exercise: "Burpee Broad Jumps",
        distance: "80 m",
      },
      {
        order: 9,
        type: "run",
        exercise: "Run",
        distance: "1 km",
      },
      {
        order: 10,
        type: "exercise",
        exercise: "Rowing",
        distance: "1000 m",
      },
      {
        order: 11,
        type: "run",
        exercise: "Run",
        distance: "1 km",
      },
      {
        order: 12,
        type: "exercise",
        exercise: "Farmers Carry",
        distance: "200 m",
      },
      {
        order: 13,
        type: "run",
        exercise: "Run",
        distance: "1 km",
      },
      {
        order: 14,
        type: "exercise",
        exercise: "Sandbag Lunges",
        distance: "100 m",
      },
      {
        order: 15,
        type: "run",
        exercise: "Run",
        distance: "1 km",
      },
      {
        order: 16,
        type: "exercise",
        exercise: "Wall Balls",
        reps: 100,
      },
    ],

    categories: [
      /* =========================================================
         OPEN
      ========================================================= */

      {
        title: "Open Division",

        subtitle: "The standard HYROX entry category.",

        description:
          "Designed to be challenging but accessible for well-trained recreational athletes.",

        divisions: [
          {
            title: "Open — Women",

            items: [
              {
                exercise: "SkiErg",
                distance: "1000 m",
                value: null,
              },

              {
                exercise: "Sled Push",
                distance: "50 m",
                value: "102 kg",
                notes: "Including sled",
              },

              {
                exercise: "Sled Pull",
                distance: "50 m",
                value: "78 kg",
                notes: "Including sled",
              },

              {
                exercise: "Burpee Broad Jumps",
                distance: "80 m",
                value: null,
              },

              {
                exercise: "Rowing",
                distance: "1000 m",
                value: null,
              },

              {
                exercise: "Farmers Carry",
                distance: "200 m",
                value: "2 × 16 kg",
                notes: "Kettlebells",
              },

              {
                exercise: "Sandbag Lunges",
                distance: "100 m",
                value: "10 kg",
              },

              {
                exercise: "Wall Balls",
                distance: null,
                value: "4 kg",
                reps: 100,
              },
            ],
          },

          {
            title: "Open — Men",

            items: [
              {
                exercise: "SkiErg",
                distance: "1000 m",
                value: null,
              },

              {
                exercise: "Sled Push",
                distance: "50 m",
                value: "152 kg",
                notes: "Including sled",
              },

              {
                exercise: "Sled Pull",
                distance: "50 m",
                value: "103 kg",
                notes: "Including sled",
              },

              {
                exercise: "Burpee Broad Jumps",
                distance: "80 m",
                value: null,
              },

              {
                exercise: "Rowing",
                distance: "1000 m",
                value: null,
              },

              {
                exercise: "Farmers Carry",
                distance: "200 m",
                value: "2 × 24 kg",
                notes: "Kettlebells",
              },

              {
                exercise: "Sandbag Lunges",
                distance: "100 m",
                value: "20 kg",
              },

              {
                exercise: "Wall Balls",
                distance: null,
                value: "6 kg",
                reps: 100,
              },
            ],

            notes: ["Open Men use the same weights as Pro Women."],
          },
        ],
      },

      /* =========================================================
         PRO
      ========================================================= */

      {
        title: "Pro Division",

        subtitle: "For experienced athletes targeting competitive race times.",

        description:
          "The Pro division uses significantly heavier weights, particularly for the sled push, sled pull and wall balls.",

        divisions: [
          {
            title: "Pro — Women",

            items: [
              {
                exercise: "SkiErg",
                distance: "1000 m",
                value: null,
              },

              {
                exercise: "Sled Push",
                distance: "50 m",
                value: "152 kg",
                notes: "Including sled",
              },

              {
                exercise: "Sled Pull",
                distance: "50 m",
                value: "103 kg",
                notes: "Including sled",
              },

              {
                exercise: "Burpee Broad Jumps",
                distance: "80 m",
                value: null,
              },

              {
                exercise: "Rowing",
                distance: "1000 m",
                value: null,
              },

              {
                exercise: "Farmers Carry",
                distance: "200 m",
                value: "2 × 24 kg",
                notes: "Kettlebells",
              },

              {
                exercise: "Sandbag Lunges",
                distance: "100 m",
                value: "20 kg",
              },

              {
                exercise: "Wall Balls",
                distance: null,
                value: "6 kg",
                reps: 100,
              },
            ],
          },

          {
            title: "Pro — Men",

            items: [
              {
                exercise: "SkiErg",
                distance: "1000 m",
                value: null,
              },

              {
                exercise: "Sled Push",
                distance: "50 m",
                value: "202 kg",
                notes: "Including sled",
              },

              {
                exercise: "Sled Pull",
                distance: "50 m",
                value: "153 kg",
                notes: "Including sled",
              },

              {
                exercise: "Burpee Broad Jumps",
                distance: "80 m",
                value: null,
              },

              {
                exercise: "Rowing",
                distance: "1000 m",
                value: null,
              },

              {
                exercise: "Farmers Carry",
                distance: "200 m",
                value: "2 × 32 kg",
                notes: "Kettlebells",
              },

              {
                exercise: "Sandbag Lunges",
                distance: "100 m",
                value: "30 kg",
              },

              {
                exercise: "Wall Balls",
                distance: null,
                value: "9 kg",
                reps: 100,
              },
            ],
          },
        ],

        notes: [
          "Elite 15 athletes use the same weights as the Pro division.",
          "Elite 15 races take place under slightly different circumstances because there are no other divisions racing on the course, making overtaking easier.",
        ],
      },

      /* =========================================================
         DOUBLES
      ========================================================= */

      {
        title: "Doubles",

        subtitle: "Two athletes complete the race together.",

        description:
          "Both athletes run each kilometre side by side and split the repetitions at each workout station however they choose.",

        divisions: [
          {
            title: "Open Doubles — Women",

            inherits: "Open — Women",

            notes: ["Uses Open Women weights."],
          },

          {
            title: "Open Doubles — Men",

            inherits: "Open — Men",

            notes: ["Uses Open Men weights."],
          },

          {
            title: "Pro Doubles — Women",

            inherits: "Pro — Women",

            notes: ["Uses Pro Women weights."],
          },

          {
            title: "Pro Doubles — Men",

            inherits: "Pro — Men",

            notes: ["Uses Pro Men weights."],
          },

          {
            title: "Mixed Doubles",

            inherits: "Open — Men",

            notes: [
              "Both athletes use the Men / Mixed weights.",
              "There is no Pro Mixed Doubles category.",
            ],
          },
        ],
      },

      /* =========================================================
         RELAY
      ========================================================= */

      {
        title: "Relay",

        subtitle: "A four-athlete team event.",

        description:
          "Four athletes share the race. Each relay member runs 2 × 1 km and performs two corresponding workout stations. Teams can strategically assign athletes according to their strengths.",

        weightPolicy: "The Relay uses Open division weights.",

        divisions: [
          {
            title: "Relay — Women",

            inherits: "Open — Women",

            notes: [
              "Each athlete runs 2 × 1 km.",
              "Each athlete performs two corresponding workout stations.",
            ],
          },

          {
            title: "Relay — Men",

            inherits: "Open — Men",

            notes: [
              "Each athlete runs 2 × 1 km.",
              "Each athlete performs two corresponding workout stations.",
            ],
          },

          {
            title: "Mixed Relay",

            mixedWeights: true,

            notes: [
              "Women use Open Women weights.",
              "Men use Open Men weights.",
              "Each athlete runs 2 × 1 km.",
              "Each athlete performs two corresponding workout stations.",
            ],

            items: [
              {
                exercise: "SkiErg",
                distance: "1000 m",
                value: null,
              },

              {
                exercise: "Sled Push",
                distance: "50 m",
                value: "102 / 152 kg",
                notes: "Women / Men, including sled",
              },

              {
                exercise: "Sled Pull",
                distance: "50 m",
                value: "78 / 103 kg",
                notes: "Women / Men, including sled",
              },

              {
                exercise: "Burpee Broad Jumps",
                distance: "80 m",
                value: null,
              },

              {
                exercise: "Rowing",
                distance: "1000 m",
                value: null,
              },

              {
                exercise: "Farmers Carry",
                distance: "200 m",
                value: "2 × 16 / 24 kg",
                notes: "Women / Men, kettlebells",
              },

              {
                exercise: "Sandbag Lunges",
                distance: "100 m",
                value: "10 / 20 kg",
                notes: "Women / Men",
              },

              {
                exercise: "Wall Balls",
                distance: null,
                value: "4 / 6 kg",
                reps: 100,
                notes: "Women / Men",
              },
            ],
          },
        ],
      },
    ],
  },
};

/* ============================================================
       EMPTY NOTES DATA
       ============================================================ */

const notes = {
  kickboxing: {
    id: "kickboxing-material",
    title: "Kick Boxing Material",
    type: "equipment",
    items: [
      "Handbandage",
      "16oz gloves (Booster / King)",
      "Jumping rope",
      "Water bottle",
      "Small and medium towel",
      "Shin guards",
      "Slippers",
      "Change of clothes (underwear etc.)",
      "Shorts + vest + sweater",
    ],
  },
};

/* ============================================================
       COMPONENTS
       ============================================================ */
const NOTES_LANDING_PAGE = `<div class="dashboard">

          <header class="dashboard-header">

            <p class="dashboard-header__eyebrow">
              Training Library
            </p>

            <h1 class="dashboard-header__title">
              Performance Hub
            </h1>

            <p class="dashboard-header__description">
              Training methods, event requirements and personal notes
              in one place.
            </p>

          </header>


          <div class="dashboard-grid">

            <button
              type="button"
              class="dashboard-tile"
              data-view="training"
            >

              <span class="dashboard-tile__number">
                01
              </span>

              <span class="dashboard-tile__title">
                ADVANCED TRAINING
              </span>

              <span class="dashboard-tile__description">
                Training methods, intensity techniques and
                fatigue-management strategies.
              </span>

              <span class="dashboard-tile__arrow">
                →
              </span>

            </button>


            <button
              type="button"
              class="dashboard-tile"
              data-view="events"
            >

              <span class="dashboard-tile__number">
                02
              </span>

              <span class="dashboard-tile__title">
                EVENTS
              </span>

              <span class="dashboard-tile__description">
                Competition divisions, exercise requirements,
                weights and event-specific information.
              </span>

              <span class="dashboard-tile__arrow">
                →
              </span>

            </button>


            <button
              type="button"
              class="dashboard-tile"
              data-view="notes"
            >

              <span class="dashboard-tile__number">
                03
              </span>

              <span class="dashboard-tile__title">
                NOTES
              </span>

              <span class="dashboard-tile__description">
                Personal notes, observations and information
                you want to keep alongside your training.
              </span>

              <span class="dashboard-tile__arrow">
                →
              </span>

            </button>

          </div>

        </div>`;
