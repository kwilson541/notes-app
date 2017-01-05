(function testNoteCreation() {
  var note = new Note("test", 0);
  assert.isTrue(note._text === "test");
})();

(function testReturnNoteText() {
  var note = new Note("test", 0);
  assert.isTrue(note.returnNoteText() === note._text)
})();
