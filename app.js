/* ------------------ GLOBALS ------------------ */

const MD_FILE =
  "https://raw.githubusercontent.com/mgpiccinini-sec/PAN-NET-SEC-PRO-study-guide/main/PAN-NSP-Study-Guide.md";

const el = (id) => document.getElementById(id);

let QUESTIONS = [];
let exam = [];
let idx = 0;
let right = 0;
let locked = {};
let selected = {};
let flagged = {};
let domainStats = {};
let missedQuestions = [];
let timerInterval = null;
let secondsElapsed = 0;

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
  clearInterval(timerInterval);
}

/* ------------------ DOMAIN STATS ------------------ */

function initDomainStats() {
  domainStats = {};
  exam.forEach((q) => {
    if (!domainStats[q.topic]) {
      domainStats[q.topic] = { total: 0, correct: 0 };
    }
    domainStats[q.topic].total++;
  });
  updateDomainStatsUI();
}

function updateDomainStatsUI() {
  const box = el("domainStatsContent");
  box.innerHTML = "";

  Object.keys(domainStats).forEach((topic) => {
    const d = domainStats[topic];
    const pct = d.total ? Math.round((d.correct / d.total) * 100) : 0;

    const row = document.createElement("div");
    row.className = "row";
    row.innerHTML = `
      <span>${topic}</span>
      <span>${d.correct}/${d.total} (${pct}%)</span>
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

/* ------------------ TOPIC MAPPING ------------------ */

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
  NGFW: "NGFW and SASE Solution Functionality",
  "IoT Security": "Platform Solutions, Services and Tools",
  Panorama: "Platform Solutions, Services and Tools",
  SASE: "Connectivity and Security",
  GlobalProtect: "Connectivity and Security",
  NAT: "Connectivity and Security",
  Decryption: "Connectivity and Security",
  "Network Security Fundamentals": "Network Security Fundamentals",
};

/* ------------------ PARSE QUESTIONS ------------------ */

function parseQuestions(md) {
  const text = md.replace(/\r\n/g, "\n");

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

    const ansMatch = b.body.match(/\*\*Answer:\*\*\s*([A-D])/i);
    const answerLetter = ansMatch ? ansMatch[1].toUpperCase() : null;

    const optRe =
      /-\s*([A-D])\)\s+([\s\S]*?)(?=\n-\s*[A-D]\)|\n\*\*Answer:\*\*|$)/g;
    const options = [];
    let om;

    while ((om = optRe.exec(b.body)) !== null) {
      options.push({
        letter: om[1].toUpperCase(),
        text: om[2].trim(),
      });
    }

    const firstOptIndex = b.body.search(/-\s*A\)\s+/i);
    const questionText =
      firstOptIndex >= 0
        ? b.body.slice(0, firstOptIndex).trim()
        : b.body.trim();

    let explanation = "";
    if (ansMatch) {
      explanation = b.body.slice(ansMatch.index + ansMatch[0].length).trim();
    }

    if (!questionText || options.length !== 4 || !answerLetter) continue;

    const correctOpt = options.find((o) => o.letter === answerLetter);
    if (!correctOpt) continue;

    questions.push({
      id: "Q" + num,
      num,
      topic,
      blueprintDomain,
      text: questionText,
      options,
      answerLetter,
      correctText: correctOpt.text,
      explanation,
    });
  }

  return questions.sort(() => Math.random() - 0.5);
}

/* ------------------ RENDER QUESTION ------------------ */

function renderQuestion() {
  const q = exam[idx];

  el("qIndex").textContent = String(idx + 1);
  el("qTotal").textContent = String(exam.length);
  el("qDomain").textContent =
    q.blueprintDomain + " (topic: " + q.topic + ")";
  el("qText").textContent = q.text;

  el("prevBtn").disabled = idx === 0;
  el("nextBtn").disabled = idx === exam.length - 1;

  el("answerBox").classList.add("hidden");
  el("correctAnswer").textContent = "";
  el("explanation").textContent = "";

  /* FLAG INDICATOR */
  el("flagIndicator").textContent = flagged[q.id] ? "🚩 Flagged" : "";

  /* PROGRESS BAR */
  const pct = Math.round(((idx + 1) / exam.length) * 100);
  el("progressInner").style.width = pct + "%";

  el("optionsForm").innerHTML = "";
  const pickedText = selected[q.id] || null;

  if (!q._shuffledOptions) {
    q._shuffledOptions = q.options.slice().sort(() => Math.random() - 0.5);
  }
  const optionsToRender = q._shuffledOptions;

  optionsToRender.forEach((opt, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "option";

    const letter = String.fromCharCode(65 + index);
    const inputId = q.id + "_" + letter;

    wrapper.innerHTML =
      '<label for="' +
      inputId +
      '">' +
      '<span class="letter">' +
      letter +
      ")</span>" +
      '<input type="radio" name="opt_' +
      q.id +
      '" id="' +
      inputId +
      '" />' +
      "<span>" +
      opt.text +
      "</span>" +
      "</label>";

    const input = wrapper.querySelector("input");
    input.setAttribute("data-text", opt.text);

    if (pickedText && pickedText === opt.text) {
      input.checked = true;
    }

    input.addEventListener("change", (e) => {
      const chosenText = e.target.getAttribute("data-text");
      selected[q.id] = chosenText;
    });

    el("optionsForm").appendChild(wrapper);
  });

  if (q._revealed) showAnswer(true);
}

/* ------------------ SHOW ANSWER ------------------ */

function showAnswer(noScroll) {
  const q = exam[idx];
  q._revealed = true;

  const correctText = q.correctText;
  el("answerBox").classList.remove("hidden");
  el("correctAnswer").textContent = correctText;
  el("explanation").textContent =
    q.explanation || "No explanation provided.";

  const optDivs = Array.from(
    el("optionsForm").querySelectorAll(".option")
  );
  const pickedText = selected[q.id];

  optDivs.forEach((div) => {
    const input = div.querySelector("input");
    const optText = input.getAttribute("data-text");

    if (optText === correctText) {
      div.classList.add("correct");
    }
    if (pickedText && optText === pickedText && pickedText !== correctText) {
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
  if (locked[q.id]) return;
  locked[q.id] = true;

  const pickedText = selected[q.id];
  const isCorrect = pickedText && pickedText === q.correctText;

  if (isCorrect) {
    right++;
    domainStats[q.topic].correct++;
  } else {
    missedQuestions.push(q);
  }

  updateScoreUI();
  updateDomainStatsUI();

  if (idx === exam.length - 1) finishExam();
}

function updateScoreUI() {
  el("scoreRight").textContent = String(right);
  el("scoreTotal").textContent = String(exam.length);
  const pct = exam.length
    ? Math.round((right / exam.length) * 100)
    : 0;
  el("scorePct").textContent = pct + "%";
}

/* ------------------ FINISH EXAM ------------------ */

function finishExam() {
  stopTimer();

  el("examView").classList.add("hidden");
  el("summaryView").classList.remove("hidden");

  el("sumCorrect").textContent = right;
  el("sumPct").textContent = Math.round((right / 60) * 100) + "%";

  const m = String(Math.floor(secondsElapsed / 60)).padStart(2, "0");
  const s = String(secondsElapsed % 60).padStart(2, "0");
  el("sumTime").textContent = `${m}:${s}`;

  el("sumFlagged").textContent = Object.keys(flagged).length;

  const box = el("summaryDomains");
  box.innerHTML = "";

  Object.keys(domainStats).forEach((topic) => {
    const d = domainStats[topic];
    const pct = d.total ? Math.round((d.correct / d.total) * 100) : 0;

    const row = document.createElement("div");
    row.className = "row";
    row.innerHTML = `
      <strong>${topic}</strong>: ${d.correct}/${d.total} (${pct}%)
    `;
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
    div.innerHTML = `
      <h3>${q.text}</h3>
      <p><strong>Correct Answer:</strong> ${q.correctText}</p>
      <p>${q.explanation || ""}</p>
    `;
    container.appendChild(div);
