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
      "A lateral bouncing step where the dancer moves side to side while opening the arms.",
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
      "A rhythm-based step involving a quick kick forward followed by a step back.",
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
      "A fast three-move circular sequence that emphasizes speed and directional shifts.",
  },
  {
    id: "5c8b3e7d",
    name: "C-Walk / CCs",
    category: "Footwork",
    description:
      "A dynamic floor move switching weight between hips and feet in a sweeping motion.",
  },
  {
    id: "1a7f4c9b",
    name: "Zulu Spin",
    category: "Footwork",
    description:
      "A rapid 180 or 360-degree spin executed on one hand and foot to change direction.",
  },
  {
    id: "6d2e8f3a",
    name: "Baby Love",
    category: "Footwork",
    description:
      "A smooth, continuous tracking step done on the knees and feet in a circular pattern.",
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
      "A balancing pose on one elbow stabbed into the lower back while the feet arch over like a chair.",
  },
  {
    id: "7b6d1f9a",
    name: "Air Chair",
    category: "Freeze",
    description:
      "An advanced variation of the chair freeze where the head and feet stay off the floor entirely.",
  },
  {
    id: "3e5a2c8f",
    name: "Hollowback",
    category: "Freeze",
    description:
      "An inverted bridge position held upside down, stretching the legs back over the head while balancing on hands or forearms.",
  },
  {
    id: "1d8b6f4e",
    name: "Invert Freeze",
    category: "Freeze",
    description:
      "A dynamic upside-down pose where the hips are high and legs are bent or tucked, often supported by shoulders or hands.",
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
    id: "0e5a2f9b",
    name: "Handstand Freeze",
    category: "Freeze",
    description:
      "A vertical freeze held on both hands with the body fully extended overhead, locked in place to the beat with controlled balance and body tension.",
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
