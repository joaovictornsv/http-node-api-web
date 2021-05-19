HTMLElement.prototype.overwriteCSS = function overwriteCSS(new_css) {
  for (let [key, value] of Object.entries(new_css)) {
    this.style[key] = value
  }
}

HTMLElement.prototype.setClass = function setClass(new_name) {
  this.className = new_name;
}

HTMLElement.prototype.setCSS = function setCSS(new_css) {
  this.overwriteCSS(new_css);
}

export default HTMLElement.prototype;