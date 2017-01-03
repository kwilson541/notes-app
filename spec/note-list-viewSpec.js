'use strict';

function testAcceptsNoteListModel(){
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.model === noteList);
}

testAcceptsNoteListModel();

function testDisplayNoteList(){
  var noteList = new NoteList();
  noteList.createNote("Test List 1");
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.displayNoteList() === "<ul><li><div>Test List 1</div></li></ul>")
}

testDisplayNoteList();

function testDisplayTwoNoteList(){
  var noteList = new NoteList();
  noteList.createNote("Test List 1");
  noteList.createNote("Test List 2");
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.displayNoteList() === "<ul><li><div>Test List 1</div></li><li><div>Test List 2</div></li></ul>")
}

testDisplayTwoNoteList();

function testDisplayZeroNoteList(){
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.displayNoteList() === "<ul></ul>")
}

testDisplayZeroNoteList();
