//================================
// GLOBAL
//================================
function newSessionObject() {
  try {
    let sessionObject = {
      stateName: "",
      storageKey: "",
      workout: {
        secondsActive: 0,
        secondsRest: 0,
        totalExercisesCount: 0,
        totalDurationInSecs: 0,
        exercises: [],
      },
    };

    sessionObject.workout.secondsActive = Number($("#seconds_active").html());
    sessionObject.workout.secondsRest = Number($("#seconds_rest").html());
    sessionObject.workout.totalExercisesCount = Number(
      $("#total_count").html(),
    );
    sessionObject.workout.totalDurationInSecs = Number(
      $("#total_duration_hidden").html(),
    );

    let filteredMoves = $(".move_label")
      .find(".move_dropdown")
      .filter(function () {
        return $(this).val() !== null && $(this).val().trim() !== "";
      });

    if (filteredMoves.length < 1) {
      return;
    }

    filteredMoves.each((index, item) => {
      let exerciseValue = $(item)
        .closest(".move_label")
        .find(".move_dropdown")
        .val()
        .split("-")[0];

      let exercise = MOVEMENTS.filter((item) => {
        return item.id === exerciseValue;
      });

      let exerciseCount = $(item)
        .closest(".move_label")
        .find(".move_count")
        .html();

      sessionObject.workout.exercises.push({
        id: index,
        exerciseId: exerciseValue,
        exerciseName: exercise[0].name,
        count: Number(exerciseCount),
      });
    });

    return sessionObject;
  } catch (error) {
    newErrorPopup(
      `An unexpected error occurred while creating a new training session object:<br/><br/>${error}`,
    );
  }
}

function saveCurrentState(storageKey, stateName) {
  if (
    !STORAGE_KEYS.includes(storageKey) ||
    !(
      stateName.trim().length >= THRESHOLDS.minSessionNameChars &&
      stateName.trim().length <= THRESHOLDS.maxSessionNameChars
    )
  ) {
    newErrorPopup(`Either the storage key selected is incorrect or the session name you chose does not
      comply with the session name requirements (it can only be between 5 and 20 characters long):<br/><br/>
        • Session name selected: '${stateName}'<br/>
        • Storage key selected: '${storageKey}'`);

    return;
  }

  try {
    let sessionToSave = newSessionObject();
    sessionToSave.stateName = stateName;
    sessionToSave.storageKey = storageKey;

    localStorage.setItem(
      storageKey,
      window.btoa(JSON.stringify(sessionToSave)),
    );
  } catch (error) {
    newErrorPopup(
      `An unexpected error occurred while trying to save session to storage key ${storageKey}:<br/><br/>${error}`,
    );
  }
}

function loadStateFromStorage(storageKey) {
  try {
    MovesSelectionScreen(localStorage.getItem(storageKey));
  } catch (error) {
    newErrorPopup(
      `An unexpected error occurred while retrieving session saved on local storage ${storageKey}:<br/><br/>${error}`,
    );
  }
}

function parseProvidedSession(sessionBase64String) {
  try {
    if (!sessionBase64String && sessionBase64String.trim().length < 1) {
      newErrorPopup(`The provided session string does not contain any data!`);
    } else {
      let parsedSession = JSON.parse(window.atob(sessionBase64String));
      //console.log(parsedSession);

      // Checking if the parsed object has all the required keys
      if (
        !SESSION_REQUIRED_KEYS.every((key) => key in parsedSession) &&
        !WORKOUT_REQUIRED_KEYS.every((key) => key in parsedSession.workout)
      ) {
        newErrorPopup(`The session provided is malformed and cannot be used!`);
      } else {
        return parsedSession;
      }
    }
  } catch (error) {
    newErrorPopup(
      `An unexpected error occurred while trying to parse the session provided:<br/><br/>${error}`,
    );
  }
}

function saveStateFromNamePopup() {
  let storageKey = $("#sessionnamepopup_storagekey").html().trim();
  let stateName = $("#session_name_input").val().trim();

  try {
    saveCurrentState(storageKey, stateName);
    newSuccessPopup(
      `Session saved successfully on '${storageKey}' with the following name:'${stateName}'.`,
    );
  } catch (error) {
    newErrorPopup(
      `An unexpected error occurred when saving '${stateName}' session on ${storageKey}:<br/><br/>${error}.`,
    );
  }
}

