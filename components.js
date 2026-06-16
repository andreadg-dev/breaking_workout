//================================
// GLOBAL COMPONENTS
//================================

// ICONS
const CLOSE_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
</svg>`;

const COUNTING_ICON = `<svg xmlns="http://w3.org" viewBox="0 0 22 22" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="6" y1="5" x2="6" y2="19" />
  <line x1="10" y1="5" x2="10" y2="19" />
  <line x1="14" y1="5" x2="14" y2="19" />
  <line x1="18" y1="5" x2="18" y2="19" />
  <line x1="3" y1="17" x2="21" y2="7" />
</svg>`;

const PAUSE_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-pause-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0z"/>
</svg>`;

const CLOCK_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
</svg>`;

const PLAY_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
</svg>`;

const BIN_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>`;

const MINUS_CIRCLE_FILL = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-dash-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"/>
</svg>`;

const PLUS_CIRCLE_FILL = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
</svg>`;

const ERROR_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 90 90">
  
  <!-- Red rounded square -->
  <rect x="0" y="0" width="90" height="90" rx="18" ry="18" fill="#ec0000"/>

  <!-- White cross -->
  <line x1="25" y1="25" x2="65" y2="65" stroke="white" stroke-width="8" stroke-linecap="round"/>
  <line x1="65" y1="25" x2="25" y2="65" stroke="white" stroke-width="8" stroke-linecap="round"/>

</svg>`;

// OTHER GLOBAL COMPONENTS
const SEPARATOR = `<div class="separator"></div>`;

const OVERLAY_COMPONENT = (header, content, notificationType) => {
  let errorItems =
    notificationType && notificationType === "error"
      ? {
          icn: `<span class="error_icn">${ERROR_ICON}</span>`,
          glow: "red_glow",
        }
      : null;

  return `<div id="overlay_screen">
    <div id="overlay_screen_card" class="flex-column ${errorItems ? errorItems.glow : ""}">   
        <div id="overlay_screen_header">
            ${errorItems ? errorItems.icn : ""}
            <button onClick="closeOverlayScreen(this)" id="overlay_screen_closebtn" type="button" class="close" aria-label="Close">
                <span aria-hidden="true">${CLOSE_ICON}</span>
            </button>
            <span>${header}</span></div>
        <div id="overlay_screen_content">${content}</div>
    </div>
</div>`;
};

const SAVELOAD_SESSION_POPUP = (status, index, stateName, storageKey) => {
  if (!["used", "empty"].includes(status)) {
    return;
  }

  let saveState =
    status === "used" ? "OVERWRITE" : status === "empty" && "SAVE";

  return `<div class="popup_storage_line flex">
        <div class="popup_storage_line_left flex-column">
          <div class="popup_storage_line_left_namestatus">
            <span class="popup_storage_line_left_index">${index}.</span> <span>${stateName}</span>
            <span class="storage_status storage_status_${status}">${status}</span>
          </div>
          <span class="storage_key">storage key: ${storageKey}</span>
        </div>
        <div 
            class="popup_btn popup_${saveState.toLowerCase()}_btn pointer"
            onClick="newSessionStateNamePopup('${storageKey}')"
            >${saveState}</div>
      </div>`;
};

//================================
// IMPORT WORKOUT SCREEN
//================================

const IMPORT_SCREEN_COMPONENT = `<div id="import_screen_wrapper" class="flex-column">
    <div class="import_screen_top flex-column">
        <label id="workout_string_lbl" for="workout_string">WORKOUT STRING</label>
        <textarea 
            id="workout_string"
            name="workout_string" 
            rows="6" 
            cols="50">
        </textarea>
    </div>
    <div class="import_screen_bottom flex-column">
        <div class="my_btn pointer" id="import_workout_btn" onClick="">IMPORT WORKOUT</div>
        <div class="my_btn pointer" id="loadcreate_workout_btn" onClick="goToMovesSelectionScreen()">LOAD/CREATE WORKOUT</div>
    </div>
</div>`;

//================================
// MOVE SELECTION SCREEN
//================================

