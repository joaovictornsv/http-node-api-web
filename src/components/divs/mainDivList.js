import makeDiv from '../../factories/div.factory.js';

const mainDivList = makeDiv({ className: 'main'})

mainDivList.setCSS({
  minWidth: '100vw',
  minHeight: '100vh',
  backgroundColor: '#1a293b',
  flexDirection: 'column',
  justifyContent: 'start'
});

export default mainDivList;