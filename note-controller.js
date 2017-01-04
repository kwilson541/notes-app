function NoteController(noteList){
	this._noteList = noteList;
}

(function(exports) {

	NoteController.prototype.addNote = function(text){
		this._noteList.createNote(text);
	};

	NoteController.prototype.addNoteListView = function(){
		this.noteListView = new NoteListView(this._noteList);
	};

	NoteController.prototype.updateHTML = function(){
		var getListNotes = this.noteListView.listNotes();
		var noteDisplay = document.getElementById("app");
		noteDisplay.innerHTML = getListNotes;
	};

})(this);