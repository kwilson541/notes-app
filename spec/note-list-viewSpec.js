'use strict';

function acceptsNoteListModel(){
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.model === noteList);
}

acceptsNoteListModel();
