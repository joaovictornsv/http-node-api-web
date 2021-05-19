function makeForm(config={}) {
  let initialClassName = config.className;
  let initialFunc = null;

  let initialCss = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const component = document.createElement('form');
  config.className && setClass(initialClassName);
  initialFunc && setOnSubmit(initialFunc);
  setCSS(initialCss);

  function setOnSubmit(new_func) {
    component.onsubmit = new_func;
  }

  function setClass(new_name) {
    component.className = new_name;
  }

  function setCSS(new_css) {
    for (let [key, value] of Object.entries(new_css)) {
      component.style[key] = value
    }
  }

  function append(element) {
    component.appendChild(element);
  }

  function initOn(className) {
    const div = document.getElementsByClassName(className)[0];
    div.appendChild(component);
  }

  return {
    component,
    initOn,
    setOnSubmit,
    append,
    setCSS,
  }
}

export default makeForm;