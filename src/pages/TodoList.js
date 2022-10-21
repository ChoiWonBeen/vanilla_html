import { getTodo } from "../api/todo.js";

export default function TodoList({ $target }) {
  const $view = document.createElement("div");
  this.state = {
    todoList: null,
  };

  this.setTodoList = (nextState) => {
    this.state.todoList = nextState;
    this.render();
  };

  const getTodoList = async () => {
    const data = await getTodo();
    this.setTodoList(data);
  };

  getTodoList();

  this.render = () => {
    $view.innerHTML = `
      <h1 class="product-list__header">리스트 페이지입니다.</h1>
      <input id="id-input"/>
      <ul>
        ${this.state.todoList
          ?.map((item, idx) => `<li>${idx + 1}. ${item.title}</li>`)
          .join("")}
      </ul>
    `;
    $target.appendChild($view);
  };
}
