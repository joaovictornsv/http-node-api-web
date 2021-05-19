import { makeButton } from '../../factories/index.js'

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

export default listButton;