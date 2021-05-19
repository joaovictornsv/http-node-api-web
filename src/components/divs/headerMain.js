import { makeDiv } from '../../factories/index.js'
import { titleMain, subtitleMain } from '../texts/titleMain.js'

const headerMain = makeDiv({})

headerMain.setCSS({
  flexDirection: 'column',
  justifyContent: 'center',
  marginBottom: '40px', 
});

headerMain.append(titleMain.component);
headerMain.append(subtitleMain.component);

export default headerMain;