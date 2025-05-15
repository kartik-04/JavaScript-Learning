class Todo {
  constructor(id, title, completed, createdAt) {
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.createdAt = createdAt;
  }

  toggleCompleted(toggle) {
    return (toggle = !toggle);
  }

  updateTitle(str) {
    if (str != "") {
      str = str.trim();
    } else {
      return;
    }
    return str;
  }
}

const todo = new Todo();
let toggle = false;
let str = "";
const result = todo.toggleCompleted(toggle);
console.log(result);
const strr = todo.updateTitle(str);
console.log(strr);
