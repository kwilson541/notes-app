'use strict'

function testNoteList(){
	var noteList = new NoteList();
	assert.isTrue(noteList.list.length === 0)
}

testNoteList();

function testNoteListStore(){
	var noteList = new NoteList();
	var note = new Note();
	noteList.list.push(note);
	assert.isTrue(noteList.list[0] === note)
}

testNoteListStore();

function testReturnNotesArray(){
	var noteList = new NoteList();
	var note = new Note("Test note");
	noteList.list.push(note);
	assert.isTrue(noteList.viewNotes() === noteList.list)
}

testReturnNotesArray();

function testCreateNote() {
	var noteList = new NoteList();
	noteList.createNote("Test note");
	assert.isTrue(noteList.list[0].text === "Test note")
}

testCreateNote();