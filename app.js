const MD_FILE = "PAN-NSP-Study-Guide.md";

// Blueprint weights (probabilistic selection)
const BLUEPRINT_DOMAINS = [
  { name: "Network Security Fundamentals", weight: 16 },
  { name: "NGFW and SASE Solution Functionality", weight: 18 },
  { name: "Platform Solutions, Services and Tools", weight: 18 },
  { name: "NGFW/SASE Solution Maintenance and Configuration", weight: 19 },
  { name: "Infrastructure Management and CDSS", weight: 15 },
  { name: "Connectivity and Security", weight: 14 },
];

// Topic blocks in your markdown -> blueprint domains
const TOPIC_TO_BLUEPRINT = {
  "App-ID": "NGFW and SASE Solution Functionality",
  "User-ID": "NGFW and SASE Solution Functionality",
  "Device-ID": "NGFW and SASE Solution Functionality",
  "NGFW": "NGFW and SASE Solution Functionality",

  "IoT Security": "Platform Solutions, Services and Tools",
  "Panorama": "Platform Solutions, Services and Tools",

  "SASE": "Connectivity and Security",
  "GlobalProtect": "Connectivity and Security",
  "NAT": "Connectivity and Security",
  "Decryption": "Connectivity and Security",

  "Network Security Fundamentals": "Network Security Fundamentals",
};

const el = (id) => document.getElementById(id);

const setupView = el("setupView");
const examView = el("examView");
const scoreBox = el("scoreBox");

const countInput = el("countInput");
const startBtn = el("startBtn");
const setupError = el("setupError");

const qIndex = el("qIndex");
const qTotal = el("qTotal");
const qDomain = el("qDomain");
const qText = el("qText");
const optionsForm = el("optionsForm");

const prevBtn = el("prevBtn");
const nextBtn = el("nextBtn");
const revealBtn = el("revealBtn");

const answerBox = el("answerBox");
const correctAnswerEl = el("correctAnswer");
const explanationEl = el("explanation");

const scoreRightEl = el("scoreRight");
const scoreTotalEl = el("scoreTotal");
const scorePctEl = el("scorePct");

let QUESTIONS = [];
let exam = [];
let idx = 0;
let right = 0;
let locked = {};
let selected = {};

function showError(msg) {
  setupError.textContent = msg;
  setupError.classList.remove("hidden");
}
function hideError() {
  setupError.classList.add("hidden");
  setupError.textContent = "";
}

function topicForQuestionNumber(n) {
  if (n >= 1 && n <= 12) return "App-ID";
  if (n >= 13 && n <= 24) return "User-ID";
  if (n >= 25 && n <= 34) return "Device-ID";
  if (n >= 35 && n <= 46) return "SASE";
  if (n >= 47 && n <= 58) return "Decryption";
  if (n >= 59 && n <= 70) return "IoT Security";
  if (n >= 71 && n <= 82) return "Panorama";
  if (n >= 83 && n <= 90) return "GlobalProtect";
  if (n >= 91 && n <= 98) return "NAT";
  if (n >= 99 && n <= 110) return "NGFW";
  if (n >= 111 && n <= 120) return "Network Security Fundamentals";
  return "Unknown topic";
}
function blueprintForTopic(topic) {
  return TOPIC_TO_BLUEPRINT[topic] || "Unmapped";
}

async function loadMarkdown() {
  const res = await fetch(MD_FILE, { cache: "no-store" });
  if (!res.ok) throw new Error(`Could not load ${MD_FILE} (HTTP ${res.status}).`);
  return await res.text();
}

/**
 * Parser that works even if questions are on the same line:
 * ... Q1. ... Answer B Q2. ... Answer C ...
 */
function parseQuestions(md) {
  const text = md.replace(/\r\n/g, "\n");

  // IMPORTANT: do NOT require "\nQ" — match Qn. anywhere.
  const blocks = [];
  const reBlock = /Q(\d+)\.\s*([\s\S]*?)(?=Q\d+\.\s|$)/g;
  let m;
  while ((m = reBlock.exec(text)) !== null) {
    blocks.push({ num: Number(m[1]), body: m[2].trim() });
  }

  const questions = [];

  for (const b of blocks) {
    const num = b.num;
    const topic = topicForQuestionNumber(num);
    const blueprintDomain = blueprintForTopic(topic);

    const ansMatch = b.body.match(/\bAnswer\s+([A-D])\b/i);
    const answer = ansMatch ? ansMatch[1].toUpperCase() : null;

    const optRe = /-\s*([A-D])\s+([\s\S]*?)(?=\s+-\s*[A-D]\s+|\s+Answer\s+[A-D]\b|$)/gi;
    const options = [];
    let om;
    while ((om = optRe.exec(b.body)) !== null) {
      options.push({ letter: om[1].toUpperCase(), text: om[2].trim() });
    }

    const firstOptIndex = b.body.search(/-\s*A\s+/i);
    const questionText = (firstOptIndex >= 0 ? b.body.slice(0, firstOptIndex) : b.body).trim();

    let explanation = "";
    if (ansMatch) {
      explanation = b.body.slice(ansMatch.index + ansMatch[0].length).trim();
      explanation = explanation.replace(/TITLE[\s\S]*$/i, "").trim();
    }

    if (!questionText || options.length !== 4 || !answer) continue;

    questions.push({
      id: `Q${num}`,
      num,
      topic,
      blueprintDomain,
      text: questionText,
      options,
      answer,
      explanation,
    });
  }

  return questions.sort((a, b) => a.num - b.num);
}

