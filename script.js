const monthConfig = {
  year: 2026,
  monthIndex: 5,
  monthName: "June",
  storageKey: "june-fitness-calendar-2026-marathon-plan",
};

const weekdayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const weekdayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const startingWeightKg = 58;
const measurementUnits = {
  weight: "kg",
  waist: "in",
};
const baselineCheckin = {
  appliedKey: `${monthConfig.storageKey}-baseline-checkin-2026-06-01`,
  day: 1,
  weight: "59.05",
  waist: "33.5",
};

const fullDateFormatter = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
});

const monthDayFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
});

const shortDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
});

const monthPlan = {
  objectiveGroups: [
    {
      title: "Primary Goal",
      items: ["December Marathon", "Build aerobic base", "Improve durability"],
    },
    {
      title: "Secondary Goal",
      items: ["Leaner waist", "Visible abs by December"],
    },
    {
      title: "Tertiary Goal",
      items: ["Bigger arms", "Broader shoulders", "More upper-body muscle"],
    },
  ],
  currentStats: [
    { label: "Age", value: "39" },
    { label: "Height", value: "156 cm" },
    { label: "Weight", value: "58 kg" },
    { label: "Running Days", value: "Tuesday, Thursday, Sunday" },
    { label: "Gym Days", value: "Monday, Wednesday, Friday" },
    { label: "Indoor Cricket", value: "Saturday" },
  ],
  nutritionTemplates: [
    {
      title: "Run Days",
      calories: "2200",
      protein: "130g",
      carbs: "260g",
      fat: "60g",
    },
    {
      title: "Gym Days",
      calories: "2200",
      protein: "130g",
      carbs: "260g",
      fat: "60g",
    },
    {
      title: "Cricket Day",
      calories: "2200",
      protein: "130g",
      carbs: "260g",
      fat: "60g",
    },
    {
      title: "Long Run Days",
      calories: "2400 to 2500",
      protein: "130g",
      carbs: "300 to 325g",
      fat: "55g",
    },
  ],
  mobility: [
    "Ankle Rocks - 10 reps each side",
    "World's Greatest Stretch - 5 reps each side",
    "Deep Squat Hold - 60 seconds",
    "Leg Swings Front/Back - 10 each leg",
    "Leg Swings Side/Side - 10 each leg",
    "Calf Raises - 20 reps",
  ],
  metrics: [
    {
      title: "Running",
      items: [
        "Complete all 13 planned runs",
        "Complete all 4 long runs",
        "Reach 16 km long run comfortably",
      ],
    },
    {
      title: "Gym",
      items: [
        "Complete all 13 gym sessions",
        "Increase weights or reps on curls",
        "Increase weights or reps on rows",
        "Increase weights or reps on bench press",
      ],
    },
    {
      title: "Body Composition",
      items: [
        "Lose 1 to 2 cm from waist",
        "Maintain body weight between 57 and 58 kg",
        "Notice improved shoulder and arm definition",
      ],
    },
    {
      title: "Recovery",
      items: [
        "No injuries",
        "No missed long runs",
        "Sleep minimum 7 hours per night",
      ],
    },
  ],
};

const macroTemplates = {
  standard: {
    protein: "130g",
    carbs: "260g",
    fat: "60g",
  },
  longRun: {
    protein: "130g",
    carbs: "300-325g",
    fat: "55g",
  },
};

const workoutTemplates = {
  upperBodyStrength: [
    "Bench Press - 4 x 6",
    "Lat Pulldown - 4 x 8",
    "Incline Dumbbell Press - 3 x 10",
    "Seated Cable Row - 3 x 10",
    "Barbell Curl - 4 x 10",
    "Hammer Curl - 3 x 12",
    "Plank - 3 x 60 sec",
  ],
  runnerStrength: [
    "Back Squat - 4 x 5",
    "Romanian Deadlift - 4 x 8",
    "Bulgarian Split Squat - 3 x 10 each leg",
    "Standing Calf Raise - 4 x 15",
    "Tibialis Raise - 3 x 20",
    "Hanging Knee Raise - 3 x 15",
  ],
  runnerStability: [
    "Goblet Squat - 3 x 10",
    "Step Ups - 3 x 12 each leg",
    "Single Leg Romanian Deadlift - 3 x 10 each leg",
    "Walking Lunges - 3 x 20 steps",
    "Seated Calf Raise - 4 x 15",
    "Tibialis Raise - 3 x 20",
    "Plank - 3 x 60 sec",
  ],
  runnerDurability: [
    "Step Ups - 3 x 12 each leg",
    "Walking Lunges - 3 x 20 steps",
    "Single Leg Romanian Deadlift - 3 x 10 each leg",
    "Lateral Band Walks - 3 x 15 each direction",
    "Seated Calf Raise - 4 x 15",
    "Tibialis Raise - 3 x 20",
    "Plank - 3 x 60 sec",
  ],
  upperBodyHypertrophy: [
    "Dumbbell Shoulder Press - 4 x 10",
    "One Arm Dumbbell Row - 4 x 10",
    "Lateral Raise - 3 x 15",
    "Incline Curl - 4 x 12",
    "Cable Curl - 3 x 15",
    "Tricep Pushdown - 4 x 12",
    "Side Plank - 3 x 45 sec",
  ],
};

function createGymDay(activity, summary, details, calories, estimatedBurn) {
  return {
    category: "gym",
    badge: "Gym Day",
    activity,
    summary,
    details,
    highlights: [],
    calories,
    macroTemplate: "standard",
    estimatedBurn,
  };
}

function createRunDay({
  activity,
  summary,
  distance,
  distanceKm,
  calories,
  details = [],
  effort = "",
  category = "run",
  estimatedBurn,
}) {
  return {
    category,
    badge: category === "long-run" ? "Long Run" : "Run Day",
    activity,
    summary,
    details,
    highlights: [distance, effort].filter(Boolean),
    calories,
    macroTemplate: category === "long-run" ? "longRun" : "standard",
    distanceKm,
    estimatedBurn:
      estimatedBurn ?? Math.round((distanceKm ?? 0) * startingWeightKg),
  };
}

function createCricketDay(calories, estimatedBurn) {
  return {
    category: "cricket",
    badge: "Cricket Day",
    activity: "Indoor Cricket",
    summary: "Indoor cricket session.",
    details: [],
    highlights: [],
    calories,
    macroTemplate: "standard",
    estimatedBurn,
  };
}

