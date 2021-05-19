HTMLDivElement.prototype.initOnRoot = function initOnRoot() {
  const div = document.getElementById('root');
  div.appendChild(this);
}

export default HTMLDivElement.prototype;
