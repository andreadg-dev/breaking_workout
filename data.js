const MOVEMENTS = [
  {
    id: "8f3b2a1c",
    name: "Indian Step",
    category: "Toprock",
    description:
      "A fundamental front-crossing step alternated with a kick-back motion.",
  },
  {
    id: "4e9d7b6a",
    name: "Cross Step",
    category: "Toprock",
    description:
      "A basic movement where one foot crosses over the other while twisting the hips.",
  },
  {
    id: "1c5e3f8b",
    name: "Side Step",
    category: "Toprock",
    description:
      "Side step, or salsa step, salsa rock, Latin rock, toprock pattern combining a small kick with a step to one side.",
  },
  {
    id: "9a2d4e7f",
    name: "Outlaw Step",
    category: "Toprock",
    description:
      "A classic rock-back step inspired by early social dances and outlaw styles.",
  },
  {
    id: "3b6c1d5e",
    name: "Kick Step",
    category: "Toprock",
    description:
      "Kick step, toprock pattern where one leg executes a small kick forward then steps back.",
  },
  {
    id: "7f4a8b2c",
    name: "6-Step",
    category: "Footwork",
    description:
      "The foundational six-move circular sequence around a central axis on the floor.",
  },
  {
    id: "2e6d9f1a",
    name: "3-Step",
    category: "Footwork",
    description:
      "Three step, or 3 step, footwork pattern, sequence of three footwork steps resembling a two step with a third step added during the sweep.",
  },
  {
    id: "5c8b3e7d",
    name: "CCs",
    category: "Footwork",
    description:
      "A dynamic floor move switching weight between hips and feet in a sweeping motion.",
  },
  {
    id: "1a7f4c9b",
    name: "Zulu Spin",
    category: "Footwork",
    description:
      "Zulu spin, footwork pattern, spin in a squatting position using the hands and feet.",
  },
  {
    id: "6d2e8f3a",
    name: "12-Step",
    category: "Footwork",
    description:
      "Scramble, or Baby Love, twelve step, 12 step, floor salsa, shuffle footwork, footwork pattern, sequence of steps in a circle where legs alternate stepping over and under one another, and hips twist from side to side.",
  },
  {
    id: "4c7e1a9d",
    name: "Hooks",
    category: "Footwork",
    description:
      "A wrapping footwork movement where one leg hooks or wraps around the ankle or lower leg of the other, creating a compact change of position and direction.",
  },
  {
    id: "8d2f6b3c",
    name: "Kickouts",
    category: "Footwork",
    description:
      "A footwork pattern where the legs extend and kick outward from a squatting position, usually with one arm supporting the body behind.",
  },
  {
    id: "5a9c3e7f",
    name: "1-Step",
    category: "Footwork",
    description:
      "Also known as the Helicopter, One Step, Front Sweep, or Coffee Grinder. A one-leg sweep performed in a full circle from a squatting position, with a small jump over the sweeping leg.",
  },
  {
    id: "2b6e8f4a",
    name: "2-Step",
    category: "Footwork",
    description:
      "Also known as the Two Step or Baby Swipe. A footwork sequence combining a sweep with a half turn before returning to a squatting position.",
  },
  {
    id: "9f3e1b7c",
    name: "Baby Freeze",
    category: "Freeze",
    description:
      "The foundational balancing pose with the head and both hands on the ground, supporting the hips on elbows.",
  },
  {
    id: "4a2c8e5d",
    name: "Chair Freeze",
    category: "Freeze",
    description:
      "Chair, or chair freeze, freeze, position supported by one leg, one arm, and the head, with the elbow of the supporting arm stabbed into the side of the waist or lower back.",
  },
  {
    id: "7b6d1f9a",
    name: "Air Chair",
    category: "Freeze",
    description:
      "Airchair, or airchair freeze, freeze, position supported by one arm, with the elbow of the supporting arm stabbed into the lower back and hips facing upward.",
  },
  {
    id: "3e5a2c8f",
    name: "Hollowback",
    category: "Freeze",
    description: "Handstand with back arched and legs extending backward.",
  },
  {
    id: "3r8a2c9q",
    name: "Head Hollowback",
    category: "Freeze",
    description: "Headstand with back arched and legs extending backward.",
  },
  {
    id: "1d8b6f4e",
    name: "Invert Freeze",
    category: "Freeze",
    description: "Also pike. Hollowback with legs piked.",
  },
  {
    id: "2f7c4a1e",
    name: "L-Sit",
    category: "Freeze",
    description:
      "A static hold where the legs are extended horizontally while balancing on both hands, demanding core and hip flexor strength.",
  },
  {
    id: "5b9d3e6f",
    name: "Handstand",
    category: "Freeze",
    description:
      "A vertical balance held on both hands with the body fully extended overhead, requiring shoulder strength, alignment, and body control.",
  },
  {
    id: "5c8d2e5g",
    name: "L Kick",
    category: "Freeze",
    description:
      "One-hand handstand with legs in an 'L' shape. Similar to the aú batido in capoeira.",
  },
  {
    id: "8a1c7f2d",
    name: "Tuck Planche",
    category: "Freeze",
    description:
      "A static hold where the hips are elevated and legs are tucked into the chest while balancing on both hands parallel to the ground.",
  },
  {
    id: "6c4d9a2e",
    name: "Elbow Freeze",
    category: "Freeze",
    description:
      "A freeze where you balance your entire body weight on one or both elbows.",
  },
  {
    id: "3f1b8c7d",
    name: "Shoulder Freeze",
    category: "Freeze",
    description:
      "An inverted freeze balancing on one shoulder with the hips elevated and legs extended or split overhead.",
  },
  {
    id: "1e5a2f8c",
    name: "Head Freeze",
    category: "Freeze",
    description:
      "A foundational static pose where you balance your body weight using a stable three-point triangle base formed by your head and both hands.",
  },
  {
    id: "3e8b2c6f",
    name: "Frog Freeze",
    category: "Freeze",
    description:
      "A compact freeze where the body is supported by both hands while the knees are positioned against or near the elbows, creating a tucked, frog-like shape with the hips elevated.",
  },
  {
    id: "9f4a7d2c",
    name: "Airbaby",
    category: "Freeze",
    description:
      "Also known as Airbaby Freeze. A one-arm-supported freeze where the knee rests on the elbow of the same side while the body is held off the ground.",
  },
];

