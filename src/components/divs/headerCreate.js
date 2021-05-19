import { makeDiv, makeText } from '../../factories/index.js'

const headerCreate = makeDiv({})

export const titleMain = makeText({tag: 'h1', value: 'Criar um novo usuário'});
titleMain.setCSS({
  fontSize: '22px',
  margin: 0,
  padding: 0,
  color: 'white',
});

headerCreate.setCSS({
  flexDirection: 'column',
  justifyContent: 'center',
  marginBottom: '40px', 
});

headerCreate.append(titleMain);

export default headerCreate;