const dailyPlan = {
  1: createGymDay(
    "Upper Body Strength",
    "Chest, back, curls, and core work to start the week.",
    workoutTemplates.upperBodyStrength,
    "2200",
    320,
  ),
  2: createRunDay({
    activity: "Easy Run",
    summary: "Conversational aerobic base run.",
    distance: "7 km",
    distanceKm: 7,
    effort: "Conversational",
    calories: "2200",
  }),
  3: createGymDay(
    "Runner Strength",
    "Heavy leg strength with single-leg support work for power and resilience.",
    workoutTemplates.runnerStrength,
    "2200",
    360,
  ),
  4: createRunDay({
    activity: "Quality Run",
    summary: "Tempo sandwich session for controlled threshold work.",
    distance: "6 km",
    distanceKm: 6,
    details: ["1.5 km easy", "3 km tempo", "1.5 km easy"],
    calories: "2200",
  }),
  5: createGymDay(
    "Upper Body Hypertrophy",
    "Shoulders, rows, arms, and trunk stability.",
    workoutTemplates.upperBodyHypertrophy,
    "2200",
    300,
  ),
  6: createCricketDay("2200", 410),
  7: createRunDay({
    activity: "Long Run",
    summary: "Easy long run for durability and base building.",
    distance: "10 km",
    distanceKm: 10,
    effort: "Easy",
    calories: "2400",
    category: "long-run",
  }),
  8: createGymDay(
    "Upper Body Strength",
    "Repeat the week 1 upper-body strength session.",
    workoutTemplates.upperBodyStrength,
    "2200",
    320,
  ),
  9: createRunDay({
    activity: "Easy Run",
    summary: "Smooth aerobic mileage.",
    distance: "8 km",
    distanceKm: 8,
    calories: "2200",
  }),
  10: createGymDay(
    "Runner Stability",
    "Single-leg control, trunk stability, and lower-leg work for better running mechanics.",
    workoutTemplates.runnerStability,
    "2200",
    360,
  ),
  11: createRunDay({
    activity: "Tempo Run",
    summary: "Progress the tempo volume while staying controlled.",
    distance: "7 km",
    distanceKm: 7,
    details: ["2 km easy", "3 km tempo", "2 km easy"],
    calories: "2200",
  }),
  12: createGymDay(
    "Upper Body Hypertrophy",
    "Repeat the upper-body hypertrophy session.",
    workoutTemplates.upperBodyHypertrophy,
    "2200",
    300,
  ),
  13: createCricketDay("2200", 410),
  14: createRunDay({
    activity: "Long Run",
    summary: "Keep the effort easy and relaxed.",
    distance: "12 km",
    distanceKm: 12,
    calories: "2400",
    category: "long-run",
  }),
  15: createGymDay(
    "Upper Body Strength",
    "Return to the heavy upper-body pattern.",
    workoutTemplates.upperBodyStrength,
    "2200",
    320,
  ),
  16: createRunDay({
    activity: "Easy Run",
    summary: "Aerobic mileage at a comfortable pace.",
    distance: "8 km",
    distanceKm: 8,
    calories: "2200",
  }),
  17: createGymDay(
    "Runner Strength",
    "Return to the heavy runner-strength session and move with crisp form.",
    workoutTemplates.runnerStrength,
    "2200",
    360,
  ),
  18: createRunDay({
    activity: "Interval Run",
    summary: "Short fast reps with jog recoveries.",
    distance: "Approx 7 km",
    distanceKm: 7,
    details: [
      "1.5 km warmup",
      "6 x 400m hard",
      "200m easy jog recovery",
      "1.5 km cooldown",
    ],
    calories: "2200",
  }),
  19: createGymDay(
    "Upper Body Hypertrophy",
    "Keep driving shoulder, arm, and upper-back volume.",
    workoutTemplates.upperBodyHypertrophy,
    "2200",
    300,
  ),
  20: createCricketDay("2200", 410),
  21: createRunDay({
    activity: "Long Run",
    summary: "Build durability with longer easy mileage.",
    distance: "14 km",
    distanceKm: 14,
    calories: "2500",
    category: "long-run",
  }),
  22: createGymDay(
    "Upper Body Strength",
    "Stay consistent with the main upper-body lifts.",
    workoutTemplates.upperBodyStrength,
    "2200",
    320,
  ),
  23: createRunDay({
    activity: "Easy Run",
    summary: "Keep the effort smooth and sustainable.",
    distance: "8 km",
    distanceKm: 8,
    calories: "2200",
  }),
  24: createGymDay(
    "Runner Durability",
    "Durability-focused leg work to reinforce balance, lateral control, and fatigue resistance.",
    workoutTemplates.runnerDurability,
    "2200",
    360,
  ),
  25: createRunDay({
    activity: "Tempo Run",
    summary: "Revisit the tempo structure and stay controlled.",
    distance: "7 km",
    distanceKm: 7,
    details: ["2 km easy", "3 km tempo", "2 km easy"],
    calories: "2200",
  }),
  26: createGymDay(
    "Upper Body Hypertrophy",
    "Finish the week with shoulder and arm volume.",
    workoutTemplates.upperBodyHypertrophy,
    "2200",
    300,
  ),
  27: createCricketDay("2200", 410),
  28: createRunDay({
    activity: "Long Run",
    summary: "Longest June run. Keep it steady and comfortable.",
    distance: "16 km",
    distanceKm: 16,
    calories: "2500",
    category: "long-run",
  }),
  29: createGymDay(
    "Upper Body Strength",
    "Last June strength session. Keep the quality high.",
    workoutTemplates.upperBodyStrength,
    "2200",
    320,
  ),
  30: createRunDay({
    activity: "Easy Run",
    summary: "Close the month with relaxed aerobic mileage.",
    distance: "8 km",
    distanceKm: 8,
    calories: "2200",
  }),
};

const heroTagsElement = document.getElementById("heroTags");
const plannerTabButton = document.getElementById("plannerTabButton");
const reportTabButton = document.getElementById("reportTabButton");
const plannerWorkspaceElement = document.getElementById("plannerWorkspace");
const reportWorkspaceElement = document.getElementById("reportWorkspace");
const objectivesGridElement = document.getElementById("objectivesGrid");
const statsListElement = document.getElementById("statsList");
const nutritionGridElement = document.getElementById("nutritionGrid");
const mobilityListElement = document.getElementById("mobilityList");
const metricsGridElement = document.getElementById("metricsGrid");
const calendarEyebrowElement = document.getElementById("calendarEyebrow");
const calendarNoteElement = document.getElementById("calendarNote");
const calendarScrollElement = document.getElementById("calendarScroll");
const weekdayRowElement = document.getElementById("weekdayRow");
const calendarGrid = document.getElementById("calendarGrid");
const monthDetailPanel = document.getElementById("monthDetailPanel");
const monthViewButton = document.getElementById("monthViewButton");
const weekViewButton = document.getElementById("weekViewButton");
const dayViewButton = document.getElementById("dayViewButton");
const todayButton = document.getElementById("todayButton");
const previousPeriodButton = document.getElementById("previousPeriodButton");
const nextPeriodButton = document.getElementById("nextPeriodButton");
const periodTitleElement = document.getElementById("periodTitle");
const periodSubtitleElement = document.getElementById("periodSubtitle");
const clearDataButton = document.getElementById("clearData");
const plannedRunsElement = document.getElementById("plannedRuns");
const plannedGymSessionsElement = document.getElementById("plannedGymSessions");
const longRunsElement = document.getElementById("longRuns");
const completedDaysElement = document.getElementById("completedDays");
const mondayCheckinsElement = document.getElementById("mondayCheckins");
const averageCaloriesElement = document.getElementById("averageCalories");
const saveStatusElement = document.getElementById("saveStatus");
const loggedIntakeDaysElement = document.getElementById("loggedIntakeDays");
const averageConsumedCaloriesElement = document.getElementById(
  "averageConsumedCalories",
);
const estimatedBurnTotalElement = document.getElementById("estimatedBurnTotal");
const latestCheckinSummaryElement = document.getElementById(
  "latestCheckinSummary",
);
const energyChartElement = document.getElementById("energyChart");
const measurementChartElement = document.getElementById("measurementChart");
const reportInsightsElement = document.getElementById("reportInsights");
const weeklyReportBodyElement = document.getElementById("weeklyReportBody");

const workspaceButtons = [plannerTabButton, reportTabButton];
const viewButtons = [monthViewButton, weekViewButton, dayViewButton];

const daysInMonth = new Date(
  monthConfig.year,
  monthConfig.monthIndex + 1,
  0,
).getDate();

