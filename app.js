const sports = {
  soccer: {
    label: "Football / soccer",
    risks: ["knee", "ankle", "hamstring", "hip"],
    profile: "cutting, sprinting, boot fit, landing, hamstring load, and hip/groin control",
    evidence: [
      ["ACL and knee", "Female footballers can face higher ACL risk, especially with cutting, pivoting, deceleration, and landing."],
      ["Boot and foot fit", "Football boots have often been built around male lasts, so ankle stability, lockdown, and foot comfort matter."],
      ["Prevention focus", "Neuromuscular warm-ups, hamstrings, glutes, calves, hip control, and landing mechanics are priority work."]
    ],
    exercises: {
      all: ["Dynamic warm-up with cutting prep", "Single-leg RDL", "Nordic hamstring lower", "Lateral bound and stick"],
      knee: ["Drop landing with knees over toes", "Single-leg squat to box", "Nordic hamstring lower"],
      ankle: ["Single-leg balance reach", "Calf raise tempo set", "Lateral hop and stick"],
      hamstring: ["Nordic hamstring lower", "Hamstring bridge walkout", "Hip hinge patterning"],
      hip: ["Copenhagen side plank", "Banded lateral walk", "Lateral lunge"]
    }
  },
  camogie: {
    label: "Camogie / Gaelic football",
    risks: ["knee", "ankle", "hamstring", "shoulder", "wrist"],
    profile: "stick handling, cutting, sprinting, aerial contests, shoulder rotation, and wrist/hand impact",
    evidence: [
      ["Stick sports", "Camogie and Gaelic football need wrist/hand, shoulder, ankle, hamstring, and ACL prevention together."],
      ["Equipment gap", "Many sticks, boots, and protective systems have not historically been designed around female athletes."],
      ["Prevention focus", "Landing mechanics, glute and hamstring strength, rotator cuff work, grip strength, and ankle balance all matter."]
    ],
    exercises: {
      all: ["Camogie warm-up with stick reach", "Nordic hamstring lower", "Rotator cuff external rotation", "Grip endurance ladder"],
      knee: ["Drop landing with knees over toes", "Single-leg squat to box", "Nordic hamstring lower"],
      ankle: ["Single-leg balance with stick reach", "Calf raise tempo set", "Lateral hop and stick"],
      hamstring: ["Hamstring bridge walkout", "Nordic hamstring lower", "Sprint build-up mechanics"],
      shoulder: ["Rotator cuff external rotation", "Scapular wall slide", "Serratus punch"],
      wrist: ["Forearm pronation/supination", "Wrist extension eccentrics", "Grip endurance ladder"]
    }
  },
  fieldHockey: {
    label: "Field hockey",
    risks: ["wrist", "ankle", "knee", "back", "hip"],
    profile: "stick control, trunk flexion, wrist/hand load, ankle changes of direction, and hip/back endurance",
    evidence: [
      ["Low playing posture", "Field hockey loads the lower back and hips through repeated flexed trunk positions."],
      ["Wrist and hand", "Stick control and contact make grip strength, forearm conditioning, and wrist tolerance important."],
      ["Prevention focus", "Blend ankle balance, knee control, hip strength, trunk endurance, and shoulder/wrist conditioning."]
    ],
    exercises: {
      all: ["Dynamic hockey mobility", "Wrist extension eccentrics", "Lateral lunge", "Pallof press"],
      wrist: ["Grip endurance holds", "Wrist extension eccentrics", "Pronation/supination control"],
      ankle: ["Single-leg balance reach", "Calf raise", "Lateral hop stick"],
      knee: ["Split squat", "Step-down control", "Hamstring slider"],
      back: ["Hip hinge endurance", "Pallof press", "Thoracic rotation"],
      hip: ["Copenhagen plank", "Banded lateral walk", "Lateral lunge"]
    }
  },
  basketball: {
    label: "Basketball",
    risks: ["ankle", "knee", "fingers", "neck-shoulder", "landing"],
    profile: "jump landings, pivots, ankle sprains, fingers, neck/shoulder contact, and landing mechanics",
    evidence: [
      ["Landing mechanics", "Repeated jump landings and pivots make ankle and knee control central for female basketball players."],
      ["ACL risk", "Female athletes can be more vulnerable to knee injuries when fatigue changes alignment and control."],
      ["Prevention focus", "Train landing stiffness, ankle proprioception, hip control, fingers, and shoulder/neck resilience."]
    ],
    exercises: {
      all: ["Landing mechanics series", "Pogo progression", "Glute med wall press", "Finger extension band work"],
      ankle: ["Pogo progression", "Lateral ankle stiffness hops", "Balance reach"],
      knee: ["Landing mechanics series", "Spanish squat hold", "Single-leg deceleration"],
      fingers: ["Finger extension band openers", "Grip catches", "Wrist flexor eccentrics"],
      "neck-shoulder": ["Neck isometrics", "Trap-3 raise", "Push-up plus"],
      landing: ["Snap-down to stick", "Lateral bound and stick", "Depth drop control"]
    }
  },
  rugby: {
    label: "Rugby",
    risks: ["shoulder", "concussion", "ankle", "knee", "neck"],
    profile: "contact, tackle entry, shoulder load, concussion awareness, neck strength, and lower-limb control",
    evidence: [
      ["Contact demands", "Rugby needs shoulder, neck, ankle, and knee resilience because contact and deceleration stack together."],
      ["Concussion awareness", "Head injury symptoms need medical support. Neck strength can support contact preparation but cannot prevent all concussion risk."],
      ["Prevention focus", "Use neck isometrics, shoulder stability, landing control, ankle proprioception, and safe contact mechanics."]
    ],
    exercises: {
      all: ["Contact-ready warm-up", "Four-way neck isometrics", "Rotator cuff circuit", "Lateral bound to stick"],
      shoulder: ["Rotator cuff circuit", "Scapular push-up", "Half-kneeling press"],
      concussion: ["Four-way neck isometrics", "Upper-trap carry", "Deceleration brace drill"],
      ankle: ["Soleus raise", "Hop and stick", "Single-leg balance"],
      knee: ["Nordic hamstring lower", "Lateral bound to stick", "Split squat"],
      neck: ["Neck flexion isometrics", "Loaded carry", "Posture brace holds"]
    }
  },
  running: {
    label: "Running / athletics",
    risks: ["shin", "hip", "knee", "ankle", "foot"],
    profile: "repetitive load, shin splints, foot tolerance, calf capacity, hip control, and energy availability",
    evidence: [
      ["Load management", "Running injuries often build from repetitive load, recovery gaps, footwear, and rapid training spikes."],
      ["Female physiology", "Low energy availability and menstrual disruption can affect bone health and stress-fracture risk."],
      ["Prevention focus", "Build calf, foot, hip, and trunk capacity with gradual progression and recovery tracking."]
    ],
    exercises: {
      all: ["Run prep mobility", "Soleus raise", "Step-down control", "Foot intrinsic work"],
      shin: ["Tibialis raise", "Calf raise tempo set", "Impact tolerance pogos"],
      hip: ["Step-down control", "Side plank abduction", "Single-leg RDL"],
      knee: ["Spanish squat", "Hamstring bridge", "Landing control"],
      ankle: ["Soleus raise", "Pogo progression", "Single-leg balance reach"],
      foot: ["Foot intrinsic doming", "Calf raise", "Toe yoga"]
    }
  },
  golf: {
    label: "Golf",
    risks: ["back", "shoulder", "wrist", "elbow", "hip"],
    profile: "rotational power, lower-back control, shoulder mobility, wrist/elbow load, hip rotation, walking volume, and swing repeatability",
    evidence: [
      ["Rotational load", "Golf repeatedly loads the lower back, hips, shoulders, wrists, and elbows through swing rotation and practice volume."],
      ["Female equipment fit", "Golf is one sport where women's flex shafts and fitting options are more common, but strength and mobility still protect swing mechanics."],
      ["Prevention focus", "Train trunk control, hip rotation, rotator cuff endurance, wrist/forearm strength, and progressive practice load."]
    ],
    exercises: {
      all: ["Golf mobility warm-up", "Pallof press", "Hip airplane support", "Band external rotation"],
      back: ["Pallof press", "Thoracic rotation", "Hip hinge patterning"],
      shoulder: ["Rotator cuff external rotation", "Scapular row", "Serratus wall slide"],
      wrist: ["Wrist extension eccentrics", "Grip endurance holds", "Forearm pronation/supination"],
      elbow: ["Eccentric wrist extension", "Forearm pronation/supination", "Grip endurance"],
      hip: ["Hip airplane support", "Lateral lunge", "Glute bridge march"]
    }
  },
  swimming: {
    label: "Swimming",
    risks: ["shoulder", "rotator-cuff", "neck", "back"],
    profile: "high shoulder volume, rotator cuff endurance, neck rotation, and lower-back extension load",
    evidence: [
      ["Shoulder volume", "Swimmers repeat thousands of overhead actions, making rotator cuff endurance and scapular control important."],
      ["Neck and back", "Breathing patterns and extension positions can load the neck and lower back."],
      ["Prevention focus", "Use shoulder control, cuff strength, thoracic mobility, neck endurance, and trunk work."]
    ],
    exercises: {
      all: ["Shoulder activation", "Band external rotation", "Thoracic rotation", "Dead bug"],
      shoulder: ["Scapular wall slide", "Serratus punch", "Band row"],
      "rotator-cuff": ["Band external rotation", "Side-lying cuff raise", "Face pull"],
      neck: ["Neck isometric holds", "Prone cobra", "Breathing posture reset"],
      back: ["Dead bug", "Pallof press", "Thoracic extension"]
    }
  },
  tennis: {
    label: "Tennis",
    risks: ["shoulder", "elbow", "wrist", "ankle", "back"],
    profile: "serving, rotation, wrist/elbow load, ankle changes of direction, and lower-back rotation",
    evidence: [
      ["Repeated hitting", "Tennis loads shoulder, elbow, wrist, and trunk rotation repeatedly across training weeks."],
      ["Change of direction", "Ankle and knee control still matter because split steps and lateral moves happen constantly."],
      ["Prevention focus", "Train cuff control, forearm strength, trunk rotation, ankle balance, and progressive hitting volume."]
    ],
    exercises: {
      all: ["Tennis movement warm-up", "Band external rotation", "Forearm pronation/supination", "Lateral hop and stick"],
      shoulder: ["Rotator cuff external rotation", "Scapular row", "Overhead carry"],
      elbow: ["Eccentric wrist extension", "Forearm pronation/supination", "Grip endurance"],
      wrist: ["Wrist extension eccentrics", "Grip endurance holds", "Forearm rotation"],
      ankle: ["Balance reach", "Calf raise", "Lateral hop stick"],
      back: ["Pallof press", "Thoracic rotation", "Hip hinge"]
    }
  },
  gymnastics: {
    label: "Gymnastics",
    risks: ["wrist", "ankle", "knee", "back", "shoulder"],
    profile: "wrist loading, landings, hyperextension stress, shoulder control, and ankle stiffness",
    evidence: [
      ["Landing and impact", "Gymnastics stacks high landing forces, wrist loading, and back extension demands."],
      ["Female athlete relevance", "Strength, recovery, and menstrual health signals matter because bone and energy availability are key in high-skill sports."],
      ["Prevention focus", "Train wrists, ankles, knees, shoulders, trunk stability, and progressive impact tolerance."]
    ],
    exercises: {
      all: ["Wrist prep", "Landing mechanics series", "Dead bug", "Scapular push-up"],
      wrist: ["Quadruped wrist rocks", "Wrist extension eccentrics", "Grip endurance"],
      ankle: ["Pogo progression", "Calf raise", "Balance reach"],
      knee: ["Landing mechanics series", "Single-leg squat to box", "Hamstring slider"],
      back: ["Dead bug", "Pallof press", "Hip hinge patterning"],
      shoulder: ["Scapular push-up", "Serratus wall slide", "Band external rotation"]
    }
  },
  volleyball: {
    label: "Volleyball",
    risks: ["ankle", "knee", "shoulder", "fingers", "back"],
    profile: "jump landings, blocking, serving, finger contact, shoulder volume, and lower-back extension",
    evidence: [
      ["Jump and land", "Volleyball asks athletes to land and re-jump often, increasing ankle and knee prevention needs."],
      ["Shoulder and fingers", "Serving, hitting, blocking, and ball contact add shoulder and finger demands."],
      ["Prevention focus", "Use ankle proprioception, landing mechanics, cuff control, finger strength, and trunk stability."]
    ],
    exercises: {
      all: ["Jump landing series", "Pogo progression", "Rotator cuff circuit", "Finger extension band work"],
      ankle: ["Pogo progression", "Lateral hop stick", "Calf raise"],
      knee: ["Jump landing series", "Single-leg squat to box", "Nordic hamstring lower"],
      shoulder: ["Rotator cuff circuit", "Scapular wall slide", "Overhead carry"],
      fingers: ["Finger extension band openers", "Grip catches", "Wrist flexor eccentrics"],
      back: ["Dead bug", "Pallof press", "Thoracic extension"]
    }
  }
};

