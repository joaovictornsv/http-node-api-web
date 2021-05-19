import { makeButton } from '../../factories/index.js'

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
})

export default createButton;