const calendarWeeks = buildCalendarWeeks();

let saveTimer;
let hasStoredData = false;

const storedState = loadStoredData();
hasStoredData = storedState.hasStoredData;

let calendarData = normalizeData(storedState.data);
const appliedBaselineCheckin = applyBaselineCheckin();
hasStoredData = hasStoredData || appliedBaselineCheckin;

const uiState = {
  section: "planner",
};

const todayInMonth = getTodayDayInMonth();

const calendarState = {
  view: "month",
  selectedDay: todayInMonth ?? 1,
  selectedWeekIndex: 0,
  monthExpandedDay: todayInMonth ?? 1,
};

syncSelectionFromDay(calendarState.selectedDay);

function loadStoredData() {
  const raw = window.localStorage.getItem(monthConfig.storageKey);

  if (!raw) {
    return { data: {}, hasStoredData: false };
  }

  try {
    return {
      data: JSON.parse(raw),
      hasStoredData: true,
    };
  } catch (error) {
    console.warn("Could not parse saved June plan data.", error);
    return { data: {}, hasStoredData: false };
  }
}

function createKey(day) {
  return `${monthConfig.year}-${String(monthConfig.monthIndex + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function createDefaultEntry(day) {
  return {
    calories: dailyPlan[day].calories,
    consumedCalories: "",
    completed: false,
    weight: "",
    waist: "",
  };
}

function normalizeData(rawData) {
  const normalized = {};

  for (let day = 1; day <= daysInMonth; day += 1) {
    const key = createKey(day);
    const savedEntry = rawData[key] ?? {};
    const defaultEntry = createDefaultEntry(day);

    normalized[key] = {
      calories: savedEntry.calories ?? defaultEntry.calories,
      consumedCalories: savedEntry.consumedCalories ?? "",
      completed: Boolean(savedEntry.completed),
      weight: savedEntry.weight ?? "",
      waist: savedEntry.waist ?? "",
    };
  }

  return normalized;
}

function getEntry(day) {
  return calendarData[createKey(day)];
}

function applyBaselineCheckin() {
  if (window.localStorage.getItem(baselineCheckin.appliedKey) === "true") {
    return false;
  }

  const entry = getEntry(baselineCheckin.day);

  if (!entry || entry.weight || entry.waist) {
    window.localStorage.setItem(baselineCheckin.appliedKey, "true");
    return false;
  }

  entry.weight = baselineCheckin.weight;
  entry.waist = baselineCheckin.waist;

  window.localStorage.setItem(
    monthConfig.storageKey,
    JSON.stringify(calendarData),
  );
  window.localStorage.setItem(baselineCheckin.appliedKey, "true");
  return true;
}

function getDateForDay(day) {
  return new Date(monthConfig.year, monthConfig.monthIndex, day);
}

function getTodayDayInMonth() {
  const today = new Date();

  if (
    today.getFullYear() !== monthConfig.year ||
    today.getMonth() !== monthConfig.monthIndex
  ) {
    return null;
  }

  return today.getDate();
}

function buildCalendarWeeks() {
  const weeks = [];
  const firstWeekday = getDateForDay(1).getDay();
  const mondayOffset = (firstWeekday + 6) % 7;
  let currentWeek = new Array(7).fill(null);
  let slotIndex = mondayOffset;

  for (let day = 1; day <= daysInMonth; day += 1) {
    currentWeek[slotIndex] = day;
    slotIndex += 1;

    if (slotIndex === 7) {
      weeks.push(currentWeek);
      currentWeek = new Array(7).fill(null);
      slotIndex = 0;
    }
  }

  if (currentWeek.some((day) => day !== null)) {
    weeks.push(currentWeek);
  }

  return weeks;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}

function getNumericValue(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
}

function hasTextValue(value) {
  return String(value ?? "").trim() !== "";
}

function hasNutritionLog(day, entry) {
  const consumedLogged = hasTextValue(entry.consumedCalories);
  const calorieEdited =
    hasTextValue(entry.calories) && String(entry.calories) !== String(dailyPlan[day].calories);

  return consumedLogged || calorieEdited;
}

function hasMeasurementLog(entry) {
  return hasTextValue(entry.weight) || hasTextValue(entry.waist);
}

function getDayProgressState(day) {
  const entry = getEntry(day);
  const nutritionLogged = hasNutritionLog(day, entry);

  if (entry.completed && nutritionLogged) {
    return "complete";
  }

  if (entry.completed || nutritionLogged || hasMeasurementLog(entry)) {
    return "partial";
  }

  return "empty";
}

function getDayProgressLabel(progressState) {
  if (progressState === "complete") {
    return "Complete and fuel logged";
  }

  if (progressState === "partial") {
    return "Partially logged";
  }

  return "Not logged yet";
}

function applyProgressStateToCard(card, day) {
  const progressState = getDayProgressState(day);

  card.classList.remove(
    "is-progress-empty",
    "is-progress-partial",
    "is-progress-complete",
  );
  card.classList.add(`is-progress-${progressState}`);

  const statusPill = card.querySelector(".collapsed-status-pill");
  if (statusPill instanceof HTMLElement) {
    statusPill.classList.remove("is-empty", "is-partial", "is-complete");
    statusPill.classList.add(`is-${progressState}`);
    statusPill.textContent = getDayProgressLabel(progressState);
  }
}

function updateDayProgressUI(day) {
  document
    .querySelectorAll(`.day-card[data-day="${day}"]`)
    .forEach((card) => applyProgressStateToCard(card, day));
}

function formatKcal(value) {
  return `${Math.round(value).toLocaleString()} kcal`;
}

function formatMeasurement(value, unit) {
  if (value === null) {
    return "--";
  }

  const display = Number.isInteger(value) ? `${value}` : value.toFixed(1);
  return `${display} ${unit}`;
}

function roundUpToStep(value, step) {
  return Math.max(step, Math.ceil(value / step) * step);
}

function buildLinePath(points) {
  if (!points.length) {
    return "";
  }

  return points
    .map((point, index) =>
      `${index === 0 ? "M" : "L"} ${point.x.toFixed(2)} ${point.y.toFixed(2)}`,
    )
    .join(" ");
}

function countMondaysInMonth() {
  return Array.from({ length: daysInMonth }, (_, index) => index + 1).filter(
    (day) => getDateForDay(day).getDay() === 1,
  ).length;
}

function getWeekIndexForDay(day) {
  return calendarWeeks.findIndex((week) => week.includes(day));
}

function getWeekOfMonth(day) {
  return getWeekIndexForDay(day) + 1;
}

function syncSelectionFromDay(day) {
  const boundedDay = Math.min(Math.max(day, 1), daysInMonth);
  calendarState.selectedDay = boundedDay;
  calendarState.selectedWeekIndex = getWeekIndexForDay(boundedDay);
}

function getVisibleSlots() {
  if (calendarState.view === "week") {
    return calendarWeeks[calendarState.selectedWeekIndex];
  }

  if (calendarState.view === "day") {
    return [calendarState.selectedDay];
  }

  return calendarWeeks.flat();
}

function getWeekRange(weekIndex) {
  const week = calendarWeeks[weekIndex];
  const days = week.filter((day) => day !== null);
  return {
    start: days[0],
    end: days[days.length - 1],
  };
}

function formatDayRange(startDay, endDay) {
  const startDate = getDateForDay(startDay);
  const endDate = getDateForDay(endDay);
  return `${monthDayFormatter.format(startDate)} to ${monthDayFormatter.format(endDate)}, ${monthConfig.year}`;
}

function getPotentialBurn(day) {
  return dailyPlan[day].estimatedBurn;
}

function persistData(message = "Progress saved") {
  window.localStorage.setItem(
    monthConfig.storageKey,
    JSON.stringify(calendarData),
  );

  hasStoredData = true;

  saveStatusElement.textContent = `${message} at ${new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  })}.`;

  window.clearTimeout(saveTimer);
  saveTimer = window.setTimeout(() => {
    saveStatusElement.textContent =
      "Saved June updates are stored in this browser.";
  }, 2200);

  updateSummary();
  renderReport();
}

function renderHeroTags() {
  const totalRuns = Object.values(dailyPlan).filter(
    (plan) => plan.category === "run" || plan.category === "long-run",
  ).length;
  const gymSessions = Object.values(dailyPlan).filter(
    (plan) => plan.category === "gym",
  ).length;
  const longRuns = Object.values(dailyPlan).filter(
    (plan) => plan.category === "long-run",
  ).length;
  const mondayCheckins = countMondaysInMonth();

  const tags = [
    `${totalRuns} planned runs`,
    `${gymSessions} gym sessions`,
    `${longRuns} long runs`,
    `${mondayCheckins} Monday check-ins`,
  ];

  heroTagsElement.innerHTML = tags
    .map((tag) => `<span class="hero-tag">${escapeHtml(tag)}</span>`)
    .join("");
}

function renderObjectives() {
  objectivesGridElement.innerHTML = monthPlan.objectiveGroups
    .map(
      (group) => `
        <article class="objective-block">
          <h3>${escapeHtml(group.title)}</h3>
          <ul>
            ${group.items
              .map((item) => `<li>${escapeHtml(item)}</li>`)
              .join("")}
          </ul>
        </article>
      `,
    )
    .join("");
}

function renderCurrentStats() {
  statsListElement.innerHTML = monthPlan.currentStats
    .map(
      (item) => `
        <li>
          <span class="info-label">${escapeHtml(item.label)}</span>
          <span class="info-value">${escapeHtml(item.value)}</span>
        </li>
      `,
    )
    .join("");
}

function renderNutrition() {
  nutritionGridElement.innerHTML = monthPlan.nutritionTemplates
    .map(
      (item) => `
        <article class="nutrition-card-item">
          <h3>${escapeHtml(item.title)}</h3>
          <div class="nutrition-values">
            <div class="nutrition-row"><span>Calories</span><strong>${escapeHtml(item.calories)}</strong></div>
            <div class="nutrition-row"><span>Protein</span><strong>${escapeHtml(item.protein)}</strong></div>
            <div class="nutrition-row"><span>Carbs</span><strong>${escapeHtml(item.carbs)}</strong></div>
            <div class="nutrition-row"><span>Fat</span><strong>${escapeHtml(item.fat)}</strong></div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderMobility() {
  mobilityListElement.innerHTML = monthPlan.mobility
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");
}

