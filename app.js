// ------------------ GLOBALS ------------------
const MDFILE = "./Palo-Alto-Networks-NetSec-Pro-P.md";
const el = (id) => document.getElementById(id);

let QUESTIONS = [];
let exam = [];
let idx = 0;
let right = 0;

let locked = {};
let selected = {}; // selected[q.id] = array of selected option texts (even for single choice)
let flagged = {};
let domainStats = {};
let missedQuestions = [];

let timerInterval = null;
let secondsElapsed = 0;

// ------------------ OFFICIAL DOMAINS ------------------
const OFFICIALDOMAINS = [
  "Network Security Fundamentals",
  "NGFW and SASE Solution Functionality",
  "Platform Solutions, Services and Tools",
  "NGFW/SASE Solution Maintenance and Configuration",
  "Infrastructure Management and CDSS",
  "Connectivity and Security",
];

function normalizeDomain(raw) {
  const s = (raw || "").trim().toLowerCase();

  for (const d of OFFICIALDOMAINS) {
    if (s === d.toLowerCase()) return d;
  }

  if (s.includes("network security fundamentals")) return "Network Security Fundamentals";
  if (s.includes("ngfw") && s.includes("sase") && s.includes("function")) return "NGFW and SASE Solution Functionality";
  if (s.includes("platform") && (s.includes("services") || s.includes("tools"))) return "Platform Solutions, Services and Tools";
  if (s.includes("maintenance") || s.includes("configuration") || s.includes("monitoring") || s.includes("troubleshoot") || s.includes("upgrade"))
    return "NGFW/SASE Solution Maintenance and Configuration";
  if (s.includes("infrastructure") || s.includes("cdss") || s.includes("scm") || s.includes("panorama") || s.includes("aiops") || s.includes("logging service") || s.includes("sls"))
    return "Infrastructure Management and CDSS";
  if (s.includes("connectivity") || s.includes("vpn") || s.includes("globalprotect") || s.includes("sd-wan") || s.includes("routing") || s.includes("nat"))
    return "Connectivity and Security";

  return "Infrastructure Management and CDSS";
}

// ------------------ UTIL ------------------
function getPickedArray(q) {
  return Array.isArray(selected[q.id]) ? selected[q.id] : [];
}
function setPickedArray(q, arr) {
  selected[q.id] = arr;
}
function arraysEqualAsSets(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) return false;
  if (a.length !== b.length) return false;
  const A = new Set(a);
  const B = new Set(b);
  if (A.size !== B.size) return false;
  for (const x of A) if (!B.has(x)) return false;
  return true;
}

// ------------------ TIMER ------------------
function startTimer() {
  secondsElapsed = 0;
  el("timerBox").classList.remove("hidden");

  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    secondsElapsed++;
    const m = String(Math.floor(secondsElapsed / 60)).padStart(2, "0");
    const s = String(secondsElapsed % 60).padStart(2, "0");
    el("timer").textContent = `${m}:${s}`;
  }, 1000);
}

function stopTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = null;
}

// ------------------ DOMAIN STATS ------------------
function initDomainStats() {
  domainStats = {};
  OFFICIALDOMAINS.forEach((d) => (domainStats[d] = { total: 0, correct: 0 }));

  exam.forEach((q) => {
    const dom = q.domain;
    if (!domainStats[dom]) domainStats[dom] = { total: 0, correct: 0 };
    domainStats[dom].total++;
  });

  updateDomainStatsUI();
}

function updateDomainStatsUI() {
  const box = el("domainStatsContent");
  box.innerHTML = "";

  OFFICIALDOMAINS.forEach((dom) => {
    const d = domainStats[dom] || { total: 0, correct: 0 };
    const pct = d.total ? Math.round((d.correct / d.total) * 100) : 0;

    const row = document.createElement("div");
    row.className = "row";
    row.innerHTML = `
      <div class="dom" title="${dom}">${dom}</div>
      <div class="domScore">${d.correct}/${d.total} (${pct}%)</div>
    `;
    box.appendChild(row);
  });
}

