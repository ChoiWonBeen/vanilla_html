export default function Cart({ $target }) {
  const $page = document.createElement("div");
  $page.innerHTML = `
    <h1>카트</h1>
  `;
  this.render = () => {
    $target.appendChild($page);
  };
}
