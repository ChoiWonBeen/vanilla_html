export default function Header($target) {
  const $view = document.createElement("nav");
  $view.classList.add("header");
  $view.innerHTML = `
    <ul>
      <li><a href="/">리스트</a></li>
      <li><a href="/products/1">상세</a></li>
      <li><a href="/cart">카트</a></li>
    </ul>
  `;
  this.render = () => {
    $target.appendChild($view);
  };
}
