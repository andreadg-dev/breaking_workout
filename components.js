//================================
// GLOBAL COMPONENTS
//================================

// ICONS
const CLOSE_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
</svg>`;

const FLOPPY_DISK = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-floppy2" viewBox="0 0 16 16">
  <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v3.5A1.5 1.5 0 0 1 11.5 6h-7A1.5 1.5 0 0 1 3 4.5V1H1.5a.5.5 0 0 0-.5.5m9.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"/>
</svg>`;

const RECYCLING_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-recycle" viewBox="0 0 16 16">
  <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.5.5 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244z"/>
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

const PLAY_ICON_SM = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
</svg>`;

const BIN_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>`;

const MINUS_CIRCLE_FILL = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
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

const SUCCESS_ICON = `
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 90 90">
  
  <!-- Green circle -->
  <circle cx="45" cy="45" r="45" fill="#28a745"/>
  
  <!-- White checkmark -->
  <polyline 
    points="25,48 40,62 65,30" 
    fill="none" 
    stroke="white" 
    stroke-width="8" 
    stroke-linecap="round" 
    stroke-linejoin="round"
  />

</svg>`;

const UPLOAD_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
  <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/>
</svg>`;

const BULLSEYE_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bullseye" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12"/>
  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/>
  <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</svg>`;

const OPENEYE_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
</svg>`;

const CLOSEDEYE_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
  <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
  <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
  <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
</svg>`;

const VOLUME_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-volume-down" viewBox="0 0 16 16">
  <path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12zM6.312 6.39 8 5.04v5.92L6.312 9.61A.5.5 0 0 0 6 9.5H4v-3h2a.5.5 0 0 0 .312-.11M12.025 8a4.5 4.5 0 0 1-1.318 3.182L10 10.475A3.5 3.5 0 0 0 11.025 8 3.5 3.5 0 0 0 10 5.525l.707-.707A4.5 4.5 0 0 1 12.025 8"/>
</svg>`;

const WARNING_TRIANGLE = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
  <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z"/>
  <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
</svg>`;

// OTHER GLOBAL COMPONENTS
const SEPARATOR = `<div class="separator"></div>`;

const NOMEDIA_COMPONENT = `<div class="move_overview_content_nomedia">NO MEDIA AVAILABLE</div>`;

const OVERLAY_COMPONENT = (header, content, notificationType) => {
  let notificationItems =
    notificationType && notificationType === "error"
      ? {
          icn: `<span class="error_icn">${ERROR_ICON}</span>`,
          glow: "red_glow",
        }
      : notificationType && notificationType === "success"
        ? {
            icn: `<span class="success_icn">${SUCCESS_ICON}</span>`,
            glow: "green_glow",
          }
        : null;

  return `<div id="overlay_screen">
    <div id="overlay_screen_card" class="flex-column ${notificationItems ? notificationItems.glow : ""}">   
        <div id="overlay_screen_header">
            <div class="overlay_header_slot">
                ${notificationItems ? notificationItems.icn : ""}
            </div>
            <span>${header}</span>
            <div class="overlay_header_slot overlay_header_slot_right">
                <button onClick="closeOverlayScreen(this)" id="overlay_screen_closebtn" type="button" class="close" aria-label="Close">
                    <span aria-hidden="true">${CLOSE_ICON}</span>
                </button>
            </div>
        </div>
        <div id="overlay_screen_content">${content}</div>
    </div>
</div>`;
};

const SAVELOAD_SESSION_POPUP = (
  status,
  index,
  stateName,
  storageKey,
  action,
) => {
  if (!["used", "empty"].includes(status)) {
    return;
  }

  let saveState =
    status === "used" ? "OVERWRITE" : status === "empty" && "SAVE";

  let saveStateIcn =
    status === "used"
      ? `${FLOPPY_DISK}<span style="margin-right:5px"></span>${RECYCLING_ICON}`
      : status === "empty" && FLOPPY_DISK;

  let saveLoadBtn =
    action === "save"
      ? `<div 
        class="popup_btn popup_${saveState.toLowerCase()}_btn pointer"
        onClick="newSessionStateNamePopup('${storageKey}','${saveState}')"
        >${saveStateIcn}
    </div>`
      : `<div 
        class="popup_btn popup_load_btn pointer"
        onClick="loadStateFromStorage('${storageKey}')"
        >LOAD
    </div>`;

  return `<div class="popup_storage_line flex">
        <div class="popup_storage_line_left flex-column">
          <div class="popup_storage_line_left_namestatus">
            <span class="popup_storage_line_left_index">${index}.</span> <span>${stateName}</span>
            <span class="storage_status storage_status_${status}">${status}</span>
          </div>
          <span class="storage_key">${storageKey}</span>
        </div>
        ${saveLoadBtn}
      </div>`;
};

