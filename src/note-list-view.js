'use strict';

(function(exports){

  function NoteListView(noteListModel){
    this.model = noteListModel;
  }

  NoteListView.prototype.displayNoteList = function(){
    var output = "<ul>";
    this.model.list.forEach(function(note){
      output += "<li><div>" + note.text + "</div></li>";
    })
    output += "</ul>";
    return output;
  }

  exports.NoteListView = NoteListView;

})(this);
