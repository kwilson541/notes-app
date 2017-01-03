function NoteListView(noteList){
  this._noteList = noteList;
}

(function(exports) {

  NoteListView.prototype.listNotes = function(){
    notes = "<ul>";
    for (var i = 0; i < this._noteList.length; i++) {
      notes += "<li><div>" + this._noteList.showNotes()[i].returnNoteText(); + "</div></li>";
    }
    notes += "</ul>";
    return notes;
  };

  exports.listNotes = this.listNotes;

})(this);
