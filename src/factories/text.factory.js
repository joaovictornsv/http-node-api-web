function makeText(config={}) {
  let initialValue = config.value || `Text ${tag}`;
  let tag = config.tag || 'h1';

  let initialCss = {
    fontSize: '14px',
    color: 'black',
    fontFamily: 'Arial, sans-serif'
  }

  const component = document.createElement(tag);
  component.innerText = initialValue;
  component.setCSS(initialCss);
  

  return component;
}


export default makeText;