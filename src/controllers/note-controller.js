(function(exports) {

  function NoteController(noteList){
    this._noteList = noteList;
  }

  NoteController.prototype.addNote = function(text){
    this._noteList.createNote(text);
  };

  NoteController.prototype.addNoteListView = function(){
    this.noteListView = new NoteListView(this._noteList);
  };

  NoteController.prototype.updateHTML = function(id){
    var getListNotes = this.noteListView.listNotes();
    var noteDisplay = document.getElementById(id);
    noteDisplay.innerHTML = getListNotes;
  };

  exports.NoteController = NoteController;

})(this);