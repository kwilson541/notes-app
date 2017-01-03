'use strict';

(function(exports){

	function NoteController(noteListModel){
		this.model = noteListModel;
		this.model.createNote("Favourite Drink: Margarita");
		this.noteList = new NoteListView(this.model);
	}

	NoteController.prototype.changeHTML = function() {
		var appHTML = document.getElementById("app");
		appHTML.innerHTML = this.noteList.displayNoteList();
	}

	exports.NoteController = NoteController;

})(this);