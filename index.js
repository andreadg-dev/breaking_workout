//================================
// GLOBAL
//================================
const MOVEMENTS_SORTED = [...MOVEMENTS].sort((a, b) => {
  const catCompare = a.category.localeCompare(b.category);
  return catCompare !== 0 ? catCompare : a.name.localeCompare(b.name);
});

const STORAGE_KEY = "breakinghiit_1rm_v1";

//================================
// IMPORT WORKOUT SCREEN
//================================
function ImportWorkoutScreen() {
  $("#root").append(IMPORT_SCREEN_COMPONENT);
}

function goToMovesSelectionScreen() {
  $("#root").empty();
  MovesSelectionScreen();
}

//================================
// MOVE SELECTION SCREEN
//================================
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

// Add move label when clicking on the add button
function addMoveLabel(element) {
  $("#moves_selection").append(getMovesComponent());
}

// Remove move label when clicking on the bin button
function removeMoveLabel(element) {
  $(element).closest(".move_label").remove();
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

// Function to calculate the whole workout duration taking into consideration all exercises and rest duration
function calculateTotalWorkoutDuration() {
  let exercisesTotalCount = $("#total_count");
  let exerciseDurationInSec = $("#seconds_active");
  let restDurationInSec = $("#seconds_rest");

  let totalWorkoutDurationInSec =
    Number(exercisesTotalCount.html()) *
    (Number(exerciseDurationInSec.html()) + Number(restDurationInSec.html()));

  if (totalWorkoutDurationInSec < 60) {
    return `0 ' ${totalWorkoutDurationInSec} "`;
  } else {
    return `${Math.trunc(totalWorkoutDurationInSec / 60)} ' ${totalWorkoutDurationInSec % 60} "`;
  }
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

// Function that allows to sort drag moves in the move_selection section
function enableDraggableBehaviour() {
  Sortable.create(document.getElementById("moves_selection"), {
    animation: 150,
    handle: ".drag-handle", // optional: restrict drag to a handle
    ghostClass: "drag-ghost",
  });
}

// Main function to generate move selection screen based on localStorage
function MovesSelectionScreen() {
  // Retrieves the current moves stored locally in the browser if any
  const currentState = localStorage.getItem(STORAGE_KEY);

  // Appends to root the main sections of the screen
  $("#root").append(`<div id="workout_settings"></div>
      <div id="moves_selection"></div>
      <div id="form_buttons"></div>`);

  // Appends the workout config header to the first section
  $("#workout_settings").append(WORKOUT_CONFIG);

  // Depending on the current state loaded in the previous step, the corresponding content is appended
  currentState
    ? $("#moves_selection").append(getMovesComponent())
    : $("#form_buttons").append(ADD_BUTTON);

  // Enables the move labels draggable behaviour
  enableDraggableBehaviour();

  // Add event listener on change on the .move_dropdown elements to peform certain functions
  $(document).on("change", ".move_dropdown", function () {
    updateSelectionStyling(this);
    updateWorkoutSettings(calculateTotalExerciseCount());
    updateWorkoutSettings(null, calculateTotalWorkoutDuration());
  });
}

//================================
// FOOTER FUNCTIONS
//================================
// Set copyright in the footer
function setCopyright() {
  $("#copyright").html(
    `Copyright ©${new Date().getFullYear()} ${$("#copyright").html()}`,
  );
}
