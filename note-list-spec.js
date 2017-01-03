note = {};
note._text = function() {
  return "A really cool note!";
};

function testNoteListContainsNote() {
  var noteList = new NoteList();
  noteList.addNote(note);
  assert.isTrue(noteList._notes[0] === note);
};
testNoteListContainsNote();

function testReturnListOfNotes() {
  var noteList = new NoteList();
  noteList.addNote(note);
  assert.isTrue(noteList.showNotes().includes(note));
};
testReturnListOfNotes();