function renderMetrics() {
  metricsGridElement.innerHTML = monthPlan.metrics
    .map(
      (group) => `
        <article class="metric-group">
          <h3>${escapeHtml(group.title)}</h3>
          <ul>
            ${group.items
              .map((item) => `<li>${escapeHtml(item)}</li>`)
              .join("")}
          </ul>
        </article>
      `,
    )
    .join("");
}

function renderOverview() {
  renderHeroTags();
  renderObjectives();
  renderCurrentStats();
  renderNutrition();
  renderMobility();
  renderMetrics();
}

function renderMacroList(plan) {
  const macroSet = macroTemplates[plan.macroTemplate];

  return `
    <div class="macro-list">
      <div class="macro-item"><span>Protein</span><strong>${macroSet.protein}</strong></div>
      <div class="macro-item"><span>Carbs</span><strong>${macroSet.carbs}</strong></div>
      <div class="macro-item"><span>Fat</span><strong>${macroSet.fat}</strong></div>
    </div>
  `;
}

function renderDetailDrawer(plan, expanded) {
  if (!plan.details.length) {
    return "";
  }

  const label = plan.category === "gym" ? "Session details" : "Workout details";

  return `
    <details class="detail-drawer" ${expanded ? "open" : ""}>
      <summary>${label}</summary>
      <ul class="detail-list">
        ${plan.details
          .map((detail) => `<li>${escapeHtml(detail)}</li>`)
          .join("")}
      </ul>
    </details>
  `;
}

function renderMeasurementBlock(day, entry) {
  return `
    <section class="measurement-block">
      <h3 class="measurement-title">Weekly Measurements</h3>
      <p class="measurement-note">
        Monday check-in for body weight and waist measurement.
      </p>
      <div class="measurement-grid">
        <label class="measurement-field">
          <span class="field-label">Weight (${measurementUnits.weight})</span>
          <input
            data-field="weight"
            data-day="${day}"
            type="number"
            min="0"
            step="0.1"
            inputmode="decimal"
            placeholder="kg"
            value="${escapeAttribute(entry.weight)}"
          />
        </label>
        <label class="measurement-field">
          <span class="field-label">Waist (${measurementUnits.waist})</span>
          <input
            data-field="waist"
            data-day="${day}"
            type="number"
            min="0"
            step="0.1"
            inputmode="decimal"
            placeholder="${measurementUnits.waist}"
            value="${escapeAttribute(entry.waist)}"
          />
        </label>
      </div>
    </section>
  `;
}

function renderMetaChips(day, plan, isMonday) {
  const chips = [
    `<span class="meta-chip">Week ${getWeekOfMonth(day)}</span>`,
    ...plan.highlights.map((highlight) => {
      const className =
        plan.category === "run" ||
        plan.category === "long-run" ||
        plan.category === "cricket"
          ? `meta-chip is-${plan.category}`
          : "meta-chip";
      return `<span class="${className}">${escapeHtml(highlight)}</span>`;
    }),
  ];

  if (isMonday) {
    chips.push('<span class="meta-chip is-run">Check-in</span>');
  }

  return chips.join("");
}

function createEmptyCell(showLabel) {
  const spacer = document.createElement("div");
  spacer.className = `empty-cell${showLabel ? " is-labelled" : ""}`;
  spacer.setAttribute("aria-hidden", "true");

  if (showLabel) {
    spacer.innerHTML = '<span class="empty-cell-label">Outside June</span>';
  }

  return spacer;
}

function createCollapsedMonthCard(day) {
  const date = getDateForDay(day);
  const dayOfWeek = date.getDay();
  const isMonday = dayOfWeek === 1;
  const shortWeekday = weekdayNames[dayOfWeek].slice(0, 3);
  const plan = dailyPlan[day];
  const progressState = getDayProgressState(day);
  const isExpanded = calendarState.monthExpandedDay === day;
  const card = document.createElement("article");

  card.dataset.day = String(day);
  card.className = `day-card is-collapsed is-${plan.category} is-progress-${progressState}${isMonday ? " is-monday" : ""}${day === calendarState.selectedDay ? " is-selected" : ""}${isExpanded ? " is-expanded" : ""}`;

  card.innerHTML = `
    <button
      class="collapsed-day-button"
      type="button"
      data-day-trigger="${day}"
      aria-controls="monthDetailPanel"
      aria-expanded="${String(isExpanded)}"
    >
      <div class="day-top">
        <div>
          <div class="day-number">${day}</div>
          <div class="day-name">${shortWeekday}</div>
        </div>
        <span class="day-badge">${escapeHtml(plan.badge)}</span>
      </div>

      <div class="collapsed-session">
        <h3 class="collapsed-session-title">${escapeHtml(plan.activity)}</h3>
        <p class="collapsed-session-copy">
          ${escapeHtml(plan.highlights[0] ?? plan.summary)}
        </p>
      </div>

      <div class="collapsed-footer">
        <span class="collapsed-status-pill is-${progressState}">
          ${escapeHtml(getDayProgressLabel(progressState))}
        </span>
        <span class="collapsed-open-copy">${isExpanded ? "Editing below" : "Log & details"}</span>
      </div>
    </button>
  `;

  return card;
}

