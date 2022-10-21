import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Router from "./router/index.js";

export default function App({ $root }) {
  $root.innerHTML = "";

  new Header($root).render();
  new Router($root).render();
  new Footer($root).render();
}
