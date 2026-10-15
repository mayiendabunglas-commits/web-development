let notes = [
  { id: 1, text: "Buy milk and bread", category: "personal" },
  { id: 2, text: "Finish the Day 3 assignment", category: "study" },
  { id: 3, text: "Email the project report to Grace", category: "work" },
  { id: 4, text: "Revise JavaScript arrays", category: "study" },
  { id: 5, text: "Call mum", category: "personal" },
];

const validCategories = ["personal", "work", "study"];

function searchNotes(word) {
  const searchTerm = word.toLowerCase();
  return notes.filter((note) => note.text.toLowerCase().includes(searchTerm));
}

function longestNote() {
  if (notes.length === 0) {
    return null;
  }

  let longest = notes[0];
  for (const note of notes) {
    if (note.text.length > longest.text.length) {
      longest = note;
    }
  }
  return longest;
}

function countByCategory() {
  const counts = {};
  for (const note of notes) {
    counts[note.category] = (counts[note.category] || 0) + 1;
  }
  return counts;
}

function getSummary() {
  const counts = countByCategory();
  const noteLabel = notes.length === 1 ? "note" : "notes";
  return `${notes.length} ${noteLabel}: ${counts.personal || 0} personal, ${counts.work || 0} work, ${counts.study || 0} study.`;
}

function isDuplicate(text) {
  const normalizedText = text.trim().toLowerCase();
  return notes.some((note) => note.text.trim().toLowerCase() === normalizedText);
}

function addNote(text, category) {
  if (typeof text !== "string" || text.trim().length < 1 || text.trim().length > 200) {
    console.log("Note rejected: text must be 1-200 characters.");
    return false;
  }
  if (!validCategories.includes(category)) {
    console.log("Note rejected: category must be personal, work, or study.");
    return false;
  }
  if (isDuplicate(text)) {
    console.log("Note rejected: a note with that text already exists.");
    return false;
  }

  const nextId = notes.reduce((maxId, note) => Math.max(maxId, note.id), 0) + 1;
  notes.push({ id: nextId, text: text.trim(), category });
  console.log(`Note added: "${text.trim()}"`);
  return true;
}

console.log(searchNotes("DAY 3")); // Expected: [{ id: 2, text: "Finish the Day 3 assignment", category: "study" }]
console.log(searchNotes("astronomy")); // Expected: []
console.log(longestNote()); // Expected: { id: 3, text: "Email the project report to Grace", category: "work" }
console.log(countByCategory()); // Expected: { personal: 2, study: 2, work: 1 }
console.log(getSummary()); // Expected: "5 notes: 2 personal, 1 work, 2 study."
console.log(isDuplicate("  BUY MILK AND BREAD ")); // Expected: true
console.log(isDuplicate("Take a walk")); // Expected: false

const originalNotes = notes;
notes = [];
console.log(longestNote()); // Expected: null
console.log(countByCategory()); // Expected: {}
console.log(getSummary()); // Expected: "0 notes: 0 personal, 0 work, 0 study."
notes = originalNotes;

console.log(addNote("Plan weekend hike", "personal")); // Expected: true (also logs that the note was added)
console.log(addNote("  plan WEEKEND hike ", "personal")); // Expected: false (also logs that the note is a duplicate)
console.log(addNote("   ", "study")); // Expected: false (also logs the text validation reason)
console.log(addNote("Read a book", "health")); // Expected: false (also logs the category validation reason)
