function resetCSS() {
  const root = document.getElementById('root');
  const body = document.querySelector('body');

  body.style.margin = '0';
  body.style.padding = '0';
  body.style.boxSizing = 'border-box';

  root.style.margin = '0';
  root.style.padding = '0';
  root.style.boxSizing = 'border-box';
}

export default resetCSS;