// ------------------ LOAD MARKDOWN ------------------
async function loadMarkdown() {
  const res = await fetch(MDFILE, { cache: "no-store" });
  if (!res.ok) throw new Error(`Could not load markdown file: ${MDFILE} (HTTP ${res.status})`);
  return await res.text();
}

// ------------------ PARSE QUESTIONS ------------------
// Supports your file format:
// "--- TITLE ... - Question 80" blocks
// Also supports "Question 61" style headings as fallback.
function parseQuestions(md) {
  const text = md.replace(/\r/g, "");

  let parts = text.split(/---\s*TITLE[\s\S]*?-\s*Question\s*/g);
  if (parts.length < 2) {
    parts = text.split(/\n(?:#{0,6}\s*)?Question\s*/g);
  }

  const questions = [];

  for (let i = 1; i < parts.length; i++) {
    const mNum = parts[i].match(/^(\d+)\s*/);
    if (!mNum) continue;

    const num = Number(mNum[1]);
    let block = parts[i].slice(mNum[0].length);

    // clip accidental next TITLE
    block = block.split(/---\s*TITLE[\s\S]*?-\s*Question\s*\d+/)[0];

    const aIdx = block.search(/\nA\./);
    if (aIdx < 0) continue;

    const questionText = block.slice(0, aIdx).trim();
    if (!questionText) continue;

    const optRe = /\n([A-D])\.\s*([\s\S]*?)(?=\n[A-D]\.\s|\nCorrect\s*answer|\nCorrect\s*Answer|\nExplanation|\nSource|\n---|\n(?:#{0,6}\s*)?Question\s*\d+|$)/g;
    const options = [];
    let mo;
    while ((mo = optRe.exec(block)) !== null) {
      options.push({ letter: mo[1].toUpperCase(), text: mo[2].trim() });
    }
    if (options.length !== 4) continue;

    const ansMatch = block.match(/Correct\s*answer\s*:?\s*([A-D](?:\s*,\s*[A-D])*)/i);
    if (!ansMatch) continue;

    const answerLetters = ansMatch[1]
      .toUpperCase()
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    const expMatch = block.match(/Explanation\s*:?([\s\S]*?)(?:\nSource\s*:|\n---|\n(?:#{0,6}\s*)?Question\s*\d+|$)/i);
    const explanation = expMatch ? expMatch[1].trim() : "";

    const srcMatch = block.match(/Source\s*:?([\s\S]*?)(?:\n---|\n(?:#{0,6}\s*)?Question\s*\d+|$)/i);
    const sourceLine = srcMatch ? srcMatch[1].trim() : "";

    const domain = normalizeDomain(sourceLine);

    const correctTexts = answerLetters
      .map((L) => options.find((o) => o.letter === L))
      .filter(Boolean)
      .map((o) => o.text);

    if (correctTexts.length !== answerLetters.length) continue;

    questions.push({
      id: `Q${num}`,
      num,
      domain,
      source: sourceLine,
      text: questionText,
      options,
      answerLetters,
      correctTexts,
      explanation,
    });
  }

  return questions.sort(() => Math.random() - 0.5);
}

// ------------------ NEXT BUTTON STATE ------------------
function updateNextButtonState() {
  const q = exam[idx];
  const required = q.answerLetters.length;
  const picked = getPickedArray(q);
  el("nextBtn").disabled = picked.length !== required;
}

// ------------------ RENDER QUESTION ------------------
function renderQuestion() {
  const q = exam[idx];

  el("qIndex").textContent = String(idx + 1);
  el("qTotal").textContent = String(exam.length);

  const required = q.answerLetters.length;
  const isMulti = required > 1;

  el("qDomain").textContent = isMulti ? `${q.domain} (Select ${required})` : q.domain;
  el("qText").textContent = q.text;

  el("prevBtn").disabled = idx === 0;
  el("nextBtn").textContent = idx === exam.length - 1 ? "Finish exam" : "Next";

  el("answerBox").classList.add("hidden");
  el("correctAnswer").textContent = "";
  el("explanation").textContent = "";

  el("flagIndicator").textContent = flagged[q.id] ? "Flagged" : "";

  const pct = Math.round(((idx + 1) / exam.length) * 100);
  el("progressInner").style.width = `${pct}%`;

  el("optionsForm").innerHTML = "";

  const pickedArr = getPickedArray(q);

  if (!q.shuffledOptions) q.shuffledOptions = q.options.slice().sort(() => Math.random() - 0.5);
  const optionsToRender = q.shuffledOptions;

  const inputType = isMulti ? "checkbox" : "radio";

  optionsToRender.forEach((opt, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "option";

    const letter = String.fromCharCode(65 + index);
    const inputId = `${q.id}_${letter}`;
    const nameAttr = isMulti ? inputId : q.id;

    wrapper.innerHTML = `
      <label>
        <input type="${inputType}" name="${nameAttr}" id="${inputId}">
        <strong>${letter}.</strong> ${opt.text}
      </label>
    `;

    const input = wrapper.querySelector("input");
    input.setAttribute("data-text", opt.text);

    if (pickedArr.includes(opt.text)) input.checked = true;

    input.addEventListener("change", () => {
      const txt = input.getAttribute("data-text");

      if (isMulti) {
        const current = new Set(getPickedArray(q));
        if (input.checked) current.add(txt);
        else current.delete(txt);

        if (current.size > required) {
          input.checked = false;
          current.delete(txt);
        }

        setPickedArray(q, Array.from(current));
      } else {
        setPickedArray(q, [txt]);
      }

      updateNextButtonState();
    });

    el("optionsForm").appendChild(wrapper);
  });

  updateNextButtonState();

  if (q.revealed) showAnswer(true);
}

// ------------------ SHOW ANSWER ------------------
function showAnswer(noScroll) {
  const q = exam[idx];
  q.revealed = true;

  el("answerBox").classList.remove("hidden");
  el("correctAnswer").textContent = q.correctTexts.join(", ");
  el("explanation").textContent = q.explanation || "No explanation provided.";

  const correctSet = new Set(q.correctTexts);
  const pickedSet = new Set(getPickedArray(q));

  const optDivs = Array.from(el("optionsForm").querySelectorAll(".option"));
  optDivs.forEach((div) => {
    const input = div.querySelector("input");
    const optText = input.getAttribute("data-text");

    div.classList.remove("correct", "wrong");
    if (correctSet.has(optText)) div.classList.add("correct");
    if (pickedSet.has(optText) && !correctSet.has(optText)) div.classList.add("wrong");
  });

  if (!noScroll) el("answerBox").scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// ------------------ SCORING ------------------
function scoreCurrentIfNeeded() {
  const q = exam[idx];
  if (el("nextBtn").disabled) return;

  if (locked[q.id]) return;
  locked[q.id] = true;

  const pickedArr = getPickedArray(q);
  const isCorrect = arraysEqualAsSets(pickedArr, q.correctTexts);

  if (isCorrect) right++;
  else missedQuestions.push(q);

  if (domainStats[q.domain] && isCorrect) domainStats[q.domain].correct++;

  updateScoreUI();
  updateDomainStatsUI();
}

function updateScoreUI() {
  el("scoreRight").textContent = String(right);
  el("scoreTotal").textContent = String(exam.length);
  const pct = exam.length ? Math.round((right / exam.length) * 100) : 0;
  el("scorePct").textContent = `${pct}%`;
}

// ------------------ FINISH EXAM ------------------
function finishExam() {
  stopTimer();

  el("examView").classList.add("hidden");
  el("summaryView").classList.remove("hidden");

  el("sumCorrect").textContent = String(right);
  el("sumPct").textContent = String(Math.round((right / exam.length) * 100));

  const m = String(Math.floor(secondsElapsed / 60)).padStart(2, "0");
  const s = String(secondsElapsed % 60).padStart(2, "0");
  el("sumTime").textContent = `${m}:${s}`;

  el("sumFlagged").textContent = String(Object.keys(flagged).length);

  const box = el("summaryDomains");
  box.innerHTML = "";

  OFFICIALDOMAINS.forEach((dom) => {
    const d = domainStats[dom] || { total: 0, correct: 0 };
    const pct = d.total ? Math.round((d.correct / d.total) * 100) : 0;

    const row = document.createElement("div");
    row.className = "row";
    row.innerHTML = `
      <div class="dom"><strong>${dom}</strong></div>
      <div class="domScore">${d.correct}/${d.total} (${pct}%)</div>
    `;
    box.appendChild(row);
  });
}

// ------------------ REVIEW MISSED QUESTIONS ------------------
function showReview() {
  el("summaryView").classList.add("hidden");
  el("reviewView").classList.remove("hidden");

  const container = el("reviewContainer");
  container.innerHTML = "";

  missedQuestions.forEach((q) => {
    const div = document.createElement("div");
    div.className = "reviewItem";
    div.innerHTML = `
      <div><strong>${q.id}</strong> — ${q.domain}</div>
      <div style="margin-top:6px;"><strong>Question:</strong> ${q.text}</div>
      <div style="margin-top:6px;"><strong>Correct Answer:</strong> ${q.correctTexts.join(", ")}</div>
      <div style="margin-top:6px;">${q.explanation || ""}</div>
    `;
    container.appendChild(div);
  });
}

// ------------------ FLAG QUESTION ------------------
function toggleFlag() {
  const q = exam[idx];
  flagged[q.id] = !flagged[q.id];
  el("flagIndicator").textContent = flagged[q.id] ? "Flagged" : "";
}

// ------------------ EXPORT CSV ------------------
function exportCSV() {
  let csv = "QuestionID,Domain,Correct,YourAnswer,CorrectAnswer,Flagged\n";
  exam.forEach((q) => {
    const yourArr = getPickedArray(q);
    const your = yourArr.join(" | ");
    const correct = q.correctTexts.join(" | ");
    const isCorrect = arraysEqualAsSets(yourArr, q.correctTexts) ? "Yes" : "No";
    const isFlagged = flagged[q.id] ? "Yes" : "No";
    csv += `${q.id},${q.domain.replace(/,/g, " ")},${isCorrect},${your.replace(/,/g, " ")},${correct.replace(/,/g, " ")},${isFlagged}\n`;
  });

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "exam-results.csv";
  a.click();
  URL.revokeObjectURL(url);
}

// ------------------ RESTART ------------------
function restartExam() {
  location.reload();
}

// ------------------ START EXAM ------------------
async function startExam() {
  try {
    const md = await loadMarkdown();
    QUESTIONS = parseQuestions(md);

    if (QUESTIONS.length < 60) throw new Error(`Need at least 60 questions, but parsed ${QUESTIONS.length}.`);

    exam = QUESTIONS.slice(0, 60);

    idx = 0;
    right = 0;
    locked = {};
    selected = {};
    flagged = {};
    missedQuestions = [];

    el("setupView").classList.add("hidden");
    el("examView").classList.remove("hidden");
    el("scoreBox").classList.remove("hidden");
    el("domainStats").classList.remove("hidden");

    initDomainStats();
    updateScoreUI();
    renderQuestion();
    startTimer();
  } catch (e) {
    el("setupError").textContent = e.message;
    el("setupError").classList.remove("hidden");
  }
}

// ------------------ INIT ------------------
document.addEventListener("DOMContentLoaded", () => {
  el("prevBtn").addEventListener("click", () => {
    if (idx <= 0) return;
    idx--;
    renderQuestion();
  });

  el("nextBtn").addEventListener("click", () => {
    if (el("nextBtn").disabled) return;

    scoreCurrentIfNeeded();

    if (idx === exam.length - 1) {
      finishExam();
      return;
    }

    idx++;
    renderQuestion();
  });

  el("revealBtn").addEventListener("click", () => showAnswer(false));
  el("flagBtn").addEventListener("click", toggleFlag);
  el("reviewBtn").addEventListener("click", showReview);
  el("restartBtn").addEventListener("click", restartExam);
  el("restartBtn2").addEventListener("click", restartExam);
  el("exportCsvBtn").addEventListener("click", exportCSV);

  const restartMainBtn = el("restartMainBtn");
  if (restartMainBtn) restartMainBtn.addEventListener("click", restartExam);

  startExam();
});
