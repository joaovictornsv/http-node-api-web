HTMLInputElement.prototype.setID = function setID(new_id) {
  this.id = new_id;
}

HTMLInputElement.prototype.setMinMax = function setMinMax(min, max) {
  this.min = min;
  this.max = max;
}

HTMLInputElement.prototype.setType = function setType(new_type) {
  this.type = new_type;
}

HTMLInputElement.prototype.setValue = function setValue(new_value) {
  this.value = new_value;
}

HTMLInputElement.prototype.setPlaceholder = function setPlaceholder(text) {
  this.placeholder = text;
}

HTMLInputElement.prototype.setCSS = function setCSS(new_css, focus_css={
  border: 'black'
}) {
  this.overwriteCSS(new_css);
  this.addEventListener('focusin', () => this.overwriteCSS(focus_css));
  this.addEventListener('focusout', () => this.overwriteCSS(new_css));
}

export default HTMLInputElement.prototype;