const SESSION_NAME_POPUP = (storageKey, action) => {
  return `<div class="flex-column session_name_card_content">
      ${action === "OVERWRITE" ? `<div id="overwrite_warning">This action will overwrite what you currently have saved in the selected storage key.</div>` : ""}
      <label for="session_name">Choose a title for your session:</label>
      <input 
        type="text" 
        maxlength="${THRESHOLDS.maxSessionNameChars}" 
        minlength="${THRESHOLDS.minSessionNameChars}" 
        name="session_name" 
        id="session_name_input" 
        placeholder="Unintitled"
        required>
      <button class="btn btn-primary" onClick="saveStateFromNamePopup()">CONFIRM</button>
      <div>This workout session will be saved locally on <span id="sessionnamepopup_storagekey" class="storage_key">${storageKey}</span> in your browser.</div>
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
        <div class="my_btn pointer" id="import_workout_btn" onClick="MovesSelectionScreen(document.getElementById('workout_string').value.trim())">${UPLOAD_ICON} IMPORT WORKOUT</div>
    </div>
    <div class="import_screen_bottom flex-column">
        <div class="my_btn pointer" id="create_workout_btn" onClick="MovesSelectionScreen()"><span>${PLUS_CIRCLE_FILL}</span><span>CREATE WORKOUT</span></div>
        <div class="my_btn pointer" id="load_workout_btn" onClick="newSessionStatePopup('load')">${BULLSEYE_ICON} LOAD WORKOUT</div>
    </div>
</div>`;

//================================
// MOVE SELECTION SCREEN
//================================

const MOVE_LABEL = (movesdropdown, exerciseCount, load) => {
  return `<div class="move_label ${load ? "okselection" : "noselection"}">
    <div class="flex">
        <div class="drag-handle" title="Drag to reorder">⠿</div>
        <div class="remove_move_label pointer" onClick="removeMoveLabel(this); updateWorkoutSettings(calculateTotalExerciseCount())">${BIN_ICON}</div>
    </div>
    <div class="move_left">
        <div class="moves-dropdown">${movesdropdown}</div>
    </div>
    <div class="move_right">
        <span class="increase_move_count_btn pointer" onClick="increaseMoveCount(this); updateWorkoutSettings(calculateTotalExerciseCount()); updateWorkoutSettings(null,calculateTotalWorkoutDuration())">${PLUS_CIRCLE_FILL}</span>
        <span class="move_count">${exerciseCount || 1}</span>
        <span class="decrease_move_count_btn pointer" onClick="decreaseMoveCount(this); updateWorkoutSettings(calculateTotalExerciseCount()); updateWorkoutSettings(null,calculateTotalWorkoutDuration())">${MINUS_CIRCLE_FILL}</span>
    </div>
</div>`;
};

const ADD_BUTTON = `<div class="add_btn my_btn pointer" onClick="addMoveLabel(this)">${PLUS_CIRCLE_FILL}</div>`;
const PLAY_BUTTON = `<div class="play_btn my_btn pointer" onClick="PlayScreen()">${PLAY_ICON} PLAY</div>`;
const SAVE_BUTTON = `<div class="save_btn my_btn pointer" onClick="newSessionStatePopup('save')">${FLOPPY_DISK} SAVE</div>`;

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

const WORKOUT_PLAYCARD = `<div>
  <div id="workout_play_card" class="flex-column">
    <div class="flex">
      <div class="flex-column">
        <div id="workout_playcard_title">LOADING...</div>
        <div id="workout_playcard_subtitle"></div>
      </div>
      <div class="separator"></div>
      <div id="workout_playcard_content" class="flex">
          <div id="timeBasedExercisesSeconds">0</div>
          <div id="pause_btn" onclick="toggleWorkoutPause()">${PAUSE_ICON}</div>
      </div>
    </div>
    <div id="volume_control" class="flex">
        ${VOLUME_ICON}
        <input type="range" id="volume_slider" min="0" max="1" step="0.05" value="1"
            oninput="setVolume(this.value)">
    </div>
  </div>
  <div id="workout_playcard_img"></div>
</div>`;

const REST_IMG = `<img
        src="./images/rest.png"
        alt="Image of a bboy resting" />`;

const MOVE_IMG_PLACEHOLDER = `<img
        src="./images/move.png"
        alt="Image of a bboy doing footworks" />`;

//================================
// MOVES OVERVIEW SCREEN
//================================

const MOVE_OVERVIEW_COMPONENT = (
  moveId,
  moveName,
  moveCategory,
  moveDescription,
  moveMedia,
) => {
  return `<div class="move_overview">
  <div class="move_overview_header">
    <div>  
      <span class="move_overview_index">${moveId || ""}. </span>
      <span>${moveName || ""}</span>
    </div>
    <div>
      <span class="move_overview_cat">${moveCategory || ""}</span>
      <span class="move_overview_visibility_icon pointer">${OPENEYE_ICON}</span>
    </div>
  </div>
  <div class="move_overview_content">
    <div class="move_overview_content_description">${moveDescription || ""}</div>
    <div class="move_overview_content_media">${moveMedia || NOMEDIA_COMPONENT}</div>
  </div>
</div>`;
};

//================================
// SAVED SESSIONS SCREEN
//================================

const SAVED_SESSION_COMPONENT = (
  index,
  sessionName,
  storageKey,
  parsedStorageValue,
  currentState,
) => {
  return `<div class="saved_session">
        <div class="saved_session_header">
          <span class="saved_session_index">${index}.</span>
          <div class="saved_session_header_right">
            <span>${sessionName} (${storageKey})</span>
            <span class="saved_session_visibility_icon pointer">${OPENEYE_ICON}</span>
          </div>
        </div>
        <div class="saved_session_content">
          <div class="saved_session_content_json">
            <span class="saved_session_content_left">JSON</span>
            <pre class="saved_session_content_right">${parsedStorageValue}</pre>
          </div>
          <div class="saved_session_content_base64">
            <span class="saved_session_content_left">BASE64</span>
            <span 
              class="saved_session_content_right saved_session_content_base64string"
              onclick="copyToClipboard(this)">${currentState}</span> 
          </div>
        </div>
      </div>`;
};

// pushing again
