(function ($) {
  const PUSH_DEF = Object.keys(ASSISTANCE.push.exercises)[0];
  const PULL_DEF = Object.keys(ASSISTANCE.pull.exercises)[0];
  const ACCS_DEF = Object.keys(ASSISTANCE.accessory.exercises)[0];
  const COND_DEF = Object.keys(ASSISTANCE.conditioning.exercises)[0];

  const STORAGE_KEY = "hardgainers531_1rm_v1";

  const DEFAULTS = {
    squat: 100,
    deadlift: 50,
    bench: 100,
    press: 50,
    currentWeek: 1,
    currentDay: "A",
    assistance: {
      week1: {
        day_a: [PUSH_DEF, PULL_DEF, ACCS_DEF],
        day_b: [PUSH_DEF, PULL_DEF, COND_DEF],
        day_d: [PUSH_DEF, PULL_DEF, ACCS_DEF],
        day_e: [PUSH_DEF, PULL_DEF, COND_DEF],
      },
      week2: {
        day_a: [PUSH_DEF, PULL_DEF, ACCS_DEF],
        day_b: [PUSH_DEF, PULL_DEF, COND_DEF],
        day_d: [PUSH_DEF, PULL_DEF, ACCS_DEF],
        day_e: [PUSH_DEF, PULL_DEF, COND_DEF],
      },
      week3: {
        day_a: [PUSH_DEF, PULL_DEF, ACCS_DEF],
        day_b: [PUSH_DEF, PULL_DEF, COND_DEF],
        day_d: [PUSH_DEF, PULL_DEF, ACCS_DEF],
        day_e: [PUSH_DEF, PULL_DEF, COND_DEF],
      },
    },
  };

  function escapeAttr(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  }

  function isMobileLike() {
    var ua = navigator.userAgent || "";
    return /Android|iPhone|iPad|iPod/i.test(ua);
  }

  function roundKg(x) {
    if (!isFinite(x)) return NaN;
    return Math.round(x * 2) / 2; // nearest 0.5kg
  }

  function fmtKg(x) {
    if (!isFinite(x)) return "—";
    var s = (Math.round(x * 2) / 2).toFixed(1);
    return s.replace(/\.0$/, "") + " kg";
  }

  function liftKeyFromName(mainLift) {
    var s = (mainLift || "").toLowerCase();
    if (s.indexOf("squat") >= 0) return "squat";
    if (s.indexOf("deadlift") >= 0) return "deadlift";
    if (s.indexOf("bench") >= 0) return "bench";
    return "press";
  }

  function loadState() {
    var raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return $.extend({}, DEFAULTS);
    try {
      return $.extend({}, DEFAULTS, JSON.parse(raw));
    } catch (e) {
      return $.extend({}, DEFAULTS);
    }
  }

  function saveState(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function calcTM(oneRM) {
    return roundKg(oneRM * 0.85);
  }

  function calcWeightFromTM(tm, pct) {
    return roundKg(tm * (pct / 100));
  }

  function updateTMDisplay(state) {
    $("#tmSquat").text(fmtKg(calcTM(state.squat)));
    $("#tmBench").text(fmtKg(calcTM(state.bench)));
    $("#tmDeadlift").text(fmtKg(calcTM(state.deadlift)));
    $("#tmPress").text(fmtKg(calcTM(state.press)));
  }

  function setInputsFromState(state) {
    $("#inSquat").val(state.squat);
    $("#inBench").val(state.bench);
    $("#inDeadlift").val(state.deadlift);
    $("#inPress").val(state.press);

    // Current week radios
    $(`input[name="week_radio"][value="${state.currentWeek}"]`).prop(
      "checked",
      true,
    );

    // Current day:
    $(`input[name="day_radio"][value="${state.currentDay}"]`).prop(
      "checked",
      true,
    );

    var weekKeys = ["week1", "week2", "week3"];
    var dayMap = {
      day_a: { suffix: "daya", types: ["push", "pull", "accessory"] },
      day_b: { suffix: "dayb", types: ["push", "pull", "conditioning"] },
      day_d: { suffix: "dayd", types: ["push", "pull", "accessory"] },
      day_e: { suffix: "daye", types: ["push", "pull", "conditioning"] },
    };

    $.each(weekKeys, function (_, wk) {
      var weekNum = wk.replace("week", "");
      $.each(dayMap, function (dayKey, cfg) {
        var saved = (state.assistance[wk] || {})[dayKey] || [];
        $.each(cfg.types, function (i, type) {
          var id = saved[i];
          if (id) {
            $("#assistance-" + type + "-week" + weekNum + cfg.suffix)
              .find("option[id='" + id + "']")
              .prop("selected", true);
          }
        });
      });
    });
  }

  function generateAssistExerciseId(exercise, weekNo, dayLetter) {
    allowedExerGroups = ["pull", "push", "accessory", "conditioning"];

    if (!allowedExerGroups.contains(exercise)) {
      throw `Exercise not in ${allowedExerGroups}`;
    }

    return `#assistance-${exercise}-week${weekNo}day${dayLetter}`;
  }

  function getStateFromInputs() {
    return {
      squat: parseFloat($("#inSquat").val()),
      bench: parseFloat($("#inBench").val()),
      deadlift: parseFloat($("#inDeadlift").val()),
      press: parseFloat($("#inPress").val()),
      currentWeek: parseInt($('input[name="week_radio"]:checked').val(), 10),
      currentDay: String($('input[name="day_radio"]:checked').val() || "A"),
      assistance: {
        week1: {
          day_a: [
            String(
              $("#assistance-push-week1daya option:selected").attr("id") ||
                PUSH_DEF,
            ),
            String(
              $("#assistance-pull-week1daya option:selected").attr("id") ||
                PULL_DEF,
            ),
            String(
              $("#assistance-accessory-week1daya option:selected").attr("id") ||
                ACCS_DEF,
            ),
          ],
          day_b: [
            String(
              $("#assistance-push-week1dayb option:selected").attr("id") ||
                PUSH_DEF,
            ),
            String(
              $("#assistance-pull-week1dayb option:selected").attr("id") ||
                PULL_DEF,
            ),
            String(
              $("#assistance-conditioning-week1dayb option:selected").attr(
                "id",
              ) || COND_DEF,
            ),
          ],
          day_d: [
            String(
              $("#assistance-push-week1dayd option:selected").attr("id") ||
                PUSH_DEF,
            ),
            String(
              $("#assistance-pull-week1dayd option:selected").attr("id") ||
                PULL_DEF,
            ),
            String(
              $("#assistance-accessory-week1dayd option:selected").attr("id") ||
                ACCS_DEF,
            ),
          ],
          day_e: [
            String(
              $("#assistance-push-week1daye option:selected").attr("id") ||
                PUSH_DEF,
            ),
            String(
              $("#assistance-pull-week1daye option:selected").attr("id") ||
                PULL_DEF,
            ),
            String(
              $("#assistance-conditioning-week1daye option:selected").attr(
                "id",
              ) || COND_DEF,
            ),
          ],
        },
        week2: {
          day_a: [
            String(
              $("#assistance-push-week2daya option:selected").attr("id") ||
                PUSH_DEF,
            ),
            String(
              $("#assistance-pull-week2daya option:selected").attr("id") ||
                PULL_DEF,
            ),
            String(
              $("#assistance-accessory-week2daya option:selected").attr("id") ||
                ACCS_DEF,
            ),
          ],
          day_b: [
            String(
              $("#assistance-push-week2dayb option:selected").attr("id") ||
                PUSH_DEF,
            ),
            String(
              $("#assistance-pull-week2dayb option:selected").attr("id") ||
                PULL_DEF,
            ),
            String(
              $("#assistance-conditioning-week2dayb option:selected").attr(
                "id",
              ) || COND_DEF,
            ),
          ],
          day_d: [
            String(
              $("#assistance-push-week2dayd option:selected").attr("id") ||
                PUSH_DEF,
            ),
            String(
              $("#assistance-pull-week2dayd option:selected").attr("id") ||
                PULL_DEF,
            ),
            String(
              $("#assistance-accessory-week2dayd option:selected").attr("id") ||
                ACCS_DEF,
            ),
          ],
          day_e: [
            String(
              $("#assistance-push-week2daye option:selected").attr("id") ||
                PUSH_DEF,
            ),
            String(
              $("#assistance-pull-week2daye option:selected").attr("id") ||
                PULL_DEF,
            ),
            String(
              $("#assistance-conditioning-week2daye option:selected").attr(
                "id",
              ) || COND_DEF,
            ),
          ],
        },
        week3: {
          day_a: [
            String(
              $("#assistance-push-week3daya option:selected").attr("id") ||
                PUSH_DEF,
            ),
            String(
              $("#assistance-pull-week3daya option:selected").attr("id") ||
                PULL_DEF,
            ),
            String(
              $("#assistance-accessory-week3daya option:selected").attr("id") ||
                ACCS_DEF,
            ),
          ],
          day_b: [
            String(
              $("#assistance-push-week3dayb option:selected").attr("id") ||
                PUSH_DEF,
            ),
            String(
              $("#assistance-pull-week3dayb option:selected").attr("id") ||
                PULL_DEF,
            ),
            String(
              $("#assistance-conditioning-week3dayb option:selected").attr(
                "id",
              ) || COND_DEF,
            ),
          ],
          day_d: [
            String(
              $("#assistance-push-week3dayd option:selected").attr("id") ||
                PUSH_DEF,
            ),
            String(
              $("#assistance-pull-week3dayd option:selected").attr("id") ||
                PULL_DEF,
            ),
            String(
              $("#assistance-accessory-week3dayd option:selected").attr("id") ||
                ACCS_DEF,
            ),
          ],
          day_e: [
            String(
              $("#assistance-push-week3daye option:selected").attr("id") ||
                PUSH_DEF,
            ),
            String(
              $("#assistance-pull-week3daye option:selected").attr("id") ||
                PULL_DEF,
            ),
            String(
              $("#assistance-conditioning-week3daye option:selected").attr(
                "id",
              ) || COND_DEF,
            ),
          ],
        },
      },
    };
  }

  /*   function renderProgram() {
    const root = $("#program");
    root.empty();

    // Adding the workout program source
    root.append(
      `<div class="small muted">
        Source: <a href="${escapeAttr(PROGRAM.source)}" target="_blank" rel="noopener">jimwendler.com</a>
      </div>`,
    );

    var $notes = $("<div/>").addClass("note");
    var $ul = $("<ul/>").css({ margin: "8px 0 0 18px", padding: 0 });

    $.each(PROGRAM.notes, function (_, n) {
      $ul.append($("<li/>").text(n));
    });
    $notes.append($ul);
    root.append($notes);

    $.each(PROGRAM.weeks, function (_, wk) {
      var $wk = $("<div/>")
        .addClass("week")
        .attr("data-week", wk.week)
        .css({ marginTop: "14px" });

      // Week pill (clickable)
      var $pill = $(
        '<div class="pill week-pill" style="margin-top: 10px;">Week <b>' +
          wk.week +
          "</b></div>",
      );
      // Default: collapsed (days hidden). We'll leave it closed (no is-open).
      $wk.append($pill);

      // Container for days (toggle this)
      var $daysWrap = $("<div/>").addClass("week-days");
      $.each(wk.days, function (_, day) {
        var $day = $("<div/>").addClass("day");
        var $head = $("<div/>").addClass("head");
        $head.append($("<div/>").addClass("title").text(day.day));
        $head.append(
          $("<div/>")
            .addClass("badge")
            .text("Main Lift: " + day.main_lift),
        );
        $day.append($head);

        var $body = $("<div/>").addClass("body");
        $body.append(
          $("<div/>")
            .addClass("k")
            .text("Warm-Up: " + day.warm_up.join(" • ")),
        );

        var $sets = $("<div/>")
          .addClass("sets")
          .attr("data-main-lift", day.main_lift)
          .css({ marginTop: "10px" });
        $body.append(
          $("<div/>")
            .css({
              marginTop: "10px",
              fontWeight: 700,
              fontSize: "12px",
              letterSpacing: ".25px",
            })
            .text("Main Lift Work"),
        );

        $.each(day.sets, function (_, st) {
          var $line = $("<div/>")
            .addClass("setline")
            .attr("data-percent", st.percent_tm);

          var leftText = st.percent_tm + "% x " + st.reps;
          if (st.sets && st.sets > 1) {
            leftText =
              st.sets + " sets of " + st.reps + " @ " + st.percent_tm + "%";
          }

          var $lhs = $("<div/>").addClass("lhs");
          $lhs.append($("<span/>").addClass("tag").text(st.type));
          $lhs.append($("<span/>").text(leftText));
          if (st.notes) {
            $lhs.append(
              $("<span/>")
                .addClass("muted small")
                .text("— " + st.notes),
            );
          }

          var $rhs = $("<div/>")
            .addClass("rhs")
            .html('<span class="mono js-weight">—</span>');
          $line.append($lhs).append($rhs);

          $sets.append($line);
        });

        $body.append($sets);

        var $as = $("<div/>").css({ marginTop: "10px" });
        $as.append(
          $("<div/>")
            .css({
              fontWeight: 700,
              fontSize: "12px",
              letterSpacing: ".25px",
            })
            .text("Assistance"),
        );
        var $asul = $("<ul/>").css({
          margin: "6px 0 0 18px",
          padding: 0,
        });
        $.each(day.assistance, function (_, a) {
          $asul.append($("<li/>").addClass("small muted").text(a));
        });
        $as.append($asul);
        $body.append($as);

        $day.append($body);
        $daysWrap.append($day);
      });

      $wk.append($daysWrap);
      root.append($wk);
    });
  } */

  function renderProgram() {
    const root = $("#program");
    const esc = escapeAttr;

    function tpl(template, vars) {
      return template.replace(/\{\{(\w+)\}\}/g, function (_, key) {
        return Object.prototype.hasOwnProperty.call(vars, key) ? vars[key] : "";
      });
    }

    function renderSetLine(st) {
      var leftText = st.percent_tm + "% x " + st.reps;
      if (st.sets && st.sets > 1) {
        leftText =
          st.sets + " sets of " + st.reps + " @ " + st.percent_tm + "%";
      }

      return tpl(
        `
      <div class="setline" data-percent="{{percent}}">
        <div class="lhs">
          <span class="tag">{{type}}</span>
          <span>{{leftText}}</span>
          {{notesHtml}}
        </div>
        <div class="rhs">
          <span class="mono js-weight">—</span>
        </div>
      </div>
      `,
        {
          percent: esc(st.percent_tm),
          type: esc(st.type),
          leftText: esc(leftText),
          notesHtml: st.notes
            ? tpl(`<span class="muted small">— {{notes}}</span>`, {
                notes: esc(st.notes),
              })
            : "",
        },
      ).trim();
    }

    function renderDay(day, week) {
      var setsHtml = day.sets.map(renderSetLine).join("");
      var assistanceHtml = day.assistance
        .map(function (asstExercise) {
          return tpl(
            `<div class="assistanceline">
                <div class="lhs">
                  <label for="assistance-{{exerciseType}}-{{week}}{{day}}" class="tag">{{exerciseType}}</label>
                  <select name="assistance-{{exerciseType}}-{{week}}{{day}}" id="assistance-{{exerciseType}}-{{week}}{{day}}">
                    {{options}}
                  </select>
                </div>
                <div class="rhs">
                  <span class="mono js-reps">{{reps}}</span>
                </div>
              </div>`,
            {
              exerciseType: esc(asstExercise.type),
              day: esc(day?.day.toLowerCase().replace(" ", "")),
              options: Object.keys(asstExercise.exercises)
                .map((key) => {
                  return `<option value="${asstExercise.exercises[key]}" id="${key}">${asstExercise.exercises[key]}</option>`;
                })
                .join(""),
              reps: asstExercise.reps,
              week: "week" + week,
            },
          );
        })
        .join("");

      return tpl(
        `<div class="day">
            <div class="head">
              <div class="title">{{dayName}}</div>
              <div class="badge">Main Lift: {{mainLift}}</div>
            </div>

            <div class="body">
              <div class="k">Warm-Up: {{warmup}}</div>

              <div class="sets" data-main-lift="{{mainLiftAttr}}" style="margin-top: 10px;">
                <div style="margin-top: 10px; font-weight: 700; font-size: 12px; letter-spacing: .25px;">
                  Main Lift Work
                </div>
                {{setsHtml}}
              </div>

              <div style="margin-top: 10px;">
                <div class="assist-title">
                  Assistance
                </div>
                <div style="margin-top: 10px; font-weight: 700; font-size: 12px; letter-spacing: .25px;">
                  {{assistanceHtml}}
                </div>
              </div>
            </div>
        </div>`,
        {
          dayName: esc(day.day),
          mainLift: esc(day.main_lift),
          mainLiftAttr: esc(day.main_lift),
          warmup: esc(day.warm_up.join(" • ")),
          setsHtml: setsHtml,
          assistanceHtml: assistanceHtml,
        },
      ).trim();
    }

    function renderWeek(wk) {
      return tpl(
        `
      <div class="week" data-week="{{week}}" style="margin-top: 14px;">
        <div class="pill week-pill" style="margin-top: 10px;">
          Week <b>{{week}}</b>
        </div>
        <div class="week-days">
          {{daysHtml}}
        </div>
      </div>
      `,
        {
          week: esc(wk.week),
          daysHtml: wk.days
            .map((day) => {
              return renderDay(day, wk.week);
            })
            .join(""),
        },
      ).trim();
    }

    var sourceHtml = tpl(
      `
    <div class="small muted">
      Source:
      <a href="{{source}}" target="_blank" rel="noopener">jimwendler.com</a>
    </div>
    `,
      { source: esc(PROGRAM.source) },
    ).trim();

    var notesHtml = tpl(
      `<div class="note">
        <ul style="margin: 8px 0 0 18px; padding: 0;">
          {{items}}
        </ul>
      </div>`,
      {
        items: PROGRAM.notes
          .map(function (n) {
            return tpl(`<li>{{note}}</li>`, { note: esc(n) });
          })
          .join(""),
      },
    ).trim();

    var weeksHtml = PROGRAM.weeks.map(renderWeek).join("");

    root.html(sourceHtml + notesHtml + weeksHtml);
  }

  function updateAllWeights(state) {
    var tm = {
      squat: calcTM(state.squat),
      bench: calcTM(state.bench),
      deadlift: calcTM(state.deadlift),
      press: calcTM(state.press),
    };

    $(".sets").each(function () {
      var $sets = $(this);
      var key = liftKeyFromName($sets.data("main-lift"));
      var tmVal = tm[key];

      $sets.find(".setline").each(function () {
        var $line = $(this);
        var pct = parseFloat($line.data("percent"));
        var w = calcWeightFromTM(tmVal, pct);
        $line.find(".js-weight").text(fmtKg(w));
      });
    });
  }

  function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    // execCommand fallback for file:// or non-secure contexts
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.cssText =
      "position:fixed;top:0;left:0;opacity:0;pointer-events:none;";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try {
      document.execCommand("copy");
    } finally {
      document.body.removeChild(ta);
    }
    return Promise.resolve();
  }

  function wireInputs() {
    $("#inSquat,#inBench,#inDeadlift,#inPress").on("input change", function () {
      var state = getStateFromInputs();
      saveState(state);
      updateTMDisplay(state);
      updateAllWeights(state);
      applyCurrentWeekAndDayUI(state);
    });

    // NEW: week/day radios
    $('input[name="week_radio"], input[name="day_radio"]').on(
      "change",
      function () {
        var state = getStateFromInputs();
        saveState(state);
        applyCurrentWeekAndDayUI(state);
      },
    );

    $("#btnResetDefaults").on("click", function () {
      var state = $.extend({}, DEFAULTS);
      saveState(state);
      setInputsFromState(state);
      updateTMDisplay(state);
      updateAllWeights(state);
    });

    $("#btnClearStorage").on("click", function () {
      localStorage.removeItem(STORAGE_KEY);
      var state = $.extend({}, DEFAULTS);
      setInputsFromState(state);
      updateTMDisplay(state);
      updateAllWeights(state);
    });

    $("#program").on("change", "select[id^='assistance-']", function () {
      var state = getStateFromInputs();
      saveState(state);
    });

    // Extract state → base64 → copy to clipboard, also populate the input
    $("#btnExtractState").on("click", function () {
      var state = getStateFromInputs();
      var encoded = btoa(JSON.stringify(state));
      $("#currentStateStringInput").val(encoded);
      console.log(encoded);
      // last resort: select so user can Ctrl+C manually
      $("#currentStateStringInput")[0].select();
      copyToClipboard(encoded).catch(function () {});
    });

    // Disable Load button while input is empty
    $("#btnLoadState").prop("disabled", true);
    $("#currentStateStringInput").on("input", function () {
      $("#btnLoadState").prop("disabled", $(this).val().trim() === "");
    });

    // Decode base64 → validate → apply state
    $("#btnLoadState").on("click", function () {
      var encoded = $("#currentStateStringInput").val().trim();
      try {
        var decoded = atob(encoded); // throws if not valid base64
        var state = JSON.parse(decoded); // throws if not valid JSON
        if (
          typeof state !== "object" ||
          state === null ||
          typeof state.squat !== "number" ||
          typeof state.bench !== "number" ||
          typeof state.deadlift !== "number" ||
          typeof state.press !== "number"
        ) {
          throw new Error("Missing or invalid lift values in state.");
        }
        // Merge with defaults so missing keys are filled in safely
        state = $.extend(true, {}, DEFAULTS, state);
        saveState(state);
        setInputsFromState(state);
        updateTMDisplay(state);
        updateAllWeights(state);
        applyCurrentWeekAndDayUI(state);
      } catch (e) {
        window.alert("Could not load state: " + e.message);
      }
    });
  }

  // NEW: week pill toggle (default collapsed)
  function wireWeekToggle() {
    $("#program").on("click", ".week-pill", function () {
      var $pill = $(this);
      var $week = $pill.closest(".week");
      var $days = $week.find(".week-days").first();

      $pill.toggleClass("is-open");
      $days.stop(true, true).slideToggle(180);
    });

    // Ensure all collapsed by default (in case of SSR differences)
    $(".week-days").hide();
    $(".week-pill").removeClass("is-open");
  }

  function setupAntiRefreshMitigations() {
    if (isMobileLike()) {
      $("#mobileNote").show();
    }

    $(window).on("pageshow", function () {
      var state = loadState();
      setInputsFromState(state);
      updateTMDisplay(state);
      updateAllWeights(state);
    });

    var wakeLock = null;
    function requestWakeLock() {
      if (!("wakeLock" in navigator)) return;
      navigator.wakeLock
        .request("screen")
        .then(function (lock) {
          wakeLock = lock;
        })
        .catch(function () {});
    }
    $(document).one("click keydown touchstart", function () {
      requestWakeLock();
    });
    $(document).on("visibilitychange", function () {
      if (document.visibilityState === "visible" && wakeLock === null) {
        requestWakeLock();
      }
    });
  }

  function showDayWorkout() {
    $("#program").on("click", ".day .head", function () {
      const dayHeader = $(this);
      dayHeader.next().slideToggle();
    });
  }

  function dayLetterToDayName(letter) {
    var map = { A: "Day A", B: "Day B", D: "Day D", E: "Day E" };
    return map[String(letter || "").toUpperCase()] || null;
  }

  function applyCurrentWeekAndDayUI(state) {
    // --- Week: open only the selected week ---
    var weekNum = state.currentWeek;

    // close all weeks
    $(".week-days").stop(true, true).slideUp(0);
    $(".week-days .body").stop(true, true).slideUp(0);
    $(".week-pill").removeClass("is-open");

    // open selected week
    var $week = $('.week[data-week="' + weekNum + '"]');
    $week.find(".week-pill").addClass("is-open");
    $week.find(".week-days").stop(true, true).slideDown(0);

    // --- Day highlight inside that week ---
    $(".day").removeClass("is-current");

    var dayName = dayLetterToDayName(state.currentDay);
    if (!dayName) return;

    // find the .day whose .title matches (Monday/Tuesday/Thursday/Friday)
    $week.find(".day").each(function () {
      var $day = $(this);
      var title = $.trim($day.find(".head .title").first().text());

      if (title === dayName) {
        $day.addClass("is-current");

        // Slide toggle the corresponding day
        $day.find(".body").first().stop(true, true).slideDown(180);
        // optional: scroll into view (nice on mobile)
        // comment this out if you don't want auto scrolling
        $day[0].scrollIntoView({ behavior: "smooth", block: "start" });
        return false; // break loop
      }
    });
  }

  $(function () {
    renderProgram();

    var state = loadState();
    //console.log(state);
    setInputsFromState(state);
    updateTMDisplay(state);
    updateAllWeights(state);
    applyCurrentWeekAndDayUI(state);

    wireInputs();
    wireWeekToggle();
    setupAntiRefreshMitigations();
    showDayWorkout();
    applyCurrentWeekAndDayUI(state);
  });
})(jQuery);
