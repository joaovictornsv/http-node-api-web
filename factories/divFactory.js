function makeDiv(config={}) {
  let initialClassName = config.className;

  let initialCss = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const component = document.createElement('div');
  config.className && setClass(initialClassName);
  setCSS(initialCss);
  
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

  function initOnRoot() {
    const div = document.getElementById('root');
    div.appendChild(component);
  }

  return {
    component,
    initOn,
    append,
    setClass,
    setCSS,
    initOnRoot
  }
}


export default makeDiv;