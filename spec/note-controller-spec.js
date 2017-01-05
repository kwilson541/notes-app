note = {};
note.returnNoteText = function(){
  return "Favourite drink: margarita";
};

noteList = {};
noteList.showNotes = function(){
  return [note];
};

(function testInstantiateNoteController() {
  var controller = new NoteController(noteList);
  assert.isTrue(typeof controller === "object")
})();

(function testUpdateHTML() {
  var controller = new NoteController(noteList);

  controller.addNoteListView();
  var app = document.createElement("div");
  app.id = "app";
  document.body.appendChild(app);
  controller.updateHTML("app");
  assert.isTrue(app.innerHTML === "<ul><li><div>Favourite drink: ma</div></li></ul>")
})();
