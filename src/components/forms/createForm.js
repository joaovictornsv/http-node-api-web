import { makeForm, makeInput } from '../../factories/index.js';

const createForm = makeForm();

createForm.setCSS({
  flexDirection: 'column'
})

const nameInput = makeInput({ id: 'input_name', placeholder: 'Nome'});
const emailInput = makeInput({ id: 'input_name', placeholder: 'Email'});
const ageInput = makeInput({ id: 'input_name', placeholder: 'Idade', type: 'number'});

createForm.append(nameInput);
createForm.append(emailInput);
createForm.append(ageInput);

export default createForm;