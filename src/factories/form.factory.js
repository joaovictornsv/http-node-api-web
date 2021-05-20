import formPrototype from '../prototypes/form.prototype.js'

function makeForm(config={}) {
  let initialClassName = config.className || 'myForm';
  let initialFunc = null;

  let initialCss = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const component = document.createElement('form');
  config.className && component.setClass(initialClassName);
  initialFunc && component.setOnSubmit(initialFunc);
  component.setCSS(initialCss);

  return component;
}

export default makeForm;