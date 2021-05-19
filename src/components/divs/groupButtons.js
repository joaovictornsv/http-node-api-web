import { makeDiv, makeButton } from '../../factories/index.js'

const groupButtons = makeDiv({ className: 'group-buttons'})

groupButtons.setCSS({
  height: '160px',
  justifyContent: 'space-evenly',
  flexDirection: 'column'
});

const listButton = makeButton({ value: 'Listar usuários', className: 'list-button' });

listButton.setCSS({
  backgroundColor: '#3490de',
  borderRadius: '5px',
  border: 'none',
  color: 'white',
  fontSize: '18px',

  transition: 'background-color 0.2s'
}, {
  backgroundColor: '#18568b'
});

listButton.setOnclick(() => {
  window.location.assign('/users.html')
});


const createButton = makeButton({ value: 'Criar usuário', className: 'create-button' });

createButton.setCSS({
  backgroundColor: '#3fc1c9',
  border: 'none',
  borderRadius: '5px',
  color: 'white',
  fontSize: '18px',

  transition: 'background-color 0.2s'
}, {
  backgroundColor: '#2B9197'
});

createButton.setOnclick(() => {
  window.location.assign('/create.html')
});


groupButtons.append(listButton);
groupButtons.append(createButton);


export default groupButtons;