function createDayCard(day, expanded) {
  const date = getDateForDay(day);
  const dayOfWeek = date.getDay();
  const isMonday = dayOfWeek === 1;
  const plan = dailyPlan[day];
  const entry = getEntry(day);
  const progressState = getDayProgressState(day);
  const card = document.createElement("article");

  card.dataset.day = String(day);
  card.className = `day-card is-${plan.category} is-progress-${progressState}${isMonday ? " is-monday" : ""}${day === calendarState.selectedDay ? " is-selected" : ""}${expanded ? " is-expanded" : ""}`;

  card.innerHTML = `
    <div class="day-top">
      <div>
        <div class="day-number">${day}</div>
        <div class="day-name">${weekdayNames[dayOfWeek]}</div>
      </div>
      <span class="day-badge">${escapeHtml(plan.badge)}</span>
    </div>

    <div class="session-head">
      ${expanded ? `<p class="focused-date">${escapeHtml(fullDateFormatter.format(date))}</p>` : ""}
      <h3 class="session-title">${escapeHtml(plan.activity)}</h3>
      <p class="session-summary">${escapeHtml(plan.summary)}</p>
    </div>

    <div class="meta-chips">
      ${renderMetaChips(day, plan, isMonday)}
    </div>

    <label class="complete-toggle">
      <input
        data-field="completed"
        data-day="${day}"
        type="checkbox"
        ${entry.completed ? "checked" : ""}
      />
      <span>Session complete</span>
    </label>

    <div class="nutrition-block">
      <div class="calorie-grid">
        <label class="field">
          <span class="field-label">Target calories</span>
          <input
            data-field="calories"
            data-day="${day}"
            type="number"
            min="0"
            inputmode="numeric"
            placeholder="Calories"
            value="${escapeAttribute(entry.calories)}"
          />
        </label>
        <label class="field">
          <span class="field-label">Consumed calories</span>
          <input
            data-field="consumedCalories"
            data-day="${day}"
            type="number"
            min="0"
            inputmode="numeric"
            placeholder="Log intake"
            value="${escapeAttribute(entry.consumedCalories)}"
          />
        </label>
      </div>
      ${renderMacroList(plan)}
      <p class="burn-estimate">
        Potential burn from this planned session: ${formatKcal(plan.estimatedBurn)}
      </p>
    </div>

    ${renderDetailDrawer(plan, expanded)}
    ${isMonday ? renderMeasurementBlock(day, entry) : ""}
  `;

  return card;
}

function getCalendarViewCopy() {
  if (calendarState.view === "week") {
    return {
      eyebrow: "Week View",
      note:
        "Week view keeps one Monday-to-Sunday block on screen while preserving target calories, consumed calories, completion status, and Monday check-ins for the report tab.",
    };
  }

  if (calendarState.view === "day") {
    return {
      eyebrow: "Day View",
      note:
        "Day view zooms in on a single training session so you can focus on workout details, target vs consumed calories, and Monday measurements without the full grid.",
    };
  }

  return {
    eyebrow: "Month View",
    note:
      "Month view shows the full June training grid again, so you can log calories, mark sessions complete, and open workout details directly inside each day card.",
  };
}

