import { makeDiv } from '../../factories/index.js'
import groupButtons from './groupButtons.js'
import headerMain from './headerMain.js'

const mainDiv = makeDiv({ className: 'main'})

mainDiv.setCSS({
  minWidth: '100vw',
  minHeight: '100vh',
  backgroundColor: '#1a293b',
  flexDirection: 'column'
});

mainDiv.append(headerMain.component);
mainDiv.append(groupButtons.component);


export default mainDiv;