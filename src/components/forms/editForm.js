import { makeForm, makeInput, makeButton } from '../../factories/index.js';

const params = new URLSearchParams(document.location.search.substring(1));

const createForm = makeForm();

const nameValue = params.get('name') || '';

const inputCSS = {
  width: '250px',
  fontSize: '18px',
  padding: '10px',
  borderRadius: '4px',
  border: '2px solid #fff',
  outline: 'none',
  margin: '5px auto'
}

const inputClickCSS = {
  border: '2px solid #3fc1c9'
}

createForm.setCSS({
  flexDirection: 'column'
})

createForm.setOnSubmit((e) => {
  e.preventDefault();
})

const nameInput = makeInput({ id: 'input_name', placeholder: 'Nome', value: nameValue});
const emailInput = makeInput({ id: 'input_email', placeholder: 'Email', value: 'joao@email.com'});
const ageInput = makeInput({ id: 'input_age', placeholder: 'Idade', type: 'number', value: 19});
const cityInput = makeInput({ id: 'input_city', placeholder: 'Cidade', value: 'Campina Grande'});

nameInput.setCSS(inputCSS, inputClickCSS);
emailInput.setCSS(inputCSS, inputClickCSS);
ageInput.setCSS(inputCSS, inputClickCSS);
cityInput.setCSS(inputCSS, inputClickCSS);

const submitButton = makeButton({ value: 'Salvar', type: 'submit' });
submitButton.setCSS({
  backgroundColor: '#3fc1c9',
  border: 'none',
  borderRadius: '5px',
  color: 'white',
  fontSize: '18px',
  marginTop: '20px',
  transition: 'background-color 0.2s'
}, {
  backgroundColor: '#2B9197'
});

createForm.append(nameInput);
createForm.append(emailInput);
createForm.append(ageInput);
createForm.append(cityInput);
createForm.append(submitButton);

export default createForm;