function updatePeriodControls() {
  const viewCopy = getCalendarViewCopy();

  calendarEyebrowElement.textContent = viewCopy.eyebrow;
  calendarNoteElement.textContent = viewCopy.note;

  viewButtons.forEach((button) => {
    const isActive = button.dataset.view === calendarState.view;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (calendarState.view === "week") {
    const { start, end } = getWeekRange(calendarState.selectedWeekIndex);
    periodTitleElement.textContent = `Week ${calendarState.selectedWeekIndex + 1}`;
    periodSubtitleElement.textContent = formatDayRange(start, end);
  } else if (calendarState.view === "day") {
    const selectedPlan = dailyPlan[calendarState.selectedDay];
    periodTitleElement.textContent = fullDateFormatter.format(
      getDateForDay(calendarState.selectedDay),
    );
    periodSubtitleElement.textContent = `${selectedPlan.activity} • ${selectedPlan.badge}`;
  } else {
    periodTitleElement.textContent = "Full Month";
    periodSubtitleElement.textContent = formatDayRange(1, daysInMonth);
  }

  if (todayInMonth === null) {
    todayButton.textContent = "Today";
    todayButton.disabled = true;
  } else {
    todayButton.textContent = `Today • ${todayInMonth}`;
    todayButton.disabled = false;
  }

  previousPeriodButton.disabled =
    calendarState.view === "month" ||
    (calendarState.view === "week" && calendarState.selectedWeekIndex === 0) ||
    (calendarState.view === "day" && calendarState.selectedDay === 1);

  nextPeriodButton.disabled =
    calendarState.view === "month" ||
    (calendarState.view === "week" &&
      calendarState.selectedWeekIndex === calendarWeeks.length - 1) ||
    (calendarState.view === "day" && calendarState.selectedDay === daysInMonth);
}

function renderWeekdayRow() {
  if (calendarState.view === "day") {
    weekdayRowElement.className = "weekday-row view-day is-hidden";
    return;
  }

  weekdayRowElement.className = `weekday-row view-${calendarState.view}`;
  weekdayRowElement.innerHTML = weekdayLabels
    .map((label) => `<span>${label}</span>`)
    .join("");
}

function renderCalendar() {
  calendarGrid.innerHTML = "";
  calendarGrid.className = `calendar-grid view-${calendarState.view}`;
  calendarScrollElement.classList.toggle("is-day", calendarState.view === "day");
  calendarScrollElement.classList.toggle("is-month", calendarState.view === "month");

  const visibleSlots = getVisibleSlots();

  visibleSlots.forEach((day) => {
    if (day === null) {
      calendarGrid.appendChild(
        createEmptyCell(calendarState.view === "week"),
      );
      return;
    }

    calendarGrid.appendChild(
      createDayCard(day, calendarState.view === "day"),
    );
  });
}

function renderMonthDetailPanel() {
  monthDetailPanel.innerHTML = "";
  monthDetailPanel.hidden = true;
}

function revealMonthDetailPanel(force = false) {
  return force;
}

function renderCalendarSection() {
  updatePeriodControls();
  renderWeekdayRow();
  renderCalendar();
  renderMonthDetailPanel();
}

function getLatestMeasurementDay() {
  let latest = null;

  for (let day = 1; day <= daysInMonth; day += 1) {
    const entry = getEntry(day);
    const weight = getNumericValue(entry.weight);
    const waist = getNumericValue(entry.waist);

    if (weight !== null || waist !== null) {
      latest = day;
    }
  }

  return latest;
}

function getLatestMeasurement(field) {
  let latest = null;

  for (let day = 1; day <= daysInMonth; day += 1) {
    const value = getNumericValue(getEntry(day)[field]);
    if (value !== null) {
      latest = { day, value };
    }
  }

  return latest;
}

function buildEnergySeries() {
  return Array.from({ length: daysInMonth }, (_, index) => {
    const day = index + 1;
    const entry = getEntry(day);

    return {
      day,
      target: getNumericValue(entry.calories) ?? getNumericValue(dailyPlan[day].calories) ?? 0,
      consumed: getNumericValue(entry.consumedCalories),
      burn: getPotentialBurn(day),
    };
  });
}

function buildMeasurementSeries() {
  return Array.from({ length: daysInMonth }, (_, index) => {
    const day = index + 1;
    const entry = getEntry(day);

    return {
      day,
      weight: getNumericValue(entry.weight),
      waist: getNumericValue(entry.waist),
    };
  });
}

function createEnergyChartMarkup() {
  const series = buildEnergySeries();
  const consumedDays = series.filter((item) => item.consumed !== null).length;
  const width = 1040;
  const height = 320;
  const margin = { top: 18, right: 24, bottom: 38, left: 54 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;
  const maxValue = roundUpToStep(
    Math.max(
      400,
      ...series.flatMap((item) => [item.target, item.burn, item.consumed ?? 0]),
    ),
    200,
  );
  const columnWidth = plotWidth / series.length;
  const barWidth = Math.max(10, columnWidth * 0.58);

  const xForDay = (day) =>
    margin.left + (day - 1) * columnWidth + columnWidth / 2;
  const yForValue = (value) =>
    margin.top + plotHeight - (value / maxValue) * plotHeight;

  const gridLines = Array.from({ length: 5 }, (_, index) => {
    const ratio = index / 4;
    const value = Math.round(maxValue * (1 - ratio));
    const y = margin.top + plotHeight * ratio;

    return `
      <line class="chart-grid-line" x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}"></line>
      <text class="chart-label" x="${margin.left - 10}" y="${y + 4}" text-anchor="end">${value}</text>
    `;
  }).join("");

  const consumedBars = series
    .filter((item) => item.consumed !== null)
    .map((item) => {
      const x = xForDay(item.day) - barWidth / 2;
      const y = yForValue(item.consumed);
      const barHeight = margin.top + plotHeight - y;

      return `
        <rect
          x="${x}"
          y="${y}"
          width="${barWidth}"
          height="${barHeight}"
          rx="8"
          fill="rgba(212, 95, 52, 0.78)"
        ></rect>
      `;
    })
    .join("");

  const targetPoints = series.map((item) => ({
    x: xForDay(item.day),
    y: yForValue(item.target),
  }));

  const burnPoints = series.map((item) => ({
    x: xForDay(item.day),
    y: yForValue(item.burn),
  }));

  const xTicks = [1, 7, 14, 21, 28, 30]
    .map((day) => {
      const x = xForDay(day);
      return `
        <text class="chart-label" x="${x}" y="${height - 10}" text-anchor="middle">${day}</text>
      `;
    })
    .join("");

  const helperText = consumedDays
    ? `Consumed calories logged for ${consumedDays} day${consumedDays === 1 ? "" : "s"}.`
    : "Log consumed calories in Planner to add the orange bars.";

  return `
    <svg class="chart-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Energy chart for June 2026">
      ${gridLines}
      <line class="chart-axis" x1="${margin.left}" y1="${height - margin.bottom}" x2="${width - margin.right}" y2="${height - margin.bottom}"></line>
      <line class="chart-axis" x1="${margin.left}" y1="${margin.top}" x2="${margin.left}" y2="${height - margin.bottom}"></line>
      ${consumedBars}
      <path
        d="${buildLinePath(targetPoints)}"
        fill="none"
        stroke="rgba(159, 64, 32, 0.9)"
        stroke-width="3"
        stroke-dasharray="8 7"
      ></path>
      <path
        d="${buildLinePath(burnPoints)}"
        fill="none"
        stroke="rgba(30, 106, 94, 1)"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      ${burnPoints
        .map(
          (point) => `
            <circle cx="${point.x}" cy="${point.y}" r="3.5" fill="rgba(30, 106, 94, 1)"></circle>
          `,
        )
        .join("")}
      ${xTicks}
    </svg>
    <p class="burn-estimate">${helperText}</p>
  `;
}

function createMeasurementChartMarkup() {
  const series = buildMeasurementSeries();
  const weightPoints = series
    .filter((item) => item.weight !== null)
    .map((item) => ({ day: item.day, value: item.weight }));
  const waistPoints = series
    .filter((item) => item.waist !== null)
    .map((item) => ({ day: item.day, value: item.waist }));

  if (!weightPoints.length && !waistPoints.length) {
    return `
      <div class="chart-empty">
        Add Monday weight and waist measurements in the planner to populate this chart.
      </div>
    `;
  }

  const width = 1040;
  const height = 320;
  const margin = { top: 18, right: 56, bottom: 38, left: 56 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;

  const weightValues = weightPoints.map((point) => point.value);
  const waistValues = waistPoints.map((point) => point.value);

  const weightMin = weightValues.length
    ? Math.min(...weightValues) - 0.5
    : 56;
  const weightMax = weightValues.length
    ? Math.max(...weightValues) + 0.5
    : 60;
  const waistMin = waistValues.length ? Math.min(...waistValues) - 1 : 70;
  const waistMax = waistValues.length ? Math.max(...waistValues) + 1 : 90;

  const safeWeightMin =
    weightMax === weightMin ? weightMin - 1 : Math.max(0, weightMin);
  const safeWeightMax = weightMax === weightMin ? weightMax + 1 : weightMax;
  const safeWaistMin = waistMax === waistMin ? waistMin - 2 : Math.max(0, waistMin);
  const safeWaistMax = waistMax === waistMin ? waistMax + 2 : waistMax;

  const xForDay = (day) =>
    margin.left + ((day - 1) / (daysInMonth - 1)) * plotWidth;
  const yForWeight = (value) =>
    margin.top +
    plotHeight -
    ((value - safeWeightMin) / (safeWeightMax - safeWeightMin)) * plotHeight;
  const yForWaist = (value) =>
    margin.top +
    plotHeight -
    ((value - safeWaistMin) / (safeWaistMax - safeWaistMin)) * plotHeight;

  const gridLines = Array.from({ length: 5 }, (_, index) => {
    const ratio = index / 4;
    const y = margin.top + plotHeight * ratio;
    const weightValue =
      safeWeightMax - (safeWeightMax - safeWeightMin) * ratio;
    const waistValue =
      safeWaistMax - (safeWaistMax - safeWaistMin) * ratio;

    return `
      <line class="chart-grid-line" x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}"></line>
      <text class="chart-label" x="${margin.left - 10}" y="${y + 4}" text-anchor="end">${weightValue.toFixed(1)}</text>
      <text class="chart-label" x="${width - margin.right + 10}" y="${y + 4}" text-anchor="start">${waistValue.toFixed(1)}</text>
    `;
  }).join("");

  const weightPath = buildLinePath(
    weightPoints.map((point) => ({
      x: xForDay(point.day),
      y: yForWeight(point.value),
    })),
  );

  const waistPath = buildLinePath(
    waistPoints.map((point) => ({
      x: xForDay(point.day),
      y: yForWaist(point.value),
    })),
  );

  const mondayDays = Array.from({ length: daysInMonth }, (_, index) => index + 1).filter(
    (day) => getDateForDay(day).getDay() === 1,
  );

  const xTicks = mondayDays
    .map((day) => {
      const x = xForDay(day);
      return `
        <text class="chart-label" x="${x}" y="${height - 10}" text-anchor="middle">${shortDateFormatter.format(getDateForDay(day))}</text>
      `;
    })
    .join("");

  const helperText = `Weight uses the left axis and waist uses the right axis. Points appear when you log Monday check-ins.`;

  return `
    <svg class="chart-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Weight and waist trend chart for June 2026">
      ${gridLines}
      <line class="chart-axis" x1="${margin.left}" y1="${height - margin.bottom}" x2="${width - margin.right}" y2="${height - margin.bottom}"></line>
      <line class="chart-axis" x1="${margin.left}" y1="${margin.top}" x2="${margin.left}" y2="${height - margin.bottom}"></line>
      <line class="chart-axis" x1="${width - margin.right}" y1="${margin.top}" x2="${width - margin.right}" y2="${height - margin.bottom}"></line>
      ${weightPath
        ? `
          <path
            d="${weightPath}"
            fill="none"
            stroke="rgba(45, 95, 204, 1)"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        `
        : ""}
      ${waistPath
        ? `
          <path
            d="${waistPath}"
            fill="none"
            stroke="rgba(212, 95, 52, 0.95)"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        `
        : ""}
      ${weightPoints
        .map(
          (point) => `
            <circle
              cx="${xForDay(point.day)}"
              cy="${yForWeight(point.value)}"
              r="5"
              fill="rgba(45, 95, 204, 1)"
            ></circle>
          `,
        )
        .join("")}
      ${waistPoints
        .map(
          (point) => `
            <circle
              cx="${xForDay(point.day)}"
              cy="${yForWaist(point.value)}"
              r="5"
              fill="rgba(212, 95, 52, 0.95)"
            ></circle>
          `,
        )
        .join("")}
      ${xTicks}
    </svg>
    <p class="burn-estimate">${helperText}</p>
  `;
}

function renderReportSummary() {
  const energySeries = buildEnergySeries();
  const consumedValues = energySeries
    .map((item) => item.consumed)
    .filter((value) => value !== null);
  const averageConsumed = consumedValues.length
    ? consumedValues.reduce((sum, value) => sum + value, 0) / consumedValues.length
    : null;
  const totalPotentialBurn = energySeries.reduce(
    (sum, item) => sum + item.burn,
    0,
  );
  const latestDay = getLatestMeasurementDay();
  const latestWeight = getLatestMeasurement("weight");
  const latestWaist = getLatestMeasurement("waist");

  loggedIntakeDaysElement.textContent = `${consumedValues.length} / ${daysInMonth}`;
  averageConsumedCaloriesElement.textContent =
    averageConsumed === null ? "--" : formatKcal(averageConsumed);
  estimatedBurnTotalElement.textContent = formatKcal(totalPotentialBurn);

  if (!latestDay) {
    latestCheckinSummaryElement.textContent = "No data yet";
    return;
  }

  const parts = [];
  const latestDayWeight =
    latestWeight && latestWeight.day === latestDay ? latestWeight.value : null;
  const latestDayWaist =
    latestWaist && latestWaist.day === latestDay ? latestWaist.value : null;

  if (latestDayWeight !== null) {
    parts.push(formatMeasurement(latestDayWeight, measurementUnits.weight));
  }
  if (latestDayWaist !== null) {
    parts.push(formatMeasurement(latestDayWaist, measurementUnits.waist));
  }

  parts.push(shortDateFormatter.format(getDateForDay(latestDay)));
  latestCheckinSummaryElement.textContent = parts.join(" • ");
}

function renderReportInsights() {
  const energySeries = buildEnergySeries();
  const consumedValues = energySeries
    .map((item) => item.consumed)
    .filter((value) => value !== null);
  const targetValues = energySeries.map((item) => item.target);
  const averageTarget =
    targetValues.reduce((sum, value) => sum + value, 0) / targetValues.length;
  const averageConsumed = consumedValues.length
    ? consumedValues.reduce((sum, value) => sum + value, 0) / consumedValues.length
    : null;
  const totalPotentialBurn = energySeries.reduce(
    (sum, item) => sum + item.burn,
    0,
  );
  const biggestBurnDay = energySeries.reduce((largest, item) =>
    item.burn > largest.burn ? item : largest,
  );
  const latestWeight = getLatestMeasurement("weight");
  const latestWaist = getLatestMeasurement("waist");

  const insights = [];

  if (averageConsumed === null) {
    insights.push(
      "No daily intake is logged yet. Use the Consumed calories field in Planner to start filling the monthly report.",
    );
  } else {
    const delta = Math.round(averageConsumed - averageTarget);
    const direction = delta === 0 ? "on target" : delta > 0 ? `${delta} kcal above` : `${Math.abs(delta)} kcal below`;
    insights.push(
      `Average logged intake is ${formatKcal(averageConsumed)}, which is ${direction} the June average target of ${formatKcal(averageTarget)}.`,
    );
  }

  insights.push(
    `Potential burn across the full June plan is ${formatKcal(totalPotentialBurn)}. The biggest planned burn lands on ${shortDateFormatter.format(getDateForDay(biggestBurnDay.day))} at ${formatKcal(biggestBurnDay.burn)}.`,
  );

  if (latestWeight || latestWaist) {
    const latestParts = [];
    if (latestWeight) {
      latestParts.push(
        `weight ${formatMeasurement(latestWeight.value, measurementUnits.weight)}`,
      );
    }
    if (latestWaist) {
      latestParts.push(
        `waist ${formatMeasurement(latestWaist.value, measurementUnits.waist)}`,
      );
    }
    insights.push(
      `Latest Monday check-in: ${latestParts.join(", ")} on ${shortDateFormatter.format(getDateForDay(Math.max(latestWeight?.day ?? 0, latestWaist?.day ?? 0)))}.`,
    );
  } else {
    insights.push(
      "Weight and waist trend lines will appear after you log Monday check-ins in the planner view.",
    );
  }

  insights.push(
    `Burn estimates are based on planned session type and your June start weight of ${startingWeightKg} kg, so they are directional rather than device-accurate.`,
  );

  reportInsightsElement.innerHTML = insights
    .map((insight) => `<li>${escapeHtml(insight)}</li>`)
    .join("");
}

function renderWeeklyReportTable() {
  weeklyReportBodyElement.innerHTML = calendarWeeks
    .map((week, index) => {
      const days = week.filter((day) => day !== null);
      const averageConsumedValues = days
        .map((day) => getNumericValue(getEntry(day).consumedCalories))
        .filter((value) => value !== null);
      const averageConsumed = averageConsumedValues.length
        ? formatKcal(
            averageConsumedValues.reduce((sum, value) => sum + value, 0) /
              averageConsumedValues.length,
          )
        : "--";
      const weekBurn = formatKcal(
        days.reduce((sum, day) => sum + getPotentialBurn(day), 0),
      );
      const mondayDay = week[0];
      const mondayEntry = mondayDay ? getEntry(mondayDay) : null;
      const mondayWeight = mondayEntry
        ? formatMeasurement(
            getNumericValue(mondayEntry.weight),
            measurementUnits.weight,
          )
        : "--";
      const mondayWaist = mondayEntry
        ? formatMeasurement(
            getNumericValue(mondayEntry.waist),
            measurementUnits.waist,
          )
        : "--";

      return `
        <tr>
          <td>Week ${index + 1}</td>
          <td>${escapeHtml(formatDayRange(days[0], days[days.length - 1]))}</td>
          <td>${escapeHtml(averageConsumed)}</td>
          <td>${escapeHtml(weekBurn)}</td>
          <td>${escapeHtml(mondayWeight)}</td>
          <td>${escapeHtml(mondayWaist)}</td>
        </tr>
      `;
    })
    .join("");
}

function renderReport() {
  renderReportSummary();
  energyChartElement.innerHTML = createEnergyChartMarkup();
  measurementChartElement.innerHTML = createMeasurementChartMarkup();
  renderReportInsights();
  renderWeeklyReportTable();
}

function renderWorkspaceTabs() {
  plannerWorkspaceElement.hidden = uiState.section !== "planner";
  reportWorkspaceElement.hidden = uiState.section !== "report";

  workspaceButtons.forEach((button) => {
    const isActive = button.dataset.section === uiState.section;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function setWorkspaceSection(section) {
  if (!["planner", "report"].includes(section)) {
    return;
  }

  uiState.section = section;
  renderWorkspaceTabs();

  if (section === "report") {
    renderReport();
  }
}

function updateSummary() {
  const allPlans = Object.values(dailyPlan);
  const allEntries = Object.values(calendarData);
  const totalRuns = allPlans.filter(
    (plan) => plan.category === "run" || plan.category === "long-run",
  ).length;
  const gymSessions = allPlans.filter((plan) => plan.category === "gym").length;
  const totalLongRuns = allPlans.filter(
    (plan) => plan.category === "long-run",
  ).length;
  const completedDays = allEntries.filter((entry) => entry.completed).length;

  const mondayCheckins = Array.from({ length: daysInMonth }, (_, index) => index + 1)
    .filter((day) => getDateForDay(day).getDay() === 1)
    .filter((day) => {
      const entry = getEntry(day);
      return getNumericValue(entry.weight) !== null || getNumericValue(entry.waist) !== null;
    }).length;

  const consumedValues = allEntries
    .map((entry) => getNumericValue(entry.consumedCalories))
    .filter((value) => value !== null);

  const averageConsumed = consumedValues.length
    ? Math.round(
        consumedValues.reduce((sum, value) => sum + value, 0) /
          consumedValues.length,
      )
    : null;

  plannedRunsElement.textContent = `${totalRuns}`;
  plannedGymSessionsElement.textContent = `${gymSessions}`;
  longRunsElement.textContent = `${totalLongRuns}`;
  completedDaysElement.textContent = `${completedDays} / ${daysInMonth}`;
  mondayCheckinsElement.textContent = `${mondayCheckins} / ${countMondaysInMonth()}`;
  averageCaloriesElement.textContent = averageConsumed === null ? "--" : `${averageConsumed}`;
}

function syncInitialStatus() {
  if (appliedBaselineCheckin) {
    saveStatusElement.textContent =
      "June 1 check-in saved and loaded from this browser.";
    return;
  }

  saveStatusElement.textContent = hasStoredData
    ? "Saved June updates loaded from this browser."
    : "Original June plan loaded.";
}

function updateEntry(day, field, value) {
  getEntry(day)[field] = value;
  persistData(field === "completed" ? "Session status saved" : "Progress saved");
}

function setCalendarView(view) {
  if (!["month", "week", "day"].includes(view)) {
    return;
  }

  calendarState.view = view;
  renderCalendarSection();
}

function movePeriod(step) {
  if (calendarState.view === "month") {
    return;
  }

  if (calendarState.view === "week") {
    const nextWeekIndex = calendarState.selectedWeekIndex + step;

    if (nextWeekIndex < 0 || nextWeekIndex >= calendarWeeks.length) {
      return;
    }

    const currentWeek = calendarWeeks[calendarState.selectedWeekIndex];
    const selectedSlot = currentWeek.indexOf(calendarState.selectedDay);
    const nextWeek = calendarWeeks[nextWeekIndex];
    const fallbackDay = nextWeek.find((day) => day !== null);
    const mirroredDay = selectedSlot >= 0 ? nextWeek[selectedSlot] : null;

    calendarState.selectedWeekIndex = nextWeekIndex;
    calendarState.selectedDay = mirroredDay ?? fallbackDay ?? calendarState.selectedDay;
    renderCalendarSection();
    return;
  }

  syncSelectionFromDay(calendarState.selectedDay + step);
  renderCalendarSection();
}

function clearAllData() {
  const confirmed = window.confirm(
    `Reset all saved June progress, consumed calories, Monday check-ins, and calorie edits for ${monthConfig.monthName} ${monthConfig.year}?`,
  );

  if (!confirmed) {
    return;
  }

  window.clearTimeout(saveTimer);
  calendarData = normalizeData({});
  hasStoredData = false;
  window.localStorage.removeItem(monthConfig.storageKey);
  syncSelectionFromDay(calendarState.selectedDay);
  renderCalendarSection();
  updateSummary();
  renderReport();
  syncInitialStatus();
}

function handleCalendarInput(event) {
  const target = event.target;

  if (!(target instanceof HTMLInputElement) || target.type === "checkbox") {
    return;
  }

  const day = Number(target.dataset.day);
  const { field } = target.dataset;

  if (!day || !field) {
    return;
  }

  syncSelectionFromDay(day);
  updateEntry(day, field, target.value);
  updateDayProgressUI(day);
}

function handleCalendarChange(event) {
  const target = event.target;

  if (!(target instanceof HTMLInputElement) || target.type !== "checkbox") {
    return;
  }

  const day = Number(target.dataset.day);
  const { field } = target.dataset;

  if (!day || !field) {
    return;
  }

  syncSelectionFromDay(day);
  updateEntry(day, field, target.checked);
  updateDayProgressUI(day);
}

function toggleMonthDetail(day) {
  syncSelectionFromDay(day);
  renderCalendarSection();
}

function handleCalendarClick(event) {
  const target = event.target;

  if (!(target instanceof HTMLElement)) {
    return;
  }

  const dayTrigger = target.closest("[data-day-trigger]");

  if (dayTrigger instanceof HTMLElement && dayTrigger.dataset.dayTrigger) {
    toggleMonthDetail(Number(dayTrigger.dataset.dayTrigger));
    return;
  }

  if (target.closest(".detail-day-card")) {
    return;
  }

  if (target.closest("input, label, summary, button")) {
    return;
  }

  const card = target.closest(".day-card");

  if (!card?.dataset.day) {
    return;
  }

  syncSelectionFromDay(Number(card.dataset.day));

  if (calendarState.view !== "day") {
    renderCalendarSection();
  }
}

[calendarGrid, monthDetailPanel].forEach((element) => {
  element.addEventListener("input", handleCalendarInput);
  element.addEventListener("change", handleCalendarChange);
  element.addEventListener("click", handleCalendarClick);
});

workspaceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const { section } = button.dataset;
    if (!section) {
      return;
    }

    setWorkspaceSection(section);
  });
});

viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const { view } = button.dataset;
    if (!view) {
      return;
    }

    setCalendarView(view);
  });
});

previousPeriodButton.addEventListener("click", () => {
  movePeriod(-1);
});

nextPeriodButton.addEventListener("click", () => {
  movePeriod(1);
});

todayButton.addEventListener("click", () => {
  if (todayInMonth === null) {
    return;
  }

  syncSelectionFromDay(todayInMonth);
  renderCalendarSection();
});

clearDataButton.addEventListener("click", clearAllData);

renderOverview();
renderCalendarSection();
updateSummary();
renderReport();
renderWorkspaceTabs();
syncInitialStatus();
