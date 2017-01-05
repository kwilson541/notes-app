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

  NoteController.prototype.makeURLChangeShowNoteInCurrentPage = function(){
    window.addEventListener("hashchange", this.showNoteForCurrentPage.bind (this));
  };

  NoteController.prototype.showNoteForCurrentPage = function(){
    this.findNote(this.getNoteFromURL(window.location));
  };

  NoteController.prototype.getNoteFromURL = function(location){
    return location.hash.split("#")[1];
  };

  NoteController.prototype.findNote = function(id){
    note = this._noteList._notes[id];
    singleNoteView = new SingleNoteView(note)
    this.showNote(singleNoteView);
  };

  NoteController.prototype.showNote = function(note) {
    document
    .getElementById("app")
    .innerHTML = note.viewNote();
  };

  exports.NoteController = NoteController;

})(this);
