import { makeDiv } from '../../factories/index.js'

const mainDiv = makeDiv({ className: 'main'})

mainDiv.setCSS({
  minWidth: '100vw',
  minHeight: '100vh',
  backgroundColor: '#1a293b',
  flexDirection: 'column'
});

export default mainDiv;