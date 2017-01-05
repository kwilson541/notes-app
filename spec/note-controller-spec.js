note = {};
note.returnNoteText = function(){
  return "Favourite drink: margarita";
};
note.returnNoteId = function(){
  return 0;
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
  assert.isTrue(app.innerHTML === '<ul><li><div><a href="" id="0">Favourite drink: ma</a></div></li></ul>')
})();
