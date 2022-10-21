export default function TodoDetail({ $target }) {
  const { pathname } = location;
  const [, , productId] = pathname.split("/");

  const $page = document.createElement("div");
  $page.innerHTML = `
    <h1>상세페이지 id: ${productId}</h1>
  `;
  this.render = () => {
    $target.appendChild($page);
  };
}
