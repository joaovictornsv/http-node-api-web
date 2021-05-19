import { makeDiv, makeText } from '../../factories/index.js'

const headerList = makeDiv({})

export const titleMain = makeText({tag: 'h1', value: 'Lista de usuários'});
titleMain.setCSS({
  fontSize: '22px',
  margin: 0,
  padding: 0,
  color: 'white',
});


headerList.setCSS({
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '120px auto 40px', 
});

headerList.append(titleMain);

export default headerList;