function weightedPick(domains) {
  const total = domains.reduce((sum, d) => sum + d.weight, 0);
  let r = Math.random() * total;
  for (const d of domains) {
    r -= d.weight;
    if (r <= 0) return d;
  }
  return domains[domains.length - 1];
}

function buildExamBlueprintWeighted(allQuestions, count) {
  const chosen = new Set();
  const byBlueprint = new Map();

  for (const q of allQuestions) {
    const d = q.blueprintDomain || "Unmapped";
    if (!byBlueprint.has(d)) byBlueprint.set(d, []);
    byBlueprint.get(d).push(q);
  }

  const activeDomains = BLUEPRINT_DOMAINS.filter(d => (byBlueprint.get(d.name) || []).length > 0);
  if (activeDomains.length === 0) {
    throw new Error("No questions mapped to blueprint domains. Check TOPIC_TO_BLUEPRINT mapping.");
  }

  const result = [];
  const maxAttempts = count * 300;
  let attempts = 0;

  while (result.length < count && attempts < maxAttempts) {
    attempts += 1;

    const picked = weightedPick(activeDomains).name;
    const pool = (byBlueprint.get(picked) || []).filter(q => !chosen.has(q.id));
    if (pool.length === 0) continue;

    const q = pool[Math.floor(Math.random() * pool.length)];
    chosen.add(q.id);
    result.push(q);
  }

  if (result.length < count) {
    throw new Error(
      `Could only build ${result.length}/${count} questions. ` +
      `Some blueprint domains ran out of available questions.`
    );
  }

  return result;
}

function updateScoreUI() {
  scoreRightEl.textContent = String(right);
  scoreTotalEl.textContent = String(exam.length);
  const pct = exam.length ? Math.round((right / exam.length) * 100) : 0;
  scorePctEl.textContent = `${pct}%`;
}

function renderQuestion() {
  const q = exam[idx];

  qIndex.textContent = String(idx + 1);
  qTotal.textContent = String(exam.length);
  qDomain.textContent = `${q.blueprintDomain} (topic: ${q.topic})`;
  qText.textContent = q.text;

  prevBtn.disabled = idx === 0;
  nextBtn.disabled = idx === exam.length - 1;

  answerBox.classList.add("hidden");
  correctAnswerEl.textContent = "";
  explanationEl.textContent = "";

  optionsForm.innerHTML = "";
  const picked = selected[q.id] || null;

  for (const opt of q.options) {
    const wrapper = document.createElement("div");
    wrapper.className = "option";

    const id = `${q.id}_${opt.letter}`;
    wrapper.innerHTML = `
      <label for="${id}">
        <span class="letter">${opt.letter})</span>
        <input type="radio" name="opt" id="${id}" value="${opt.letter}" ${picked === opt.letter ? "checked" : ""} />
        <span>${opt.text}</span>
      </label>
    `;

    wrapper.querySelector("input").addEventListener("change", (e) => {
      selected[q.id] = e.target.value;
    });

    optionsForm.appendChild(wrapper);
  }

  if (q._revealed) showAnswer(true);
}

function showAnswer(noScroll) {
  const q = exam[idx];
  q._revealed = true;

  answerBox.classList.remove("hidden");
  correctAnswerEl.textContent = q.answer;
  explanationEl.textContent = q.explanation || "No explanation provided in the source file.";

  const optDivs = [...optionsForm.querySelectorAll(".option")];
  for (const div of optDivs) {
    const input = div.querySelector("input");
    const letter = input.value;
    div.classList.toggle("correct", letter === q.answer);
    const picked = selected[q.id];
    div.classList.toggle("wrong", picked && letter === picked && picked !== q.answer);
  }

  if (!noScroll) answerBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function scoreCurrentIfNeeded() {
  const q = exam[idx];
  if (locked[q.id]) return;
  locked[q.id] = true;

  const picked = selected[q.id] || null;
  if (picked && picked === q.answer) right += 1;

  updateScoreUI();
}

startBtn.addEventListener("click", async () => {
  hideError();

  const count = Number(countInput.value);
  if (!Number.isFinite(count) || count < 1 || count > 120) {
    showError("Please choose a number from 1 to 120.");
    return;
  }

  startBtn.disabled = true;
  try {
    const md = await loadMarkdown();
    QUESTIONS = parseQuestions(md);

    console.log("Parsed questions:", QUESTIONS.length);
    console.log("Blueprint counts:", QUESTIONS.reduce((m,q)=> (m[q.blueprintDomain]=(m[q.blueprintDomain]||0)+1, m), {}));

    if (QUESTIONS.length === 0) {
      throw new Error("Parsed 0 questions. Check the markdown format in PAN-NSP-Study-Guide.md.");
    }

    exam = buildExamBlueprintWeighted(QUESTIONS, count);
    idx = 0;
    right = 0;
    locked = {};
    selected = {};

    setupView.classList.add("hidden");
    examView.classList.remove("hidden");
    scoreBox.classList.remove("hidden");

    updateScoreUI();
    renderQuestion();
  } catch (e) {
    showError(e.message || String(e));
  } finally {
    startBtn.disabled = false;
  }
});

prevBtn.addEventListener("click", () => {
  if (idx === 0) return;
  idx -= 1;
  renderQuestion();
});

nextBtn.addEventListener("click", () => {
  scoreCurrentIfNeeded();
  if (idx >= exam.length - 1) return;
  idx += 1;
  renderQuestion();
});

revealBtn.addEventListener("click", () => showAnswer(false));
