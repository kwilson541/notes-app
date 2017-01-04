function NoteController(noteList){
  this._noteList = noteList;
}
(function(exports) {
  NoteController.prototype.addNote = function(text){
    this._noteList.createNote(text)
  };

  NoteController.prototype.addNoteListView = function(){
    this._noteListView = new NoteListView(this._noteList);
  };

  NoteController.prototype.updateHTML = function(id){
    var getListNotes = this._noteListView.listNotes();
    var notesDisplay = document.getElementById(id);
    notesDisplay.innerHTML = getListNotes;
  };

  exports.addNote = this.addNote;
  exports.addNoteListView = this.addNoteListView;
  exports.updateHTML = this.updateHTML;
})(this);
