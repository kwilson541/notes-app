(function(exports) {

	function Note(string, id){
	  this._text = string;
		this._id = id;
	}

	Note.prototype.returnNoteText = function() {
		return this._text;
	};

	Note.prototype.returnNoteId = function() {
		return this._id;
	};

	exports.Note = Note;

})(this);
