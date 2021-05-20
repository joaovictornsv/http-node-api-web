import makeForm from '../../factories/form.factory.js';
import makeInput from '../../factories/input.factory.js';
import makeButton from '../../factories/button.factory.js';


const createForm = makeForm();

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

const nameInput = makeInput({ id: 'input_name', placeholder: 'Nome'});
const emailInput = makeInput({ id: 'input_email', placeholder: 'Email'});
const ageInput = makeInput({ id: 'input_age', placeholder: 'Idade', type: 'number'});
const cityInput = makeInput({ id: 'input_city', placeholder: 'Cidade'});

nameInput.setCSS(inputCSS, inputClickCSS);
emailInput.setCSS(inputCSS, inputClickCSS);
ageInput.setCSS(inputCSS, inputClickCSS);
cityInput.setCSS(inputCSS, inputClickCSS);

const submitButton = makeButton({ value: 'Criar', type: 'submit' });
submitButton.setCSS({
  backgroundColor: '#3fc1c9',
  border: 'none',
  borderRadius: '5px',
  color: 'white',
  fontSize: '18px',
  marginTop: '20px',
  transition: 'background-color 0.2s',
  width: '150px',
  height: '50px',
}, {
  backgroundColor: '#2B9197'
});

createForm.append(nameInput);
createForm.append(emailInput);
createForm.append(ageInput);
createForm.append(cityInput);
createForm.append(submitButton);

export default createForm;