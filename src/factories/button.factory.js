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
  
  const component = document.createElement('button');
  component.setValue(initialValue);
  component.setCSS(initialCss);
  initialFunc && component.setOnclick(initialFunc);

  return component
}

export default makeButton;