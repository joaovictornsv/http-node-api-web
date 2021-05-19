import { makeDiv } from '../../factories/index.js'
import { titleMain, subtitleMain } from '../texts/titleMain.js'

const headerMain = makeDiv({})

headerMain.setCSS({
  flexDirection: 'column',
  justifyContent: 'center',
  marginBottom: '40px', 
});

headerMain.append(titleMain);
headerMain.append(subtitleMain);

export default headerMain;