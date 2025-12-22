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
  if (!res.ok) throw new Error(`Could not load ${MD_FILE} (HTTP ${res.status}).`);
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
  "Device-ID": "
