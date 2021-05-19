HTMLButtonElement.prototype.setValue = function setValue(new_value) {
  this.innerText = new_value;
}

HTMLButtonElement.prototype.setOnclick = function setOnclick(new_func) {
  this.onclick = new_func;
}

HTMLButtonElement.prototype.setCSS = function setCSS(new_css, hover_css={
  background: 'black'
}) {
  this.overwriteCSS(new_css);
  this.addEventListener('mouseenter', () => this.overwriteCSS(hover_css));
  this.addEventListener('mouseout', () => this.overwriteCSS(new_css));
}

export default HTMLButtonElement.prototype;