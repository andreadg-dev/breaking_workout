# BreakingCardio

A browser-based HIIT (High-Intensity Interval Training) workout builder and timer designed specifically for **breaking** (breakdance). Build a custom training session from a curated library of breaking moves, configure interval timings, and run through a timed workout — all without any backend or account required.

## What it does

BreakingCardio lets you assemble a breaking workout by picking moves, set how long each active interval and rest period lasts, then start a guided timer that walks you through the session one move at a time. Sessions can be saved to your browser's local storage and shared as portable encoded strings.

## Screens & Functionality

### Import Workout (Home)

The landing screen. From here you can:

- **Create a new workout** from scratch
- **Import a workout string** — paste a Base64-encoded session string shared by someone else to load it directly
- **Load a saved session** from one of your browser's saved slots

### Moves Selection (Workout Builder)

The core workout editor. Features include:

- **Add moves** — select breaking moves from a categorised dropdown (Toprock, Footwork, Freeze)
- **Set repetition count** — use + / − buttons to control how many times each move is performed in the set
- **Drag-and-drop reordering** — reorder move cards via a drag handle (powered by SortableJS)
- **Remove moves** — delete individual moves from the list
- **Workout Settings panel** — configure:
  - **Active time** (seconds per exercise interval, 10–120 s)
  - **Rest time** (seconds between exercises, 10–120 s)
  - **Total exercises count** (live-calculated)
  - **Total workout duration** (live-calculated)
- **Save session** — store the current workout to one of 5 named local storage slots
- **Play** — launch the timed workout session

### Play (HIIT Timer)

A full-screen interval timer that guides you through the workout:

- Displays the current move name and a countdown timer
- Alternates between **active** and **rest** phases automatically
- Plays a **breakbeat audio track** during active intervals, with a fade-out on rest
- Uses the **Screen Wake Lock API** to keep the screen on while training
- **Pause / Resume** control
- **Volume slider** to adjust the breakbeat level

### Moves Overview

A reference catalogue of all available breaking moves, grouped by category:

| Category     | Moves                                                           |
| ------------ | --------------------------------------------------------------- |
| **Toprock**  | Indian Step, Cross Step, Side Step, Outlaw Step, Kick Step      |
| **Footwork** | 6-Step, 3-Step, C-Walk / CCs, Zulu Spin, Baby Love              |
| **Freeze**   | Baby Freeze, Chair Freeze, Air Chair, Hollowback, Invert Freeze |

Each entry includes a short description of the movement.

### Saved Sessions

Lists all workout sessions currently stored in the browser. From this screen you can:

- View each saved session's name and storage key
- Load a session back into the editor
- Delete a saved session

## Session Save & Share

- Up to **5 sessions** can be saved locally in the browser (`localStorage`)
- Sessions are stored as **Base64-encoded JSON** strings
- Any session can be copied as a portable **workout string** and shared — another user can paste it into the Import screen to load the exact same workout
- Session names must be between 5 and 15 characters

## Tech Stack

| Concern       | Technology                                                  |
| ------------- | ----------------------------------------------------------- |
| Language      | Vanilla JavaScript + jQuery                                 |
| Styling       | Bootstrap 4 (CSS) / Bootstrap 5 (JS), custom CSS            |
| Drag & drop   | SortableJS                                                  |
| Audio         | HTML5 `<audio>` + Web Audio API                             |
| Screen        | Screen Wake Lock API                                        |
| Storage       | Browser `localStorage`                                      |
| Fonts         | Google Fonts (Roboto, Montserrat, Rubik, Fira Code, others) |
| No build step | Plain `.html` / `.js` / `.css` — open directly in a browser |

## Running locally

No build step or server is needed. Simply open `index.html` in a browser:

```bash
# example using a basic static server
npx serve .
```

Or just double-click `index.html` — most features work from a `file://` URL, though the Wake Lock API requires a secure context (HTTPS or localhost) and audio autoplay policies may apply.

## File Structure

```
index.html          # App shell and script/style imports
index.js            # All screen logic and app state
components.js       # HTML component templates and SVG icons
data.js             # Move library, storage keys, validation thresholds
styles.css          # Custom styles
workout_sample.json # Example workout JSON payload
audio/              # Breakbeat audio track
images/             # Favicon and brand assets
```
