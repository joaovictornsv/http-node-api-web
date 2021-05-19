import { makeDiv } from '../../factories/index.js'
import createButton from '../buttons/createButton.js'
import listButton from '../buttons/listButton.js'


const groupButtons = makeDiv({ className: 'group-buttons'})

groupButtons.setCSS({
  height: '160px',
  justifyContent: 'space-evenly',
  flexDirection: 'column'
});

listButton.setOnclick(() => {
  window.location.assign('/users.html')
});

createButton.setOnclick(() => {
  window.location.assign('/create.html')
});

groupButtons.append(listButton.component);
groupButtons.append(createButton.component);


export default groupButtons;