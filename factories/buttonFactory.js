function makeButton(config={}) {
  let initialValue = config.value || 'Button';
  let initialClassName = config.className || null;
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
  config.className && setClass(initialClassName);
  setCSS(initialCss);
  initialFunc && setOnclick(initialFunc);

  function setClass(new_name) {
    component.className = new_name;
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
    setClass,
    setValue,
    setCSS,
  }
}


export default makeButton;