function newOverlayScreen(header, content, notificationType) {
  // Remove any previous overlay screen if any
  $("#overlay_screen").remove();

  // Generate a new overlay component html code
  let newOverlayComponent = OVERLAY_COMPONENT(
    header,
    content,
    notificationType,
  );

  // Append new overlay component html to root
  $("#root").append(newOverlayComponent);
}

// Function to generate error pop-ups using the overlay screen
function newErrorPopup(message) {
  newOverlayScreen("ERROR", message, "error");
}

// Function to generate success pop-ups using the overlay screen
function newSuccessPopup(message) {
  newOverlayScreen("SUCCESS", message, "success");
}

// Function to close the overlay screen by clicking on the X icon of the pop-up
function closeOverlayScreen(element) {
  $(element).closest("#overlay_screen").remove();
}

function newSessionStatePopup(action) {
  if (
    action === "save" &&
    Number($("#total_count").html()) < THRESHOLDS.minExercisesInWorkout
  ) {
    newErrorPopup(
      `You cannot save a workout session with less than ${THRESHOLDS.minExercisesInWorkout} exercise.`,
    );
    return;
  }

  if (!["save", "load"].includes(action.toLowerCase())) {
    newErrorPopup("You can only choose Save or Load!");
    return;
  }

  if (action === "save") {
    let currentSessionSates = STORAGE_KEYS.map((storageKey, index) => {
      let currentState = localStorage.getItem(storageKey);
      if (currentState && currentState.trim() != "") {
        let parsedStorageValue = JSON.parse(window.atob(currentState));

        return SAVELOAD_SESSION_POPUP(
          "used",
          index,
          parsedStorageValue.stateName,
          parsedStorageValue.storageKey,
          action.toLowerCase(),
        );
      } else {
        return SAVELOAD_SESSION_POPUP(
          "empty",
          index,
          "Undefined",
          storageKey,
          action.toLowerCase(),
        );
      }
    });

    newOverlayScreen(
      action.toUpperCase(),
      `<div>${currentSessionSates.join("")}</div>`,
    );
  }

  if (action === "load") {
    let currentSessionSates = STORAGE_KEYS.map((storageKey, index) => {
      let currentState = localStorage.getItem(storageKey);
      if (currentState && currentState.trim() != "") {
        let parsedStorageValue = JSON.parse(window.atob(currentState));

        return SAVELOAD_SESSION_POPUP(
          "used",
          index,
          parsedStorageValue.stateName,
          parsedStorageValue.storageKey,
          action.toLowerCase(),
        );
      }
    });

    if (currentSessionSates.length < 1) {
      newOverlayScreen(action.toUpperCase(), "NO DATA TO BE LOADED!");
    } else {
      newOverlayScreen(
        action.toUpperCase(),
        `<div>${currentSessionSates.join("")}</div>`,
      );
    }
  }
}

function newSessionStateNamePopup(storageKey, action) {
  if (Number($("#total_count").html()) < THRESHOLDS.minExercisesInWorkout) {
    newErrorPopup(
      `You cannot save a workout session with less than ${THRESHOLDS.minExercisesInWorkout} exercise.`,
    );
    return;
  }

  newOverlayScreen("SESSION NAME", SESSION_NAME_POPUP(storageKey, action));
}

function copyToClipboard(element) {
  const contentToCopy = $(element).text().trim();

  navigator.clipboard
    .writeText(contentToCopy)
    .then(() => {
      console.log("Copied to clipboard:", contentToCopy);
      // Optionally, display a notification or provide visual feedback to the user
    })
    .catch((error) => {
      newErrorPopup(`Error copying to clipboard: ${error}`);
    });

  //Displays temporarily the alert div when copying a card-body to the clipboard
  $(element).addClass("green"); // Add class to show the alert
  // Set timeout to remove the class after 2 seconds
  setTimeout(function () {
    $(element).removeClass("green"); // Remove class to hide the alert
  }, 2000);
}

function navbarMenuState() {
  // Prevent clicks inside the menu from closing it
  $("#navbar_menu").on("click", function (e) {
    e.stopPropagation();
  });

  // Close menu when clicking anywhere else
  $(document).on("click", function () {
    $("#navbar_menu").prop("open", false);
  });
}

function stopBreakbeat() {
  breakbeat("pause");
  clearInterval(countdownInterval);
}

