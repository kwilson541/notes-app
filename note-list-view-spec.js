note = {};
note.text = function(){
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
