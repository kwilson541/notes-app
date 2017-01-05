(function(exports) {

  function NoteList(){
    this._notes = [];
    this._notesCounter = 0;
  }

  NoteList.prototype.addNote = function(note){
    this._notes.push(note);
  };

  NoteList.prototype.showNotes = function(){
    return this._notes;
  };

  NoteList.prototype.createNote = function(string){
    var note = new Note(string, this._notesCounter);
    this._notesCounter++;
    this.addNote(note);
  };

  exports.NoteList = NoteList;

})(this);