const bodyParts = {
  all: "All Over / Prevention",
  knee: "Knee / ACL",
  ankle: "Ankle",
  hamstring: "Hamstring",
  hip: "Hip / groin",
  shoulder: "Shoulder",
  wrist: "Wrist / hand",
  back: "Lower back",
  neck: "Neck",
  concussion: "Concussion awareness",
  shin: "Shin splints",
  foot: "Foot",
  fingers: "Fingers",
  landing: "Landing mechanics",
  "neck-shoulder": "Neck / shoulder",
  "rotator-cuff": "Rotator cuff",
  elbow: "Elbow"
};

const phaseAdvice = {
  menstrual: "Lower intensity, mobility, gentle strength, recovery, and symptom-aware training.",
  follicular: "Progressive strength, speed, power, and skill work when energy is good.",
  ovulation: "High-performance work if the athlete feels good, with extra focus on landing mechanics, coordination, warm-ups, and control.",
  luteal: "Adjust load based on symptoms, focus on technique, stability, hydration, recovery, and injury prevention."
};

const checklistItems = [
  "Completed warm-up",
  "Completed prehab",
  "Logged training",
  "Logged food",
  "Drank enough water",
  "Logged sleep",
  "Logged cycle symptoms",
  "Completed recovery/mobility",
  "Checked soreness or pain",
  "Reflected on energy/mood"
];

