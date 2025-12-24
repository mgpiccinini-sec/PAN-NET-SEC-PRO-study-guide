/* ------------------ GLOBALS ------------------ */

const MD_FILE = "./Palo-Alto-Networks-NetSec-Pro-P.md";

const el = (id) => document.getElementById(id);

let QUESTIONS = [];
let exam = [];
let idx = 0;
let right = 0;

let locked = {};
let selected = {}; // selected[q.id] = array of option texts (even for single choice)
let flagged = {};
let domainStats = {};
let missedQuestions = [];

let timerInterval = null;
let secondsElapsed = 0;

/* ------------------ UTIL ------------------ */

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

function normalizeDomain(domain) {
  // Normalize common variations to keep stats clean
  const d = (domain || "").trim();

  const map = {
    "Network Security Fundamentals": "Network Security Fundamentals",
    "NGFW and SASE solution functionality": "NGFW and SASE solution functionality",
    "NGFW and SASE Solution Functionality": "NGFW and SASE solution functionality",
    "NGFW/SASE maintenance and configuration": "Maintenance and Configuration",
    "NGFW and SASE solution maintenance and configuration": "Maintenance and Configuration",
    "Maintenance and Configuration": "Maintenance and Configuration",
    "Infrastructure Management and CDSS": "Infrastructure Management and CDSS",
    "Infrastructure management and CDSS": "Infrastructure Management and CDSS",
    "Platform solutions, services, and tools": "Platform solutions, services, and tools",
    "Platform Solutions, Services, and Tools": "Platform solutions, services, and tools",
    "Connectivity and Security": "Connectivity and Security",
    "Connectivity and security": "Connectivity and Security",
  };

  return map[d] || d || "Unmapped";
}

/* ------------------ TIMER ------------------ */

