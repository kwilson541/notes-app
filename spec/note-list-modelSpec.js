'use strict'

function testNoteList(){
	var noteList = new NoteList();
	assert.isTrue(noteList.list.length === 0)
}

testNoteList();