const sportSelect = document.querySelector("#sportSelect");
const bodyPartSelect = document.querySelector("#bodyPartSelect");
const phaseSelect = document.querySelector("#phaseSelect");
const programType = document.querySelector("#programType");
const programTitle = document.querySelector("#programTitle");
const programSummary = document.querySelector("#programSummary");
const injuryProfile = document.querySelector("#injuryProfile");
const programBlocks = document.querySelector("#programBlocks");
const progressionText = document.querySelector("#progressionText");
const generatorNotes = document.querySelector("#generatorNotes");
const researchSportSelect = document.querySelector("#researchSportSelect");
const researchBodySelect = document.querySelector("#researchBodySelect");
const researchNotes = document.querySelector("#researchNotes");
const researchSportLabel = document.querySelector("#researchSportLabel");
const researchBodyLabel = document.querySelector("#researchBodyLabel");
const mealSportSelect = document.querySelector("#mealSportSelect");
const mealForm = document.querySelector("#mealForm");
const mealTitle = document.querySelector("#mealTitle");
const mealPlan = document.querySelector("#mealPlan");
const cycleForm = document.querySelector("#cycleForm");
const trackingForm = document.querySelector("#trackingForm");
const viewLinks = document.querySelectorAll("[data-view-link]");
const viewPanels = document.querySelectorAll("[data-view]");

