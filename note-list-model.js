function NoteList(){
  this._notes = [];
}

(function(exports) {

  NoteList.prototype.addNote = function(note){
    this._notes.push(note);
  };

  exports.addNote = this.addNote;

})(this);
