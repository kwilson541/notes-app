note = {};
note.returnNoteText = function(){
  return "A doubled note";
};

note2 = {};
note2.returnNoteText = function(){
  return "A secondouble note";
};

noteList = {};
noteList.showNotes = function(){
  return [note];
};

noteList2 = {};
noteList2.showNotes = function(){
  return [note, note2];
};

noteList3 = {};
noteList3.showNotes = function(){
  return [];
};

function testInstantiatesWithNoteList(){
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView._noteList === noteList);
};
testInstantiatesWithNoteList();

function testListNotes(){
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.listNotes() === "<ul><li><div>A doubled note</div></li></ul>");
};
testListNotes();

function testMultipleListNotes(){
  var noteListView = new NoteListView(noteList2);
  assert.isTrue(noteListView.listNotes() === "<ul><li><div>A doubled note</div></li><li><div>A secondouble note</div></li></ul>");
};
testMultipleListNotes();

function testEmptyListNotes(){
  var noteListView = new NoteListView(noteList3);
  assert.isTrue(noteListView.listNotes() === "<ul></ul>");
};
testMultipleListNotes();
