const router = require("express").Router();
const notes = require("../../db/db.json");
const { createNewNote, deleteNote, findById } = require("../../lib/notes");

router.get("/notes", (req, res) => {
  let results = notes;
  res.json(results);
});

router.post("/notes", (req, res) => {
  req.body.id = 1 + notes.length;
  req.body.id = req.body.id.toString();
  const note = createNewNote(req.body, notes);
  res.json(note);
});

router.delete("/notes/:id", (req, res) => {
  const index = notes.indexOf(findById(req.params.id, notes));
  deleteNote(index, notes);
  res.json(notes);
});

module.exports = router;
