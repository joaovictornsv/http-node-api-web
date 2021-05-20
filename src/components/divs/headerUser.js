import makeDiv from '../../factories/div.factory.js';
import makeText from '../../factories/text.factory.js';

const headerUser = makeDiv({})

export const titleMain = makeText({tag: 'h1', value: 'Detalhes do usuário'});
titleMain.setCSS({
  fontSize: '22px',
  margin: 0,
  padding: 0,
  color: 'white',
});


headerUser.setCSS({
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '80px auto 40px', 
});

headerUser.append(titleMain);

export default headerUser;