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