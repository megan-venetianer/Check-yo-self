class ToDoList {
  constructor(id, title, urgent, tasks) {
    this.id = id;
    this.title = title;
    this.urgent = false;
    this.tasks = [];
  }
  saveToStorage() {
    var stringedTask = JSON.stringify(this);
    var savedTask = window.localStorage.setItem(this.id, stringedTask);
  }
  deleteFromStorage() {

  }
  updateToDo() {

  }
  updateTask() {

  }
}