function startTimer() {
  secondsElapsed = 0;
  el("timerBox").classList.remove("hidden");

  timerInterval = setInterval(() => {
    secondsElapsed++;
    const m = String(Math.floor(secondsElapsed / 60)).padStart(2, "0");
    const s = String(secondsElapsed % 60).padStart(2, "0");
    el("timer").textContent = `${m}:${s}`;
  }, 1000);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

/* ------------------ DOMAIN STATS ------------------ */

function initDomainStats() {
  domainStats = {};
  exam.forEach((q) => {
    const dom = q.domain || "Unmapped";
    if (!domainStats[dom]) domainStats[dom] = { total: 0, correct: 0 };
    domainStats[dom].total++;
  });
  updateDomainStatsUI();
}

function updateDomainStatsUI() {
  const box = el("domainStatsContent");
  if (!box) return;

  box.innerHTML = "";
  Object.keys(domainStats).forEach((dom) => {
    const d = domainStats[dom];
    const pct = d.total ? Math.round((d.correct / d.total) * 100) : 0;
    const row = document.createElement("div");
    row.className = "row";
    row.innerHTML = `
      <div>${dom}</div>
      <div>${d.correct}/${d.total} (${pct}%)</div>
    `;
    box.appendChild(row);
  });
}

/* ------------------ LOAD MARKDOWN ------------------ */

async function loadMarkdown() {
  const res = await fetch(MD_FILE, { cache: "no-store" });
  if (!res.ok) throw new Error("Could not load markdown file.");
  return await res.text();
}

/* ------------------ PARSE QUESTIONS (NEW TEMPLATE) ------------------ */
/*
Template:
## Question 121

[Question text]

A. ...
B. ...
C. ...
D. ...

**Correct answer:** A, B
**Explanation:** ...
**Source:** NetSec‑Pro syllabus – <DOMAIN> (topic...)
---
*/
function parseQuestions(md) {
  const text = md.replace(/\r\n/g, "\n");

  // Split on "## Question <num>"
  const parts = text.split(/\n## Question\s+(\d+)\s*\n/g);
  const questions = [];

  for (let i = 1; i < parts.length; i += 2) {
    const num = Number(parts[i]);
    const block = parts[i + 1] || "";

    const aIdx = block.search(/\nA\.\s+/);
    if (aIdx < 0) continue;

    const questionText = block.slice(0, aIdx).trim();

    // Options A-D
    const optRe =
      /\n([A-D])\.\s+([\s\S]*?)(?=\n[A-D]\.\s+|\n\*\*Correct answer:\*\*|\n---|$)/g;

    const options = [];
    let m;
    while ((m = optRe.exec(block)) !== null) {
      options.push({ letter: m[1].toUpperCase(), text: m[2].trim() });
    }
    if (options.length !== 4) continue;

    // Correct answer: can be "B" or "A, B"
    const ansMatch = block.match(
      /\*\*Correct answer:\*\*\s*([A-D](?:\s*,\s*[A-D])*)/i
    );
    if (!ansMatch) continue;

    const answerLetters = ansMatch[1]
      .toUpperCase()
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    // Explanation (optional)
    const expMatch = block.match(
      /\*\*Explanation:\*\*\s*([\s\S]*?)(?=\n\*\*Source:\*\*|\n---|$)/i
    );
    const explanation = expMatch ? expMatch[1].trim() : "";

    // Source (optional but expected)
    const srcMatch = block.match(/\*\*Source:\*\*\s*([\s\S]*?)(?=\n---|$)/i);
    const sourceLine = srcMatch ? srcMatch[1].trim() : "";

    // Domain extraction from Source line:
    // "NetSec‑Pro syllabus – Network Security Fundamentals (....)"
    // If the Source line is not in that exact pattern, it will fall back to "Unmapped".
    let domain = "Unmapped";
    const domMatch = sourceLine.match(/syllabus\s*–\s*([^(\n.]+)(?:\(|\.|$)/i);
    if (domMatch) domain = domMatch[1].trim();
    domain = normalizeDomain(domain);

    // Correct texts for scoring and reveal
    const correctTexts = answerLetters
      .map((L) => options.find((o) => o.letter === L))
      .filter(Boolean)
      .map((o) => o.text);

    if (!questionText || correctTexts.length !== answerLetters.length) continue;

    questions.push({
      id: "Q" + num,
      num,
      domain,
      source: sourceLine,
      text: questionText,
      options,
      answerLetters, // array
      correctTexts, // array
      explanation,
    });
  }

  return questions.sort(() => Math.random() - 0.5);
}

/* ------------------ NEXT BUTTON ENABLE/DISABLE ------------------ */

function updateNextButtonState() {
  const q = exam[idx];
  const required = q.answerLetters.length; // 1 for single, >1 for multi
  const picked = getPickedArray(q);

  const ok = picked.length === required;

  // Only enable Next if the user picked exactly the required number
  el("nextBtn").disabled = !ok;
}

/* ------------------ RENDER QUESTION ------------------ */

function renderQuestion() {
  const q = exam[idx];

  el("qIndex").textContent = String(idx + 1);
  el("qTotal").textContent = String(exam.length);

  const required = q.answerLetters.length;
  const isMulti = required > 1;

  // Show domain + guidance
  el("qDomain").textContent = isMulti
    ? `${q.domain} — Select ${required}`
    : q.domain;

  el("qText").textContent = q.text;

  // Buttons
  el("prevBtn").disabled = idx === 0;

  // Next button text
  el("nextBtn").textContent = idx === exam.length - 1 ? "Finish exam" : "Next";

  // Reset answer box
  el("answerBox").classList.add("hidden");
  el("correctAnswer").textContent = "";
  el("explanation").textContent = "";

  // Flag indicator
  el("flagIndicator").textContent = flagged[q.id] ? "🚩 Flagged" : "";

  // Progress bar
  const pct = Math.round(((idx + 1) / exam.length) * 100);
  el("progressInner").style.width = pct + "%";

  // Options
  el("optionsForm").innerHTML = "";

  const pickedArr = getPickedArray(q);

  if (!q._shuffledOptions) {
    q._shuffledOptions = q.options.slice().sort(() => Math.random() - 0.5);
  }

  const optionsToRender = q._shuffledOptions;
  const inputType = isMulti ? "checkbox" : "radio";

  optionsToRender.forEach((opt, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "option";

    const letter = String.fromCharCode(65 + index);
    const inputId = q.id + "_" + letter;

    // For radio: share same name per question
    // For checkbox: name can be unique; not critical
    const nameAttr = isMulti ? inputId : q.id;

    wrapper.innerHTML = `
      <label>
        <input type="${inputType}" name="${nameAttr}" id="${inputId}" />
        <strong>${letter}.</strong> ${opt.text}
      </label>
    `;

    const input = wrapper.querySelector("input");
    input.setAttribute("data-text", opt.text);

    // Restore checked state
    if (pickedArr.includes(opt.text)) input.checked = true;

    input.addEventListener("change", () => {
      const txt = input.getAttribute("data-text");

      if (isMulti) {
        const current = new Set(getPickedArray(q));
        if (input.checked) current.add(txt);
        else current.delete(txt);

        // Enforce max selections = required
        if (current.size > required) {
          input.checked = false;
          current.delete(txt);
        }

        setPickedArray(q, Array.from(current));
      } else {
        // Radio -> single selection array
        setPickedArray(q, [txt]);
      }

      updateNextButtonState();
    });

    el("optionsForm").appendChild(wrapper);
  });

  // Next disabled until selection count meets required
  updateNextButtonState();

  // Re-apply answer reveal if user already revealed this question
  if (q._revealed) showAnswer(true);
}

/* ------------------ SHOW ANSWER ------------------ */

function showAnswer(noScroll) {
  const q = exam[idx];
  q._revealed = true;

  el("answerBox").classList.remove("hidden");
  el("correctAnswer").textContent = q.correctTexts.join(" | ");
  el("explanation").textContent = q.explanation || "No explanation provided.";

  const correctSet = new Set(q.correctTexts);
  const pickedArr = getPickedArray(q);
  const pickedSet = new Set(pickedArr);

  const optDivs = Array.from(el("optionsForm").querySelectorAll(".option"));
  optDivs.forEach((div) => {
    const input = div.querySelector("input");
    const optText = input.getAttribute("data-text");

    if (correctSet.has(optText)) {
      div.classList.add("correct");
    }

    if (pickedSet.has(optText) && !correctSet.has(optText)) {
      div.classList.add("wrong");
    }
  });

  if (!noScroll) {
    el("answerBox").scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }
}

/* ------------------ SCORING ------------------ */

function scoreCurrentIfNeeded() {
  const q = exam[idx];

  // Safety: if Next is disabled, do nothing
  if (el("nextBtn").disabled) return;

  if (locked[q.id]) return;
  locked[q.id] = true;

  const pickedArr = getPickedArray(q);
  const required = q.answerLetters.length;

  // Must pick exactly required number of options
  if (pickedArr.length !== required) return;

  const isCorrect = arraysEqualAsSets(pickedArr, q.correctTexts);

  if (isCorrect) {
    right++;
    if (domainStats[q.domain]) domainStats[q.domain].correct++;
  } else {
    missedQuestions.push(q);
  }

  updateScoreUI();
  updateDomainStatsUI();
}

function updateScoreUI() {
  el("scoreRight").textContent = String(right);
  el("scoreTotal").textContent = String(exam.length);
  const pct = exam.length ? Math.round((right / exam.length) * 100) : 0;
  el("scorePct").textContent = pct + "%";
}

/* ------------------ FINISH EXAM ------------------ */

function finishExam() {
  stopTimer();

  el("examView").classList.add("hidden");
  el("summaryView").classList.remove("hidden");

  el("sumCorrect").textContent = right;
  el("sumPct").textContent = Math.round((right / exam.length) * 100) + "%";

  const m = String(Math.floor(secondsElapsed / 60)).padStart(2, "0");
  const s = String(secondsElapsed % 60).padStart(2, "0");
  el("sumTime").textContent = `${m}:${s}`;

  el("sumFlagged").textContent = Object.keys(flagged).length;

  const box = el("summaryDomains");
  box.innerHTML = "";

  Object.keys(domainStats).forEach((dom) => {
    const d = domainStats[dom];
    const pct = d.total ? Math.round((d.correct / d.total) * 100) : 0;
    const row = document.createElement("div");
    row.className = "row";
    row.innerHTML = `<div><strong>${dom}</strong></div><div>${d.correct}/${d.total} (${pct}%)</div>`;
    box.appendChild(row);
  });
}

/* ------------------ REVIEW MISSED QUESTIONS ------------------ */

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
      <div style="margin-top:6px;"><strong>Correct Answer:</strong> ${q.correctTexts.join(" | ")}</div>
      <div style="margin-top:6px;">${q.explanation || ""}</div>
    `;
    container.appendChild(div);
  });
}

/* ------------------ FLAG QUESTION ------------------ */

function toggleFlag() {
  const q = exam[idx];
  flagged[q.id] = !flagged[q.id];
  el("flagIndicator").textContent = flagged[q.id] ? "🚩 Flagged" : "";
}

/* ------------------ EXPORT CSV ------------------ */

function exportCSV() {
  let csv = "QuestionID,Domain,Correct,YourAnswer,CorrectAnswer,Flagged\n";

  exam.forEach((q) => {
    const yourArr = getPickedArray(q);
    const your = yourArr.join(" | ");
    const correct = q.correctTexts.join(" | ");
    const isCorrect = arraysEqualAsSets(yourArr, q.correctTexts) ? "Yes" : "No";
    const isFlagged = flagged[q.id] ? "Yes" : "No";

    csv +=
      `"${q.id}",` +
      `"${q.domain.replace(/"/g, '""')}",` +
      `"${isCorrect}",` +
      `"${your.replace(/"/g, '""')}",` +
      `"${correct.replace(/"/g, '""')}",` +
      `"${isFlagged}"\n`;
  });

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "exam_results.csv";
  a.click();
  URL.revokeObjectURL(url);
}

