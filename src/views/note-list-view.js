(function(exports) {

  function NoteListView(noteList){
    this._noteList = noteList;
  }

  NoteListView.prototype.listNotes = function(){
    notes = '<ul>';
    this._noteList.showNotes().forEach(function(element){
      if(element.returnNoteText().length > 20){
        notes += `<li><div><a href="#${element.returnNoteId()}">${element.returnNoteText().substr(0, 19)}</a></div></li>`;
      } else {
        notes += `<li><div><a href="#${element.returnNoteId()}">${element.returnNoteText()}</a></div></li>`;
      }
    });
    notes += '</ul>';
    return notes;
  };

  exports.NoteListView = NoteListView;

})(this);