function option(value, text) {
  const item = document.createElement("option");
  item.value = value;
  item.textContent = text;
  return item;
}

function fillSportSelect(select) {
  Object.entries(sports).forEach(([value, sport]) => select.append(option(value, sport.label)));
}

function allowedBodyParts(sportKey) {
  const keys = ["all", ...sports[sportKey].risks];
  return keys.filter((value, index) => keys.indexOf(value) === index);
}

function fillBodySelect(select, sportKey, selected = "all") {
  select.innerHTML = "";
  allowedBodyParts(sportKey).forEach((value) => select.append(option(value, bodyParts[value] || value)));
  select.value = allowedBodyParts(sportKey).includes(selected) ? selected : "all";
}

fillSportSelect(sportSelect);
fillSportSelect(researchSportSelect);
fillSportSelect(mealSportSelect);
sportSelect.value = "camogie";
researchSportSelect.value = "camogie";
mealSportSelect.value = "camogie";
fillBodySelect(bodyPartSelect, sportSelect.value, "all");
fillBodySelect(researchBodySelect, researchSportSelect.value, "all");

function selectedGoal() {
  return document.querySelector("input[name='goal']:checked")?.value || "prevent";
}

function renderNotes(container, sportKey, bodyPart) {
  const sport = sports[sportKey];
  const bodyLabel = bodyParts[bodyPart] || "sport-specific prevention";
  const bodyNote = bodyPart === "all"
    ? `All-over prevention prioritises this sport's common female-athlete risk areas: ${sport.risks.map((risk) => bodyParts[risk]).join(", ")}.`
    : `${bodyLabel} work is selected because it links to ${sport.label}'s movement and equipment demands.`;

  const notes = [
    ...sport.evidence,
    ["Body focus", bodyNote],
    ["Cycle-aware support", "CIARA adjusts exercise intensity across the month. These are supportive suggestions, not medical predictions."]
  ];

  container.innerHTML = notes.map(([title, text]) => `
    <article>
      <strong>${title}</strong>
      <p>${text}</p>
    </article>
  `).join("");
}

