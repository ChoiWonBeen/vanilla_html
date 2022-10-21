export default function Footer($target) {
  const $page = document.createElement("div");
  $page.innerHTML = `
    <footer class="footer">
      footer입니다.
    </footer>
  `;
  this.render = () => {
    $target.appendChild($page);
  };
}
