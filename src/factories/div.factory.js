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
  config.className && component.setClass(initialClassName);
  component.setCSS(initialCss);

  return component;
}


export default makeDiv;