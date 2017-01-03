function testNoteCreation() {
  var note = new Note("test");
  assert.isTrue(note._text === "test");
};

testNoteCreation();