function syncResearchLabels() {
  researchSportLabel.textContent = sports[researchSportSelect.value].label;
  researchBodyLabel.textContent = bodyParts[researchBodySelect.value];
}

function generateProgram() {
  const sportKey = sportSelect.value;
  const bodyPart = bodyPartSelect.value;
  const goal = selectedGoal();
  const phase = phaseSelect.value;
  const sport = sports[sportKey];
  const pool = sport.exercises[bodyPart] || sport.exercises.all;
  const goalLabel = goal === "prevent" ? "Strength and Conditioning" : "RECOVER";
  const goalTitle = goal === "prevent" ? "strength and conditioning" : "recover";
  const bodyLabel = bodyParts[bodyPart];
  const intent = goal === "prevent"
    ? "maintain strength, conditioning, and movement quality for this athlete"
    : "rebuild safely with progressive rehab stages and pain-aware load";

  programType.textContent = goalLabel;
  programTitle.textContent = `${sport.label}: ${bodyLabel} ${goalTitle} plan`;
  programSummary.textContent = `Built for ${sport.profile}. This session uses ${intent}. ${phaseAdvice[phase]} Personalize with a coach or clinician where needed.`;
  injuryProfile.textContent = `Common female-athlete risk areas for this sport: ${sport.risks.map((risk) => bodyParts[risk]).join(", ")}.`;
  renderNotes(generatorNotes, sportKey, bodyPart);

  const blocks = goal === "prevent"
    ? [
        ["Warm-up", "3 min", "Raise temperature, mobilise, and rehearse the sport movement pattern."],
        ["Strength", "7 min", `${pool[0]} + ${pool[1] || pool[0]}`],
        ["Control", "5 min", pool[2] || "Balance reach with slow return"],
        ["Sport cue", "3 min", pool[3] || "Finish with the cleanest version of the movement you need in-game."]
      ]
    : [
        ["Stage 1", "Pain check", "Stop or modify painful activity. Track swelling, pain, and next-day response."],
        ["Stage 2", "Mobility", `Gentle range work plus ${pool[0]}. Keep symptoms calm.`],
        ["Stage 3", "Strength", `${pool[1] || pool[0]} with slow tempo. Progress only when tolerated.`],
        ["Stage 4", "Return", `${pool[2] || "sport-specific control drill"} before full training exposure.`]
      ];

  programBlocks.innerHTML = blocks.map(([label, time, detail]) => `
    <div class="programme-item">
      <strong>${label}<br>${time}</strong>
      <p>${detail}</p>
    </div>
  `).join("");

  progressionText.textContent = goal === "prevent"
    ? "Add reps, range, speed, or sport complexity only when form stays controlled. Keep the dose short: 15-20 minutes, 2-3 times per week."
    : "Move stages only when pain is stable, swelling is not increasing, and sport-specific skills feel controlled. Serious or worsening symptoms need medical help.";
}

