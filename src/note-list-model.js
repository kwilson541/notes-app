(function(exports){

	function NoteList(){
		this.list = [];
	}

	NoteList.prototype.viewNotes = function(){
		return this.list
	}

	NoteList.prototype.createNote = function(text){
		note = new Note(text)
		this.list.push(note)
	}

	exports.NoteList = NoteList;

})(this);