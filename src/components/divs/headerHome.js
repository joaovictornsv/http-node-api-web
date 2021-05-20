import makeDiv from '../../factories/div.factory.js';
import makeText from '../../factories/text.factory.js';

const headerMain = makeDiv({})

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

headerMain.setCSS({
  flexDirection: 'column',
  justifyContent: 'center',
  marginBottom: '40px', 
});

headerMain.append(titleMain);
headerMain.append(subtitleMain);

export default headerMain;