import { makeText } from '../../factories/index.js';


export const titleMain = makeText({tag: 'h1', value: 'HTTP NODE API'});
titleMain.setCSS({
  fontSize: '22px',
  margin: 0,
  padding: 0,
  color: 'white',
});

export const subtitleMain = makeText({tag: 'h2', value: 'Interface'});

subtitleMain.setCSS({
  fontSize: '18px',
  margin: 0,
  padding: 0,
  color: 'white',
});