'use strict'

function testNoteText(){
  var note = new Note("This is a test note");
  assert.isTrue(note.text === "This is a test note")
}

testNoteText();

function returnNoteText(){
  var note = new Note("This is another note");
  assert.isTrue(note.viewText() === "This is another note")
}

returnNoteText();
