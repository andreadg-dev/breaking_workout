/* ============================================================
       HTML ESCAPING
       ============================================================ */

function escapeHtml(value) {
  return $("<div>")
    .text(value == null ? "" : value)
    .html();
}

/* ============================================================
       DASHBOARD
       ============================================================ */

function renderDashboard() {
  $("#notes-root").html(NOTES_LANDING_PAGE);
}

/* ============================================================
       PAGE HEADER
       ============================================================ */

function pageHeader(title, eyebrow, description) {
  return `<header class="page-header">

          <button
            type="button"
            class="page-header__back"
            data-action="dashboard"
          >
            ← Back to overview
          </button>

          <p class="page-header__eyebrow">
            ${escapeHtml(eyebrow)}
          </p>

          <h1 class="page-header__title">
            ${escapeHtml(title)}
          </h1>

          ${
            description
              ? `
                <p class="page-header__description">
                  ${escapeHtml(description)}
                </p>
              `
              : ""
          }

        </header>
      `;
}

/* ============================================================
       TRAINING LIST
       ============================================================ */

function renderTrainingList(items) {
  return (items || [])
    .map(function (item) {
      if (typeof item === "string") {
        return `
              <li class="technique-list__item">
                ${escapeHtml(item)}
              </li>
            `;
      }

      if (typeof item === "object" && item !== null) {
        const nested = (item.instructions || [])
          .map(function (instruction) {
            return `
                  <li class="technique-list__item">
                    ${escapeHtml(instruction)}
                  </li>
                `;
          })
          .join("");

        return `
              <li
                class="
                  technique-list__item
                  technique-list__item--group
                "
              >

                <span class="technique-list__label">
                  ${escapeHtml(item.step)}
                </span>

                <ul
                  class="
                    technique-list
                    technique-list--nested
                  "
                >
                  ${nested}
                </ul>

              </li>
            `;
      }

      return "";
    })
    .join("");
}

/* ============================================================
       TRAINING CARD
       ============================================================ */

function renderTrainingCard(data) {
  const howTo = renderTrainingList(data.how_to);

  const upsides = renderTrainingList(data.upsides);

  const downsides = renderTrainingList(data.downsides);

  return `

        <article class="technique">

          <header class="technique__header">

            <h2 class="technique__title">
              ${escapeHtml(data.name)}
            </h2>

            <p class="technique__description">
              ${escapeHtml(data.description)}
            </p>

          </header>


          <div class="technique__body">

            <section class="technique__section">

              <h3 class="technique__section-title">
                How to
              </h3>

              <ul class="technique-list">
                ${howTo}
              </ul>

            </section>


            <section class="technique__section">

              <h3 class="technique__section-title">
                Upsides
              </h3>

              <ul class="technique-list">
                ${upsides}
              </ul>

            </section>


            ${
              downsides
                ? `

                  <section class="technique__section">

                    <h3 class="technique__section-title">
                      Downsides
                    </h3>

                    <ul class="technique-list">
                      ${downsides}
                    </ul>

                  </section>

                `
                : ""
            }

          </div>

        </article>
      `;
}

/* ============================================================
       ADVANCED TRAINING PAGE
       ============================================================ */

function renderTraining() {
  const cards = Object.values(trainingTechniques)
    .map(function (technique) {
      return renderTrainingCard(technique);
    })
    .join("");

  $("#notes-root").html(`

        ${pageHeader(
          "Advanced Training",
          "Training Methods",
          "Advanced techniques for increasing training stimulus while managing time and fatigue.",
        )}

        <main class="techniques">
          ${cards}
        </main>

      `);
}

/* ============================================================
       RESOLVE EVENT INHERITANCE
       ============================================================ */

function findDivision(event, divisionName) {
  let result = null;

  event.categories.forEach(function (category) {
    (category.divisions || []).forEach(function (division) {
      if (division.title === divisionName) {
        result = division;
      }
    });
  });

  return result;
}

function getDivisionItems(event, division) {
  if (division.items) {
    return division.items;
  }

  if (division.inherits) {
    const source = findDivision(event, division.inherits);

    if (source && source.items) {
      return source.items;
    }
  }

  return [];
}