//================================
// IMPORT WORKOUT SCREEN
//================================
function ImportWorkoutScreen() {
  stopBreakbeat();

  $("#root").empty();
  $("#root").append(IMPORT_SCREEN_COMPONENT);
}

//================================
// MOVE SELECTION SCREEN
//================================
// Create moves dropdown
function generateMovesDropdown(selectedValueId) {
  /*   let move_options = MOVEMENTS_SORTED.map((move) => {
    let move_value = move.name
      .toLowerCase()
      .replaceAll(" ", "_")
      .replaceAll("/", "");
    return `<option class="${move.category}" value="${move_value}">${move.name}</option>`;
  });

  return `<select name="movements" class="move_dropdown pointer">
            <option value="" selected>--Choose an option--</option>
            ${move_options.join("")}
          </select>`; */

  // Group moves by category
  const grouped = MOVEMENTS_SORTED.reduce((acc, move) => {
    (acc[move.category] = acc[move.category] || []).push(move);
    return acc;
  }, {});

  const optgroups = Object.entries(grouped).map(([category, moves]) => {
    const options = moves
      .map((move) => {
        let move_value = move.name
          .toLowerCase()
          .replaceAll(" ", "_")
          .replaceAll("/", "");
        return `<option value="${move.id}-${move_value}" ${selectedValueId && selectedValueId === move.id ? "selected" : ""}>${move.name}</option>`;
      })
      .join("");
    return `<optgroup label="${category}">${options}</optgroup>`;
  });

  return `<select name="movements" class="move_dropdown pointer">
            <option value="" ${!selectedValueId ? "selected" : ""}>--Choose an option--</option>
            ${optgroups.join("")}
          </select>`;
}

// Generate move component
function getMovesComponent(exerciseCount, exerciseId, load) {
  return MOVE_LABEL(
    generateMovesDropdown(exerciseId || null),
    exerciseCount || 1,
    load || null,
  );
}

// Add move label when clicking on the add button
function addMoveLabel(element) {
  if (Number($("#total_count").html()) >= THRESHOLDS.maxExercisesInWorkout) {
    newErrorPopup(
      `You cannot add more than ${THRESHOLDS.maxExercisesInWorkout} exercises for one workout session.`,
    );
    return;
  }

  $("#moves_selection").append(getMovesComponent());
}

// Remove move label when clicking on the bin button
function removeMoveLabel(element) {
  $(element).closest(".move_label").remove();

  // Update total exercise count and total duration
  updateWorkoutSettings(calculateTotalExerciseCount());
  updateWorkoutSettings(null, calculateTotalWorkoutDuration());
}

// Functions to increase or decrease the corresponding move count
function increaseMoveCount(element) {
  if (Number($("#total_count").html()) >= THRESHOLDS.maxExercisesInWorkout) {
    newErrorPopup(
      `You cannot add more than ${THRESHOLDS.maxExercisesInWorkout} exercises for one workout session.`,
    );
    return;
  }

  let countElement = $(element).parent().find(".move_count");
  let current_count = Number(countElement.html()) || 1;
  countElement.html(current_count + 1);
}

