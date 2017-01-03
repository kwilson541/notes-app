note = {};
note.returnNoteText = function(){
  return "A doubled note";
};

noteList = {};

noteList.showNotes = function(){
  return [note];
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