/* ============================================================
       EVENT TABLE
       ============================================================ */

function renderEventTable(items) {
  if (!items || !items.length) return "";

  const rows = items
    .map(function (item) {
      return `
            <tr>
                <td>${escapeHtml(item.exercise)}</td>
                <td>${escapeHtml(item.distance || "—")}</td>
                <td>${escapeHtml(item.value || "—")}</td>
                <td>${item.reps ? escapeHtml(item.reps) : "—"}</td>
                <td>${escapeHtml(item.notes || "—")}</td>
            </tr>
        `;
    })
    .join("");

  return `
        <div class="event-table-wrapper">
            <table class="event-table">
                <thead>
                    <tr>
                        <th>Exercise</th>
                        <th>Distance</th>
                        <th>Load</th>
                        <th>Reps</th>
                        <th>Notes</th>
                    </tr>
                </thead>

                <tbody>
                    ${rows}
                </tbody>
            </table>
        </div>
    `;
}

/* ============================================================
       EVENT SEQUENCE
       ============================================================ */
function renderEventSequence(sequence) {
  if (!sequence || !sequence.length) return "";

  const items = sequence
    .map(function (item, index) {
      const isRun = item.type === "run";

      return `
            <div class="event-sequence-item ${isRun ? "is-run" : "is-station"}">
                <span class="event-sequence-number">
                    ${index + 1}
                </span>

                <div class="event-sequence-content">
                    <strong>
                        ${escapeHtml(item.label || item.exercise)}
                    </strong>

                    <span>
                        ${escapeHtml(item.distance || "—")}
                    </span>
                </div>
            </div>
        `;
    })
    .join("");

  return `
        <section class="event-sequence">
            <div class="section-heading">
                <h3>Race Sequence</h3>
            </div>

            <div class="event-sequence-list">
                ${items}
            </div>
        </section>
    `;
}

/* ============================================================
       EVENT NOTES
    ============================================================ */

function renderEventNotes(notes) {
  if (!notes || !notes.length) {
    return "";
  }

  return `

        <div class="event-notes">

          ${notes
            .map(function (note) {
              return `
                <p class="event-note">
                  ${escapeHtml(note)}
                </p>
              `;
            })
            .join("")}

        </div>

      `;
}

/* ============================================================
       EVENT DIVISION
       ============================================================ */

function renderEventDivision(event, division) {
  const items = getDivisionItems(event, division);

  return `

        <article class="division">

          <header class="division__header">

            <h4 class="division__title">
              ${escapeHtml(division.title)}
            </h4>

            ${
              division.inherits
                ? `
                  <span class="division__inherits">
                    Uses ${escapeHtml(division.inherits)} weights
                  </span>
                `
                : ""
            }

          </header>


          ${items.length ? renderEventTable(items) : ""}


          ${renderEventNotes(division.notes)}

        </article>

      `;
}

/* ============================================================
       EVENT CATEGORY
       ============================================================ */

function renderEventCategory(event, category) {
  const divisions = (category.divisions || [])
    .map(function (division) {
      return renderEventDivision(event, division);
    })
    .join("");

  return `

        <section class="event-category">

          <header class="event-category__header">

            <h3 class="event-category__title">
              ${escapeHtml(category.title)}
            </h3>

            ${
              category.subtitle
                ? `
                  <p class="event-category__subtitle">
                    ${escapeHtml(category.subtitle)}
                  </p>
                `
                : ""
            }

            ${
              category.description
                ? `
                  <p class="event-category__description">
                    ${escapeHtml(category.description)}
                  </p>
                `
                : ""
            }

            ${
              category.weightPolicy
                ? `
                  <p class="event-category__description">
                    ${escapeHtml(category.weightPolicy)}
                  </p>
                `
                : ""
            }

          </header>


          <div class="division-grid">

            ${divisions}

          </div>

        </section>

      `;
}

/* ============================================================
       EVENT CARD
       ============================================================ */

