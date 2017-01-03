function NoteList(){
  this._notes = [];
}

(function(exports) {

  NoteList.prototype.addNote = function(note){
    this._notes.push(note);
  };

  NoteList.prototype.returnNotes = function(){
    return this._notes;
  };

  exports.addNote = this.addNote;

})(this);