function updateResearch() {
  syncResearchLabels();
  renderNotes(researchNotes, researchSportSelect.value, researchBodySelect.value);
}

function syncResearchToGenerator() {
  sportSelect.value = researchSportSelect.value;
  fillBodySelect(bodyPartSelect, sportSelect.value, researchBodySelect.value);
  generateProgram();
}

function updateCycle() {
  const energy = Number(document.querySelector("#energyLevel").value);
  const cramps = Number(document.querySelector("#crampsLevel").value);
  const soreness = Number(document.querySelector("#cycleSoreness").value);
  const sleep = document.querySelector("#cycleSleep").value;
  const phase = document.querySelector("#cyclePhaseInput").value;
  const loggedReadiness = document.querySelector("#trainingReadiness").value;
  const readiness = Math.max(20, Math.min(100, 55 + energy * 4 - cramps * 2 - soreness * 2 - (sleep === "Poor" ? 12 : sleep === "Okay" ? 4 : 0)));

  document.querySelector("#cyclePhaseLabel").textContent = `${phase[0].toUpperCase()}${phase.slice(1)} phase`;
  document.querySelector("#readinessLabel").textContent = `Readiness: ${readiness >= 75 ? "strong" : readiness >= 55 ? "steady" : "protect recovery"}`;
  document.querySelector("#cycleAdvice").textContent = phaseAdvice[phase];
  document.querySelector("#phaseNotes").innerHTML = [
    ["Training readiness", `Current readiness estimate is ${readiness}%. Use it as a supportive signal, not a diagnosis.`],
    ["Logged readiness", `${loggedReadiness}. Use this alongside energy, cramps, soreness, mood, and sleep before choosing intensity.`],
    ["Symptoms", `${document.querySelector("#cycleSymptoms").value}; mood is ${document.querySelector("#moodSelect").value.toLowerCase()}. Adjust warm-up, hydration, and recovery around how the athlete feels.`],
    ["Safety", "Severe, unusual, or worsening symptoms should be discussed with a qualified professional."]
  ].map(([title, text]) => `<article><strong>${title}</strong><p>${text}</p></article>`).join("");
}

function updateMealPlan() {
  const sport = sports[mealSportSelect.value].label;
  const activity = document.querySelector("#activityLevel").value;
  const day = document.querySelector("#dayType").value;
  const phase = document.querySelector("#mealPhase").value;
  mealTitle.textContent = `${sport}: ${day.toLowerCase()} in ${phase.toLowerCase()} phase`;

  const carb = day === "Training day" ? "oats, wholegrain toast, rice, pasta, potatoes, or wraps" : "wholegrain bread, potatoes, rice, or oats in a lighter portion";
  const hydration = activity.includes("Match") || activity === "High" ? "water across the day plus extra fluids around training" : "steady water intake across the day";
  const iron = phase === "Menstrual" ? "iron-rich foods such as lean meat, eggs, beans, lentils, spinach, or fortified cereals" : "regular iron-rich foods across the week";

  mealPlan.innerHTML = [
    ["Breakfast", `${carb} with yoghurt or milk, fruit, and a protein source.`],
    ["Lunch", `A balanced plate: carbohydrate for energy, protein for repair, colourful vegetables, and ${iron}.`],
    ["Snack", "Fruit with yoghurt, cheese and crackers, peanut butter toast, or a smoothie with milk/yoghurt."],
    ["Dinner", "Protein, carbohydrates, vegetables, and calcium/vitamin D sources such as milk, yoghurt, fortified alternatives, eggs, or oily fish where suitable."],
    ["Hydration", `${hydration}. Include electrolytes only where training load, heat, or sweat losses justify it.`]
  ].map(([label, detail]) => `<div class="programme-item"><strong>${label}</strong><p>${detail}</p></div>`).join("");
}

function buildChecklist() {
  const checklist = document.querySelector("#dailyChecklist");
  checklist.innerHTML = checklistItems.map((item, index) => `
    <label class="check-item">
      <input type="checkbox" ${index < 3 ? "checked" : ""} />
      <span>${item}</span>
    </label>
  `).join("");
  checklist.addEventListener("change", updateChecklist);
  updateChecklist();
}