/* ------------------ RESTART ------------------ */

function restartExam() {
  location.reload();
}

/* ------------------ START EXAM ------------------ */

async function startExam() {
  try {
    const md = await loadMarkdown();
    QUESTIONS = parseQuestions(md);

    if (QUESTIONS.length < 60) {
      throw new Error(
        "Need at least 60 questions, but parsed " + QUESTIONS.length + "."
      );
    }

    // Build 60-question exam
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

/* ------------------ BUTTONS ------------------ */

// Navigation
el("prevBtn").addEventListener("click", () => {
  if (idx === 0) return;
  idx--;
  renderQuestion();
});

el("nextBtn").addEventListener("click", () => {
  // Must be answer-complete (Next disabled otherwise)
  if (el("nextBtn").disabled) return;

  // Score before moving forward
  scoreCurrentIfNeeded();

  // Finish if last question
  if (idx === exam.length - 1) {
    finishExam();
    return;
  }

  idx++;
  renderQuestion();
});

// Actions
el("revealBtn").addEventListener("click", () => showAnswer(false));
el("flagBtn").addEventListener("click", toggleFlag);
el("reviewBtn").addEventListener("click", showReview);
el("restartBtn").addEventListener("click", restartExam);
el("restartBtn2").addEventListener("click", restartExam);
el("exportCsvBtn").addEventListener("click", exportCSV);

// Optional restart button on initial screen (if present in HTML)
const restartMainBtn = el("restartMainBtn");
if (restartMainBtn) restartMainBtn.addEventListener("click", restartExam);

/* ------------------ INIT ------------------ */

startExam();
