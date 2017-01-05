(function(exports) {

	function Note(string, id){
	  this._text = string;
		this._id = id;
	}

	Note.prototype.returnNoteText = function() {
		return this._text;
	};

	exports.Note = Note;

})(this);
