import Cart from "../pages/Cart.js";
import TodoDetail from "../pages/TodoDetail.js";
import TodoList from "../pages/TodoList.js";

export default function Router($root) {
  const { pathname } = location;
  const $router = document.createElement("div");
  $router.classList.add("main");

  this.route = async () => {
    if (pathname == "/") {
      return new TodoList({ $target: $router }).render();
    }
    if (pathname.startsWith("/products/")) {
      return new TodoDetail({ $target: $router }).render();
    }
    if (pathname.startsWith("/cart")) {
      return new Cart({ $target: $router }).render();
    }
  };

  this.route();

  this.render = () => $root.appendChild($router);
}