const MOVE_LABEL = (movesdropdown) => {
  return `<div class="move_label noselection">
    <div class="flex">
        <div class="drag-handle" title="Drag to reorder">⠿</div>
        <div class="remove_move_label pointer" onClick="removeMoveLabel(this); updateWorkoutSettings(calculateTotalExerciseCount())">${BIN_ICON}</div>
    </div>
    <div class="move_left">
        <div class="moves-dropdown">${movesdropdown}</div>
    </div>
    <div class="move_right">
        <span class="increase_move_count_btn pointer" onClick="increaseMoveCount(this); updateWorkoutSettings(calculateTotalExerciseCount()); updateWorkoutSettings(null,calculateTotalWorkoutDuration())">${PLUS_CIRCLE_FILL}</span>
        <span class="move_count">1</span>
        <span class="decrease_move_count_btn pointer" onClick="decreaseMoveCount(this); updateWorkoutSettings(calculateTotalExerciseCount()); updateWorkoutSettings(null,calculateTotalWorkoutDuration())">${MINUS_CIRCLE_FILL}</span>
    </div>
</div>`;
};

const ADD_BUTTON = `<div class="add_btn my_btn pointer" onClick="addMoveLabel(this)">+</div>`;
const PLAY_BUTTON = `<div class="play_btn my_btn pointer" onClick="PlayScreen()">PLAY</div>`;
const SAVE_BUTTON = `<div class="save_btn my_btn pointer" onClick="newSessionStatePopup('save')">SAVE</div>`;

const FORM_BUTTONS = `<div class="flex-column">${ADD_BUTTON}${PLAY_BUTTON}${SAVE_BUTTON}</div>`;

const PLUSMINUS_BTNS = `<div class="plusminus_btns flex">
    <div class="plusbtn pointer" onClick="updateActiveRestTime(this, 'plus'); updateWorkoutSettings(null,calculateTotalWorkoutDuration())">+</div>
    ${SEPARATOR}
    <div class="minusbtn pointer" onClick="updateActiveRestTime(this, 'minus'); updateWorkoutSettings(null,calculateTotalWorkoutDuration())">-</div>
</div>`;

const WORKOUT_CONFIG = `<div id="workout_config_card">
    <div id="workout_config_title">Workout Settings</div>
    <div id="workout_config">
        <div id="workout_config_info">
            <div id="total_exercise_count" class="workout_config_pill flex">
                <div class="config_label" aria-label="Total exercises" title="Total exercises">${COUNTING_ICON}</div>
                <div id="total_count">0</div>
            </div>
            ${SEPARATOR}
            <div id="total_session_duration" class="workout_config_pill flex">
                <div class="config_label" aria-label="Total workout duration" title="Total workout duration">${CLOCK_ICON}</div>
                <div class="config_value_pill">
                    <div id="total_duration">0 ' 0 "</div>
                    <div id="total_duration_hidden"></div>
                </div>
            </div>
        </div>
        <div id="workout_config_activerest">
            <div id="seconds_exercises" class="workout_config_pill flex-column">
                <div class="config_active flex">
                    <div class="config_label" aria-label="Exercise duration in sec" title="Exercise duration in sec">${PLAY_ICON}</div>
                    <div class="config_value_pill">
                        <div id="seconds_active">10</div>
                        <div>"</div>
                    </div>
                </div>
                ${PLUSMINUS_BTNS}
            </div>
            ${SEPARATOR}
            <div id="seconds_rest_duration" class="workout_config_pill flex-column">
                <div class="config_active flex">
                    <div class="config_label" aria-label="Rest duration in sec" title="Rest duration in sec">${PAUSE_ICON}</div>
                    <div class="config_value_pill">
                        <div id="seconds_rest">10</div>
                        <div>"</div>
                    </div>
                </div>
                ${PLUSMINUS_BTNS}
            </div>
        </div>
    </div>
</div>`;

//================================
// PLAY SCREEN
//================================

const WORKOUT_PLAYCARD = `<div id="workout_play_card" class="flex-column">
    <div id="workout_playcard_title"></div>
    <div id="workout_playcard_content" class="flex">
        <div id="timeBasedExercisesSeconds">--</div>
    </div>
</div>`;
