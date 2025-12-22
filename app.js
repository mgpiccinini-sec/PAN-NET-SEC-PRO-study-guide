const MD_FILE = "https://raw.githubusercontent.com/mgpiccinini-sec/PAN-NET-SEC-PRO-study-guide/main/PAN-NSP-Study-Guide.md";

const el = (id) => document.getElementById(id);

const setupView = el("setupView");
const examView = el("examView");
const scoreBox = el("scoreBox");

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

const setupError = el("setupError");

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

async function loadMarkdown() {
  const res = await fetch(MD_FILE, { cache: "no-store" });
  if (!res.ok) throw new Error("Could not load markdown file.");
  return await res.text();
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
  "Network Security Fundamentals": "Network Security Fundamentals"
};

function parseQuestions(md) {
  const text = md.replace(/\r\n/g, "\n");

  // Match **Q1.**, **Q2.**, etc.
  const blocks = [];
  const reBlock = /\*\*Q(\d+)\.\*\*\s*([\s\S]*?)(?=(\*\*Q\d+\.\*\*)|$)/g;
  let m;

  while ((m = reBlock.exec(text)) !== null) {
    blocks.push({ num: Number(m[1]), body: m[2].trim() });
  }

  const questions = [];

  for (const b of blocks) {
    const num = b.num;
    const topic = topicForQuestionNumber(num);
    const blueprintDomain = TOPIC_TO_BLUEPRINT[topic] || "Unmapped";

    // Match **Answer:** B
    const ansMatch = b.body.match(/\*\*Answer:\*\*\s*([A-D])/i);
    const answer = ansMatch ? ansMatch[1].toUpperCase() : null;

    // Match - A) Option text
    const optRe = /-\s*([A-D])\)\s+([\s\S]*?)(?=\n-\s*[A-D]\)|\n\*\*Answer:\*\*|$)/g;
    const options = [];
    let om;

    while ((om = optRe.exec(b.body)) !== null) {
      options.push({
        letter: om[1].toUpperCase(),
        text: om[2].trim()
      });
    }

    const firstOptIndex = b.body.search(/-\s*A\)\s+/i);
    const questionText = firstOptIndex >= 0
      ? b.body.slice(0, firstOptIndex).trim()
      : b.body.trim();

    let explanation = "";
    if (ansMatch) {
      explanation = b.body.slice(ansMatch.index + ansMatch[0].length).trim();
    }

    if (!questionText || options.length !== 4 || !answer) continue;

    questions.push({
      id: "Q" + num,
      num,
      topic,
      blueprintDomain,
      text: questionText,
      options,
      answer,
      explanation
    });
  }

  return questions.sort(() => Math.random() - 0.5);
}

function updateScoreUI() {
  scoreRightEl.textContent = String(right);
  scoreTotalEl.textContent = String(exam.length);
  const pct = exam.length ? Math.round((right / exam.length) * 100) : 0;
  scorePctEl.textContent = pct + "%";
}

function renderQuestion() {
  const q = exam[idx];

  qIndex.textContent = String(idx + 1);
  qTotal.textContent = String(exam.length);
  qDomain.textContent = q.blueprintDomain + " (topic: " + q.topic + ")";
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

    const id = q.id + "_" + opt.letter;
    wrapper.innerHTML =
      '<label for="' + id + '">' +
      '<span class="letter">' + opt.letter + ')</span>' +
      '<input type="radio" name="opt" id="' + id + '" value="' + opt.letter + '"' +
      (picked === opt.letter ? " checked" : "") +
      ' />' +
      '<span>' + opt.text + '</span>' +
      '</label>';

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
  explanationEl.textContent = q.explanation || "No explanation provided.";

  const optDivs = Array.from(optionsForm.querySelectorAll(".option"));
  const picked = selected[q.id];

  optDivs.forEach((div) => {
    const input = div.querySelector("input");
    const letter = input.value;

    if (letter === q.answer) div.classList.add("correct");
    if (picked && letter === picked && picked !== q.answer) div.classList.add("wrong");
  });

  if (!noScroll) answerBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function scoreCurrentIfNeeded() {
  const q = exam[idx];
  if (locked[q.id]) return;
  locked[q.id] = true;

  const picked = selected[q.id];
  if (picked && picked === q.answer) right++;

  updateScoreUI();
}

async function startExam() {
  hideError();
  try {
    const md = await loadMarkdown();
    QUESTIONS = parseQuestions(md);

    if (QUESTIONS.length !== 120) {
      throw new Error("Expected 120 questions, but parsed " + QUESTIONS.length + ".");
    }

    exam = QUESTIONS;
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
    showError(e.message);
    console.error(e);
  }
}

prevBtn.addEventListener("click", () => {
  if (idx === 0) return;
  idx--;
  renderQuestion();
});

nextBtn.addEventListener("click", () => {
  scoreCurrentIfNeeded();
  if (idx >= exam.length - 1) return;
  idx++;
  renderQuestion();
});

revealBtn.addEventListener("click", () => showAnswer(false));

startExam();
