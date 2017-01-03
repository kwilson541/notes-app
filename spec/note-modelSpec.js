'use strict'

function testNoteText(){
  var note = new Note("This is a test note");
  assert.isTrue(note.text === "This is a test note")
}

testNoteText();
