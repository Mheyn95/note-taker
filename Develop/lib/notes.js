const { create } = require("domain");

const fs = require("fs");
const path = require("path");

function createNewNote(body, notes) {
  const note = body;
  notes.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notes, null, 2)
  );
  return note;
}

function deleteNote(index, notes) {
  notes.splice(index, 1);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notes, null, 2)
  );
}

function findById(id, notes) {
  const result = notes.filter((note) => note.id === id)[0];
  return result;
}

module.exports = { createNewNote, deleteNote, findById };
