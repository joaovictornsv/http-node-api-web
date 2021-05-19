function makeButton(config={}) {
  let initialValue = config.value || 'Button';
  let initialFunc = null;

  let initialCss = {
    width: '150px',
    height: '50px',
    background: 'white',
    borderRadius: '8px',
    cursor: 'pointer',
  }

  let initialHoverCss = {
    background: 'black'
  }
  
  const component = document.createElement('button');
  setValue(initialValue);
  setCSS(initialCss);
  initialFunc && setOnclick(initialFunc);


  function setOnclick(new_func) {
    component.onclick = new_func;
  }

  function setValue(new_value) {
    component.innerText = new_value;
  }

  function overwriteCSS(new_css) {
    for (let [key, value] of Object.entries(new_css)) {
      component.style[key] = value
    }
  }

  function setCSS(new_css, hover_css=initialHoverCss) {
    overwriteCSS(new_css);
    component.addEventListener('mouseenter', () => overwriteCSS(hover_css));
    component.addEventListener('mouseout', () => overwriteCSS(new_css));
  }

  function initOn(className) {
    const div = document.getElementsByClassName(className)[0];
    div.appendChild(component);
  }

  return {
    component,
    initOn,
    setValue,
    setCSS,
    setOnclick
  }
}


export default makeButton;