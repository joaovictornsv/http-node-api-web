function makeText(config={}) {
  let initialValue = config.value || `Text ${tag}`;
  let initialClassName = config.className || null;
  let tag = config.tag;

  let initialCss = {
    fontSize: '14px',
    color: 'black',
    fontFamily: 'Arial, sans-serif'
  }

  const component = document.createElement(tag);
  initialClassName && setClass(initialClassName);
  setValue(initialValue)
  setCSS(initialCss);
  
  function setClass(new_name) {
    component.className = new_name;
  }

  function setValue(new_value) {
    component.innerText = new_value;
  }

  function setCSS(new_css) {
    for (let [key, value] of Object.entries(new_css)) {
      component.style[key] = value
    }
  }

  function initOn(className) {
    const div = document.getElementsByClassName(className)[0];
    div.appendChild(component);
  }

  return {
    component,
    initOn,
    setClass,
    setCSS,
  }
}


export default makeText;