function decreaseMoveCount(element) {
  let countElement = $(element).parent().find(".move_count");
  let current_count = Number(countElement.html()) || 1;

  if (current_count <= THRESHOLDS.minExerciseCount) {
    //window.alert("You cannot choose a number less than 1");
    newErrorPopup(
      `You cannot choose a number less than ${THRESHOLDS.minExerciseCount}`,
    );
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
  const totalDurationHiddenElement = $("#total_duration_hidden");
  const totalSecsActiveElement = $("#seconds_active");
  const totalSecsRestElement = $("#seconds_rest");

  totalExercisesCount && totalExerCountElement.html(totalExercisesCount);
  totalDuration &&
    totalDurationElement.html(totalDuration.totalDurationDisplay);
  totalDuration &&
    totalDurationHiddenElement.html(totalDuration.totalDurationHidden);
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
function calculateTotalWorkoutDuration(
  totalCountExercises,
  secondsActive,
  secondsRest,
) {
  let exercisesTotalCount = totalCountExercises || $("#total_count").html();
  let exerciseDurationInSec = secondsActive || $("#seconds_active").html();
  let restDurationInSec = secondsRest || $("#seconds_rest").html();

  let totalWorkoutDurationInSec =
    Number(exercisesTotalCount) *
    (Number(exerciseDurationInSec) + Number(restDurationInSec));

  if (totalWorkoutDurationInSec < 60) {
    return {
      totalDurationHidden: totalWorkoutDurationInSec,
      totalDurationDisplay: `0 ' ${totalWorkoutDurationInSec} "`,
    };
  } else {
    return {
      totalDurationHidden: totalWorkoutDurationInSec,
      totalDurationDisplay: `${Math.trunc(totalWorkoutDurationInSec / 60)} ' ${totalWorkoutDurationInSec % 60} "`,
    };
  }
}

// Generic function to increase or decrease active or rest time
function updateActiveRestTime(element, plusorminus) {
  let activeorrest = "";
  let step = 5;
  let minsecs = THRESHOLDS.minSecsActiveRest;
  let maxsecs = THRESHOLDS.maxSecsActiveRest;
  let secondsError = `You can only select an amount of seconds between ${minsecs}" and ${maxsecs}"`;

  if ($(element).closest("#seconds_exercises").length > 0) {
    activeorrest = "active";
  }

  if ($(element).closest("#seconds_rest_duration").length > 0) {
    activeorrest = "rest";
  }

  if (!activeorrest || activeorrest.trim() === "") {
    console.log(
      `An error occurred. Neither active nor rest selected:<br/><br/>
        • Active lenth: ${$(element).closest("#seconds_exercises").length}<br/>
        • Rest lenth: ${$(element).closest("#seconds_rest_duration").length}`,
    );
    return;
  }

  let secondsActive = $("#seconds_active");
  let secondsRest = $("#seconds_rest");

  // In case the plus and minus buttons in the active section are pressed
  if (activeorrest === "active") {
    if (plusorminus === "plus") {
      if (
        Number(secondsActive.html()) + step < minsecs ||
        Number(secondsActive.html()) + step > maxsecs
      ) {
        newErrorPopup(secondsError);

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
        newErrorPopup(secondsError);

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
        newErrorPopup(secondsError);

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
        newErrorPopup(secondsError);

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
function MovesSelectionScreen(sessionBase64String) {
  stopBreakbeat();

  try {
    //Empty root. Remove all current elements
    $("#root").empty();

    // Appends to root the main sections of the screen
    $("#root").append(`<div id="workout_settings"></div>
      <div id="moves_selection"></div>
      <div id="form_buttons"></div>`);

    // Appends the workout config header to the first section and form buttons above the footer
    $("#workout_settings").append(WORKOUT_CONFIG);
    $("#form_buttons").append(FORM_BUTTONS);

    // If a session string is provided, the moves will load and session details too
    if (sessionBase64String && sessionBase64String.trim().length > 0) {
      let parsedSession = parseProvidedSession(sessionBase64String).workout;

      updateWorkoutSettings(
        parsedSession.totalExercisesCount,
        calculateTotalWorkoutDuration(
          parsedSession.totalExercisesCount,
          parsedSession.secondsActive,
          parsedSession.secondsRest,
        ),
        parsedSession.secondsActive,
        parsedSession.secondsRest,
      );

      let sessionMoves = parsedSession.exercises.map((exercise) => {
        return getMovesComponent(exercise.count, exercise.exerciseId, "load");
      });

      $("#moves_selection").append(sessionMoves.join(""));
    }

    // Enables the move labels draggable behaviour
    enableDraggableBehaviour();

    // Add event listener on change on the .move_dropdown elements to peform certain functions
    $(document).on("change", ".move_dropdown", function () {
      updateSelectionStyling(this);
      updateWorkoutSettings(calculateTotalExerciseCount());
      updateWorkoutSettings(null, calculateTotalWorkoutDuration());
    });
  } catch (error) {
    newErrorPopup(
      `An unexpected error occurred while generating your Move Selection page:<br/><br/>${error}`,
    );
  }
}

//================================
// PLAY SCREEN FUNCTIONS
//================================

function PlayScreen() {
  if (Number($("#total_count").html()) < THRESHOLDS.minExercisesInWorkout) {
    newErrorPopup(
      `You cannot start a workout session with less than ${THRESHOLDS.minExercisesInWorkout} exercise.`,
    );
    return;
  }

  const session = newSessionObject();

  try {
    if (session && session.workout) {
      $("#root").empty();
      $("#root").append(WORKOUT_PLAYCARD);
      startWorkoutSession(session.workout);
    } else {
      newErrorPopup(`No training session found.`);
    }
  } catch (error) {
    newErrorPopup(
      `An unexpected error occurred while trying to start training session:<br/><br/> ${error}`,
    );
  }
}

async function manageWakeLock(action) {
  if (action === "request_lock") {
    try {
      wakeLock2 = await navigator.wakeLock.request("screen");
      wakeLock2.addEventListener("release", () => {
        console.log("Wake Lock was released (event listener)");
      });
      console.log("Wake Lock acquired");
      return wakeLock2;
    } catch (err) {
      console.error("Error acquiring Wake Lock:", err);
      // Handle the error (e.g., the browser doesn't support it)
      return; // Stop execution if Wake Lock acquisition fails
    }
  }

  if (action === "request_release") {
    if (wakeLock2) {
      // Check if wakeLock2 is not null before releasing
      try {
        await wakeLock2.release(); // Use await for proper error handling
        wakeLock2 = null;
        console.log("Wake Lock released");
      } catch (err) {
        console.error("Error releasing Wake Lock:", err);
        // Handle the error (e.g., log it or show a message)
      }
    }
  }
}

// Function to play the breakbeat or to pause it in a fade out
// The breakbeat object has to be declare outside the function not to play several tracks at the same time
const breakbeatAudio = new Audio("./audio/funky_deegeeace.mp3");
function breakbeat(action) {
  if (action === "play") {
    breakbeatAudio.volume = 1;
    breakbeatAudio.currentTime = 0;
    breakbeatAudio.play();
  }
  if (action === "pause") {
    const fadeInterval = setInterval(() => {
      if (breakbeatAudio.volume > 0.05) {
        breakbeatAudio.volume = Math.max(0, breakbeatAudio.volume - 0.05);
      } else {
        breakbeatAudio.volume = 0;
        breakbeatAudio.pause();
        clearInterval(fadeInterval);
      }
    }, 50);
  }
}

// WORK IN PROGRESS //
countdownInterval = null;
async function newCountDownSeconds(
  seconds,
  cssClass,
  cardTitle,
  cardSubtitle,
  cardImg,
) {
  let sessionPlayCard = $("#workout_play_card");
  let countDownElement = $("#timeBasedExercisesSeconds");
  let setTitleElement = $("#workout_playcard_title");
  let setSubtitleElement = $("#workout_playcard_subtitle");
  let setCardImgElement = $("#workout_playcard_img");

  if (countdownInterval) {
    clearInterval(countdownInterval);
    countdownInterval = null;
  }

  return new Promise((resolve) => {
    countdownInterval = setInterval(() => {
      if (seconds === 0) {
        clearInterval(countdownInterval);
        countdownInterval = null;
        resolve();
        return;
      }

      seconds--;
      sessionPlayCard
        .removeClass("rest_styling play_styling")
        .addClass(cssClass);
      countDownElement.text(seconds.toString());
      setTitleElement.text(cardTitle);
      setSubtitleElement.text(cardSubtitle);
      setCardImgElement.html(cardImg || "");
    }, 1000);
  });
}

async function startWorkoutSession(session) {
  let timeBasedExercisesTimer = $("#timeBasedExercisesSeconds");
  let setTimeSeconds = session.secondsActive;
  let numOfExercises = session.totalExercisesCount;
  let restTimeSeconds = session.secondsRest;
  let sessionExercises = session.exercises;
  let setTitleElement = $("#workout_playcard_title");
  let setSubtitleElement = $("#workout_playcard_subtitle");
  arrayExercises = [];

  // Rest object
  let restObject = {
    id: 0,
    exerciseId: "",
    exerciseName: "REST",
    count: 1,
    duration: restTimeSeconds,
  };

  // Clones exercises as many times is their count and add a rest item in between
  sessionExercises
    .flatMap((exercise) =>
      Array.from({ length: exercise.count }, () => structuredClone(exercise)),
    )
    .forEach((exercise, index) => {
      exercise.id = arrayExercises.length;
      exercise.duration = setTimeSeconds;

      arrayExercises.push(exercise);
      arrayExercises.push({
        ...restObject,
        id: arrayExercises.length,
        exerciseId: `rest-${String(arrayExercises.length).padStart(6, "0")}`,
      });
    });

  // Request browser wake lock to keep the browser page focused so that it does not turn on for inactivity
  let wakeLock2 = manageWakeLock("request_lock");

  // For loop to loop through each exercise and setting color and title of the countdown
  let setCounter = 0;
  for (const [index, exercise] of arrayExercises.entries()) {
    if (index % 2 === 0) {
      setCounter++;
      breakbeat("play");
    } else {
      breakbeat("pause");
    }
    let styling = index % 2 === 0 ? "play_styling" : "rest_styling";
    let cardTitle = "";
    let cardSubtitle = "";
    let cardImg = "";

    if (index % 2 === 0) {
      cardTitle = exercise.exerciseName;
      cardSubtitle = `ROUND ${index} / ${numOfExercises}`;
      cardImg = MOVE_IMG_PLACEHOLDER;
    } else {
      cardTitle = "REST";
      cardSubtitle =
        arrayExercises.length > index + 1
          ? `NEXT: ${arrayExercises[index + 1]?.exerciseName}`
          : "";
      cardImg = REST_IMG;
    }

    if (index === arrayExercises.length - 2) {
      cardTitle = exercise.exerciseName;
      cardSubtitle = `LAST ROUND`;
      cardImg = MOVE_IMG_PLACEHOLDER;
    }

    await newCountDownSeconds(
      exercise.duration,
      styling,
      cardTitle,
      cardSubtitle,
      cardImg,
    );
  }

  // Request browser wake lock release after the session is over
  manageWakeLock("request_release");
}

//================================
// MOVES OVERVIEW SCREEN
//================================
function toggleMoveOverviewInfo() {
  $(document).on("click", ".move_overview_visibility_icon", function () {
    const sessionContent = $(this)
      .closest(".move_overview")
      .find(".move_overview_content");

    // Slow toggle: animate show/hide instead of instantly switching a CSS class
    const durationMs = 350; // increase to slow down more (e.g. 400, 600)

    if (sessionContent.is(":visible")) {
      $(this).html(CLOSEDEYE_ICON);
      sessionContent.stop(true, true).slideUp(durationMs);
    } else {
      $(this).html(OPENEYE_ICON);
      sessionContent.stop(true, true).slideDown(durationMs);
    }
  });
}

function MoveOverviewScreen() {
  stopBreakbeat();

  $("#root").empty();

  let movesOverview = MOVEMENTS_SORTED.map((move) => {
    return MOVE_OVERVIEW_COMPONENT(
      move?.id,
      move?.name,
      move?.category,
      move?.description,
      move?.media,
    );
  });

  $("#root").append(movesOverview.join(""));

  // Closes the navbar menu
  $("#navbar_menu").prop("open", false);
}

//================================
// SAVED SESSIONS SCREEN
//================================
function toggleSavedSessionInfo() {
  $(document).on("click", ".saved_session_visibility_icon", function () {
    const sessionContent = $(this)
      .closest(".saved_session")
      .find(".saved_session_content");

    // Slow toggle: animate show/hide instead of instantly switching a CSS class
    const durationMs = 350; // increase to slow down more (e.g. 400, 600)

    if (sessionContent.is(":visible")) {
      $(this).html(CLOSEDEYE_ICON);
      sessionContent.stop(true, true).slideUp(durationMs);
    } else {
      $(this).html(OPENEYE_ICON);
      sessionContent.stop(true, true).slideDown(durationMs);
    }
  });
}

function SavedSessionsScreen() {
  stopBreakbeat();

  $("#root").empty();

  let savedSessions = STORAGE_KEYS.map((storageKey, index) => {
    let currentState = localStorage.getItem(storageKey);

    if (currentState && currentState.trim() != "") {
      let session = JSON.parse(window.atob(currentState));
      let parsedStorageValue = JSON.stringify(
        JSON.parse(window.atob(currentState)),
        null,
        2,
      );

      return SAVED_SESSION_COMPONENT(
        index,
        session.stateName,
        storageKey,
        parsedStorageValue,
        currentState,
      );
    }
  });

  let validSessions = savedSessions.filter(Boolean);

  if (validSessions.length > 0) {
    $("#root").append(savedSessions.join(""));
  } else {
    $("#root").append(
      `<div class="nosavedsession_window">NO SAVED SESSION FOUND!</div>`,
    );
  }

  // Closes the navbar menu
  $("#navbar_menu").prop("open", false);
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