function updateChecklist() {
  const boxes = [...document.querySelectorAll("#dailyChecklist input")];
  const done = boxes.filter((box) => box.checked).length;
  const percent = Math.round((done / boxes.length) * 100);
  document.querySelector("#checkPercent").textContent = `${percent}%`;
  document.querySelector("#checkBar").style.width = `${percent}%`;
}

function updateTracking() {
  const values = {
    exercises: Number(document.querySelector("#trackExercises").value),
    food: Number(document.querySelector("#trackFood").value),
    hydration: Number(document.querySelector("#trackHydration").value),
    sleep: Number(document.querySelector("#trackSleep").value),
    cycle: Number(document.querySelector("#trackCycle").value),
    soreness: Number(document.querySelector("#trackSoreness").value),
    mood: Number(document.querySelector("#trackMood").value),
    energy: Number(document.querySelector("#trackEnergy").value),
    load: Number(document.querySelector("#trackLoad").value)
  };
  const readiness = Math.round((values.exercises + values.food + values.hydration + values.sleep + values.mood + values.energy + (10 - values.soreness)) / 70 * 100);
  document.querySelector("#readinessScore").textContent = `${readiness}%`;
  document.querySelector("#readinessBar").style.width = `${readiness}%`;
  const recovery = Math.round((values.sleep + values.hydration + (10 - values.soreness) + (10 - values.cycle)) / 40 * 100);
  document.querySelector("#recoveryScore").textContent = recovery >= 75 ? "Strong" : recovery >= 55 ? "Good" : "Needs care";
  document.querySelector("#recoveryBar").style.width = `${recovery}%`;

  const feedback = [];
  if (values.hydration < 7) feedback.push("Hydration may need attention before high-intensity or luteal-phase sessions.");
  if (values.sleep < 7) feedback.push("Prioritise sleep to improve recovery, reaction time, and training quality.");
  if (values.soreness > 5) feedback.push("Add more recovery or reduce impact until soreness settles.");
  if (values.exercises < 7) feedback.push("Increase warm-up and prehab consistency for better sport-specific protection.");
  if (values.food < 7) feedback.push("Use balanced meals with carbohydrates, protein, fruit/veg, iron, calcium/vitamin D, and fluids.");
  if (values.load > 8 && recovery < 65) feedback.push("Training load is high compared with recovery; consider a technique or mobility-focused day.");
  if (!feedback.length) feedback.push("Strong foundation: keep sessions consistent and progress only when movement quality stays controlled.");
  document.querySelector("#performanceFeedback").innerHTML = feedback.map((text) => `<span>${text}</span>`).join("");
}

function setActiveView(view) {
  viewPanels.forEach((panel) => panel.classList.toggle("active", panel.dataset.view === view));
  viewLinks.forEach((link) => link.classList.toggle("active", link.dataset.viewLink === view));
  window.history.replaceState(null, "", `#${view}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

sportSelect.addEventListener("change", () => {
  fillBodySelect(bodyPartSelect, sportSelect.value, bodyPartSelect.value);
  generateProgram();
});
bodyPartSelect.addEventListener("change", generateProgram);
phaseSelect.addEventListener("change", () => {
  generateProgram();
  updateCycle();
});
document.querySelector("#programForm").addEventListener("change", generateProgram);

researchSportSelect.addEventListener("change", () => {
  fillBodySelect(researchBodySelect, researchSportSelect.value, researchBodySelect.value);
  updateResearch();
});
researchBodySelect.addEventListener("change", updateResearch);

mealForm.addEventListener("change", updateMealPlan);
cycleForm.addEventListener("change", updateCycle);
trackingForm.addEventListener("change", updateTracking);

viewLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    if (link.dataset.viewLink === "generate" && link.closest("#research")) {
      syncResearchToGenerator();
    }
    setActiveView(link.dataset.viewLink);
  });
});

const initialView = window.location.hash.replace("#", "");
if (initialView && document.querySelector(`[data-view="${initialView}"]`)) {
  setActiveView(initialView);
}

window.addEventListener("hashchange", () => {
  const view = window.location.hash.replace("#", "");
  if (view && document.querySelector(`[data-view="${view}"]`)) {
    setActiveView(view);
  }
});

updateResearch();
generateProgram();
updateCycle();
updateMealPlan();
buildChecklist();
updateTracking();
