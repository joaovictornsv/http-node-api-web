function makeInput(config={}) {
  let initialPlaceholder = config.placeholder || 'Type here';
  let initialId = config.id || 'input_id';
  let initialType = config.type || 'text';

  let initialClickCss = {
    border: 'black'
  }
  
  const component = document.createElement('input');
  setType(initialType)
  setID(initialId);
  setPlaceholder(initialPlaceholder);
  setMinMax(0, 200);

  function setID(new_id) {
    component.id = new_id;
  }
  
  function setMinMax(min, max) {
    component.min = min;
    component.max = max;
  }

  function setType(new_type) {
    component.type = new_type;
  }

  function setPlaceholder(text) {
    component.placeholder = text;
  }

  function overwriteCSS(new_css) {
    for (let [key, value] of Object.entries(new_css)) {
      component.style[key] = value
    }
  }

  function setCSS(new_css, click_css=initialClickCss) {
    overwriteCSS(new_css);
    component.addEventListener('focusin', () => overwriteCSS(click_css));
    component.addEventListener('focusout', () => overwriteCSS(new_css));
  }

  function initOn(className) {
    const div = document.getElementsByClassName(className)[0];
    div.appendChild(component);
  }

  return {
    component,
    initOn,
    setCSS,
  }
}


export default makeInput;