function renderEvent(event) {
  const categories = (event.categories || [])
    .map(function (category) {
      return renderEventCategory(event, category);
    })
    .join("");

  return `

        <article class="event">

          <header class="event__header">

            <h2 class="event__title">
              ${escapeHtml(event.title)}
            </h2>

            <p class="event__subtitle">
              ${escapeHtml(event.subtitle)}
            </p>

            ${
              event.description
                ? `
                  <p class="event__description">
                    ${escapeHtml(event.description)}
                  </p>
                `
                : ""
            }

          </header>

          ${renderEventSequence(event.sequence)}
          ${categories}

        </article>

      `;
}

/* ============================================================
       EVENTS PAGE
       ============================================================ */

function renderEvents() {
  const eventCards = Object.values(events)
    .map(function (event) {
      return renderEvent(event);
    })
    .join("");

  $("#notes-root").html(`

        ${pageHeader(
          "Events",
          "Competitions",
          "Competition divisions, workout requirements and prescribed weights.",
        )}

        <main class="events">

          ${eventCards}

        </main>

      `);
}

/* ============================================================
       NOTES PAGE
       ============================================================ */

function getNoteTypeTitle(type) {
  const titles = {
    equipment: "Equipment",
    checklist: "Checklists",
    protocol: "Protocols",
    reference: "Reference",
    tips: "Tips",
  };

  return titles[type] || "Notes";
}

function renderNotesWIP() {
  const hasNotes = notes && notes.length > 0;

  $("#notes-root").html(`

        ${pageHeader(
          "Notes",
          "Personal",
          "Your personal training notes and observations.",
        )}


        ${
          hasNotes
            ? `

              <main>
                <!--
                  Notes renderer can be added here later.
                -->
              </main>

            `
            : `

              <section class="empty-state">

                <h2 class="empty-state__title">
                  No notes yet
                </h2>

                <p class="empty-state__description">
                  Your personal notes will appear here once
                  you add them.
                </p>

              </section>

            `
        }

      `);
}

function renderNote(note) {
  switch (note.type) {
    case "equipment":
      return renderEquipmentNote(note);

    case "checklist":
      return renderChecklistNote(note);

    default:
      return renderDefaultNote(note);
  }
}

function renderEquipmentNote(note) {
  const items = note.items
    .map(function (item) {
      return `
            <li class="note-item">
                ${escapeHtml(item)}
            </li>
        `;
    })
    .join("");

  return `
        <article class="note-card note-card-equipment">
            <header class="note-card-header">
                <span class="note-card-type">EQUIPMENT</span>
                <h3>${escapeHtml(note.title)}</h3>
            </header>

            <ul class="note-list">
                ${items}
            </ul>
        </article>
    `;
}

function renderNotes() {
  const groupedNotes = {};

  Object.values(notes).forEach(function (note) {
    if (!groupedNotes[note.type]) {
      groupedNotes[note.type] = [];
    }

    groupedNotes[note.type].push(note);
  });

  const sections = Object.keys(groupedNotes)
    .map(function (type) {
      const noteCards = groupedNotes[type]
        .map(function (note) {
          return renderNote(note);
        })
        .join("");

      return `
            <section class="notes-section notes-section-${escapeHtml(type)}">
                <div class="section-heading">
                    <h2>
                        ${getNoteTypeTitle(type)}
                    </h2>
                </div>

                <div class="notes-grid">
                    ${noteCards}
                </div>
            </section>
        `;
    })
    .join("");

  $("#notes-root").html(`
        ${pageHeader(
          "Notes",
          "Reference",
          "Training notes, equipment and useful information.",
        )}

        <main class="notes">
            ${sections}
        </main>
    `);
}

/* ============================================================
       VIEW ROUTER
       ============================================================ */

function renderView(view) {
  switch (view) {
    case "training":
      renderTraining();
      break;

    case "events":
      renderEvents();
      break;

    case "notes":
      renderNotes();
      break;

    default:
      renderDashboard();
  }
}

/* ============================================================
       JQUERY EVENTS
       ============================================================ */

$(document).on("click", ".dashboard-tile", function () {
  const view = $(this).data("view");

  renderView(view);
});

$(document).on("click", '[data-action="dashboard"]', function () {
  renderDashboard();
});

/* ============================================================
       INITIAL VIEW
       ============================================================ */

$(function () {
  renderDashboard();
});
