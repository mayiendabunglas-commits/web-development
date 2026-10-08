const DRAFT_KEY = "draft-studio:draft";
const THEME_KEY = "draft-studio:theme";
const WARNING_LIMIT = 500;
const DANGER_LIMIT = 1000;

const draft = document.querySelector("#draft");
const themeToggle = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector("#theme-icon");
const themeLabel = document.querySelector("#theme-label");
const clearButton = document.querySelector("#clear-button");
const characterCount = document.querySelector("#character-count");
const wordCount = document.querySelector("#word-count");
const lineCount = document.querySelector("#line-count");
const characterValue = document.querySelector("#character-value");
const wordValue = document.querySelector("#word-value");
const lineValue = document.querySelector("#line-value");
const statusMessage = document.querySelector("#status-message");

function getLineCount(value) {
  return value.length === 0 ? 0 : value.split(/\r?\n/).length;
}

function setCounterWarning(counter, value, warningLimit, dangerLimit) {
  counter.classList.toggle("warning", value >= warningLimit && value < dangerLimit);
  counter.classList.toggle("danger", value >= dangerLimit);
}

function updateCounts() {
  const value = draft.value;
  const characters = value.length;
  const words = value.trim() === "" ? 0 : value.trim().split(/\s+/).length;
  const lines = getLineCount(value);

  characterValue.textContent = characters.toLocaleString();
  wordValue.textContent = words.toLocaleString();
  lineValue.textContent = lines.toLocaleString();

  setCounterWarning(characterCount, characters, WARNING_LIMIT, DANGER_LIMIT);
  setCounterWarning(wordCount, words, WARNING_LIMIT, DANGER_LIMIT);
  setCounterWarning(lineCount, lines, WARNING_LIMIT, DANGER_LIMIT);
}

function saveDraft() {
  localStorage.setItem(DRAFT_KEY, draft.value);
  statusMessage.textContent = "Draft saved.";
}

function restoreTheme(theme) {
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
  themeIcon.textContent = isDark ? "☀" : "☾";
  themeLabel.textContent = isDark ? "Light mode" : "Dark mode";
}

function toggleTheme() {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  restoreTheme(nextTheme);
  localStorage.setItem(THEME_KEY, nextTheme);
  statusMessage.textContent = `${nextTheme === "dark" ? "Dark" : "Light"} theme enabled.`;
}

function clearDraft() {
  draft.value = "";
  localStorage.removeItem(DRAFT_KEY);
  updateCounts();
  draft.focus();
  statusMessage.textContent = "Draft cleared.";
}

function handleInput() {
  saveDraft();
  updateCounts();
}

draft.addEventListener("input", handleInput);
clearButton.addEventListener("click", clearDraft);
themeToggle.addEventListener("click", toggleTheme);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    clearDraft();
  }
});

const savedTheme = localStorage.getItem(THEME_KEY);
const savedDraft = localStorage.getItem(DRAFT_KEY);

restoreTheme(savedTheme || "light");
if (savedDraft !== null) {
  draft.value = savedDraft;
  statusMessage.textContent = "Saved draft restored.";
}

updateCounts();
