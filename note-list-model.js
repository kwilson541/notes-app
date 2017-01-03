function NoteList(){
  this._notes = [];
}

(function(exports) {

  NoteList.prototype.addNote = function(note){
    this._notes.push(note);
  };

  NoteList.prototype.showNotes = function(){
    return this._notes;
  };

  exports.addNote = this.addNote;
  exports.showNotes = this.showNotes;

})(this);
