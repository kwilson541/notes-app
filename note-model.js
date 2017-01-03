function Note(string){
  this._text = string;
}

Note.prototype.returnNoteText = function() {
  return this._text;
};
