note = {};
note._text = function() {
  return "A really cool note!";
};

(function testNoteListContainsNote() {
  var noteList = new NoteList();
  noteList.addNote(note);
  assert.isTrue(noteList._notes[0] === note);
})();

(function testReturnListOfNotes() {
  var noteList = new NoteList();
  noteList.addNote(note);
  assert.isTrue(noteList.showNotes().includes(note));
})();

(function testCreateNote() {
  var noteList = new NoteList();
  noteList.createNote("it's dark outside");
  assert.isTrue(noteList.showNotes()[0].returnNoteText() === "it's dark outside");
})();

(function testCreateNoteWithId() {
  var noteList = new NoteList();
  noteList.createNote("stay in the castle until dawn");
  assert.isTrue(noteList.showNotes()[0]._id === 0);
})();
