const BIN_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>`;

const MINUS_CIRCLE_FILL = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"/>
</svg>`;

const PLUS_CIRCLE_FILL = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
</svg>`;

const SEPARATOR = `<div class="separator"></div>`;

const MOVE_LABEL = `<div class="move_label noselection">
    <div class="remove_move_label pointer" onClick="removeMoveLabel(this); updateWorkoutSettings(calculateTotalExerciseCount())">${BIN_ICON}</div>
    <div class="move_left">
        <div class="moves-dropdown">{{movesdropdown}}</div>
    </div>
    <div class="move_right">
        <span class="increase_move_count_btn pointer" onClick="increaseMoveCount(this); updateWorkoutSettings(calculateTotalExerciseCount())">${PLUS_CIRCLE_FILL}</span>
        <span class="move_count">1</span>
        <span class="decrease_move_count_btn pointer" onClick="decreaseMoveCount(this); updateWorkoutSettings(calculateTotalExerciseCount())">${MINUS_CIRCLE_FILL}</span>
    </div>
</div>`;

const ADD_BUTTON = `<div class="move_label add_btn pointer" onClick="addMoveLabel(this)">+</div>`;

const PLUSMINUS_BTNS = `<div class="plusminus_btns flex">
    <div class="plusbtn pointer" onClick="updateActiveRestTime(this, 'plus')">+</div>
    ${SEPARATOR}
    <div class="minusbtn pointer" onClick="updateActiveRestTime(this, 'minus')">-</div>
</div>`;

const WORKOUT_CONFIG = `<div id="workout_config_card">
    <div id="workout_config_title">Workout Settings</div>
    <div id="workout_config">
        <div id="workout_config_info">
            <div id="total_exercise_count" class="workout_config_pill flex">
                <div class="config_label">Exercises:</div>
                <div id="total_count">0</div>
            </div>
            ${SEPARATOR}
            <div id="total_session_duration" class="workout_config_pill flex">
                <div class="config_label">Duration:</div>
                <div class="config_value_pill">
                    <div id="total_duration">10</div>
                    <div>"</div>
                </div>
            </div>
        </div>
        <div id="workout_config_activerest">
            <div id="seconds_exercises" class="workout_config_pill flex-column">
                <div class="config_active flex">
                    <div class="config_label">Active:</div>
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
                    <div class="config_label">Rest:</div>
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