const MOVEMENTS_SORTED = [...MOVEMENTS].sort((a, b) => {
  const catCompare = a.category.localeCompare(b.category);
  return catCompare !== 0 ? catCompare : a.name.localeCompare(b.name);
});

// Create an Array with 5 storage key names
const STORAGE_KEYS = Array.from(
  { length: 5 },
  (_, index) => `breakinghiit_1rm_v${index}`,
);

const SESSION_SAMPLE = {
  stateName: "test session name",
  storageKey: "breakinghiit_1rm_v2",
  workout: {
    secondsActive: 10,
    secondsRest: 10,
    totalExercisesCount: 1,
    totalDurationInSecs: 20,
    exercises: [
      { id: 0, exerciseId: "2e6d9f1a", exerciseName: "3-Step", count: 1 },
    ],
  },
};

const SESSION_REQUIRED_KEYS = ["stateName", "storageKey", "workout"];
const WORKOUT_REQUIRED_KEYS = [
  "secondsActive",
  "secondsRest",
  "totalExercisesCount",
  "totalDurationInSecs",
  "exercises",
];

const THRESHOLDS = {
  minExercisesInWorkout: 1,
  maxExercisesInWorkout: 30,
  minSecsActiveRest: 10,
  maxSecsActiveRest: 120,
  minExerciseCount: 1,
  minSessionNameChars: 5,
  maxSessionNameChars: 15,
};
