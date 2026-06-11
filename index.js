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
];

const MOVEMENTS_SORTED = [...MOVEMENTS].sort((a, b) => {
  const catCompare = a.category.localeCompare(b.category);
  return catCompare !== 0 ? catCompare : a.name.localeCompare(b.name);
});

const STORAGE_KEY = "breakinghiit_1rm_v1";

// Set copyright in the footer
function setCopyright() {
  $("#copyright").html(
    `Copyright ©${new Date().getFullYear()} ${$("#copyright").html()}`,
  );
}

// Create moves dropdown
function generateMovesDropdown() {
  let move_options = MOVEMENTS_SORTED.map((move) => {
    let move_value = move.name
      .toLowerCase()
      .replaceAll(" ", "_")
      .replaceAll("/", "");
    return `<option class="${move.category}" value="${move_value}">${move.name}</option>`;
  });

  return `<select name="movements" class="move_dropdown pointer">
            <option value="" selected>--Choose an option--</option>
            ${move_options.join("")}
          </select>`;
}

// Generate move component
function getMovesComponent() {
  return MOVE_LABEL.replace("{{movesdropdown}}", generateMovesDropdown());
}

// Generate and append move selection screen based on localStorage
function getMovesSelectionScreen() {
  const currentState = localStorage.getItem(STORAGE_KEY);

  $("#workout_settings").append(WORKOUT_CONFIG);

  currentState
    ? $("#moves_selection").append(getMovesComponent())
    : $("#form_buttons").append(ADD_BUTTON);
}

// Add move label when clicking on the add button
function addMoveLabel(element) {
  $("#moves_selection").append(getMovesComponent());
}

// Remove move label when clicking on the bin button
function removeMoveLabel(element) {
  $(element).parent(".move_label").remove();
}

// Functions to increase or decrease the corresponding move count
function increaseMoveCount(element) {
  let countElement = $(element).parent().find(".move_count");
  let current_count = Number(countElement.html()) || 1;
  countElement.html(current_count + 1);
}

function decreaseMoveCount(element) {
  let countElement = $(element).parent().find(".move_count");
  let current_count = Number(countElement.html()) || 1;

  if (current_count <= 1) {
    window.alert("You cannot choose a number less than 1");
  } else {
    countElement.html(current_count - 1);
  }
}

// Function to update workout settings
function updateWorkoutSettings(
  totalExercisesCount,
  totalDuration,
  secondsActive,
  secondsRest,
) {
  const totalExerCountElement = $("#total_count");
  const totalDurationElement = $("#total_duration");
  const totalSecsActiveElement = $("#seconds_active");
  const totalSecsRestElement = $("#seconds_rest");

  totalExercisesCount && totalExerCountElement.html(totalExercisesCount);
  totalDuration && totalDurationElement.html(totalDuration);
  secondsActive && totalSecsActiveElement.html(secondsActive);
  secondsRest && totalSecsRestElement.html(secondsRest);
}

// Function to update the selection label styling
function updateSelectionStyling(element) {
  let selectedMove = $(element).val();
  selectedMove && selectedMove.trim() != ""
    ? $(element)
        .closest(".move_label")
        .removeClass("noselection")
        .addClass("okselection")
    : $(element)
        .closest(".move_label")
        .removeClass("okselection")
        .addClass("noselection");
}

// Function to calculate total exercise count by summing all exercise count in the move labels
function calculateTotalExerciseCount() {
  let exercisesCountArray = [];

  let filteredMoves = $(".move_label")
    .find(".move_dropdown")
    .filter(function () {
      return $(this).val() !== null && $(this).val().trim() !== "";
    });

  if (filteredMoves.length < 1) {
    return "0";
  }

  filteredMoves.each((index, item) => {
    let exerciseCount = $(item)
      .closest(".move_label")
      .find(".move_count")
      .html();
    exercisesCountArray.push(Number(exerciseCount));
  });

  const total = exercisesCountArray.reduce((sum, count) => sum + count, 0);
  return total;
}

// Generic function to increase or decrease active or rest time
function updateActiveRestTime(element, plusorminus) {
  let activeorrest = "";

  if ($(element).closest("#seconds_exercises").length > 0) {
    activeorrest = "active";
  }

  if ($(element).closest("#seconds_rest_duration").length > 0) {
    activeorrest = "rest";
  }

  if (!activeorrest || activeorrest.trim() === "") {
    console.log(
      `An error occurred. Neither active nor rest selected:\n  Active lenth: ${$(element).closest("#seconds_exercises").length}\n  Rest lenth: ${$(element).closest("#seconds_rest_duration").length}`,
    );
    return;
  }

  let secondsActive = $("#seconds_active");
  let secondsRest = $("#seconds_rest");

  let step = 5;
  let minsecs = 10;
  let maxsecs = 120;

  // In case the plus and minus buttons in the active section are pressed
  if (activeorrest === "active") {
    if (plusorminus === "plus") {
      if (
        Number(secondsActive.html()) + step < minsecs ||
        Number(secondsActive.html()) + step > maxsecs
      ) {
        window.alert(
          `You can only select an amount of seconds between ${minsecs}" and ${maxsecs}"`,
        );
        return;
      } else {
        secondsActive.html(Number(secondsActive.html()) + 5);
      }
    }
    if (plusorminus === "minus") {
      if (
        Number(secondsActive.html()) - step < minsecs ||
        Number(secondsActive.html()) - step > maxsecs
      ) {
        window.alert(
          `You can only select an amount of seconds between ${minsecs}" and ${maxsecs}"`,
        );
        return;
      } else {
        secondsActive.html(Number(secondsActive.html()) - 5);
      }
    }
  }

  if (activeorrest === "rest") {
    if (plusorminus === "plus") {
      if (
        Number(secondsRest.html()) + step < minsecs ||
        Number(secondsRest.html()) + step > maxsecs
      ) {
        window.alert(
          `You can only select an amount of seconds between ${minsecs}" and ${maxsecs}"`,
        );
        return;
      } else {
        secondsRest.html(Number(secondsRest.html()) + 5);
      }
    }
    if (plusorminus === "minus") {
      if (
        Number(secondsRest.html()) - step < minsecs ||
        Number(secondsRest.html()) - step > maxsecs
      ) {
        window.alert(
          `You can only select an amount of seconds between ${minsecs}" and ${maxsecs}"`,
        );
        return;
      } else {
        secondsRest.html(Number(secondsRest.html()) - 5);
      }
    }
  }
}
