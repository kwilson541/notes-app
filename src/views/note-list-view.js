(function(exports) {

  function NoteListView(noteList){
    this._noteList = noteList;
  }
  
  NoteListView.prototype.listNotes = function(){
    notes = "<ul>";
    this._noteList.showNotes().forEach(function(element){
      notes += "<li><div>" + element.returnNoteText() + "</div></li>";
    })
    notes += "</ul>";
    return notes;
  };

  exports.NoteListView = NoteListView;

})(this);