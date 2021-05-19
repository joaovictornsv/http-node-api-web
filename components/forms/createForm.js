import makeForm from '../../factories/formFactory.js';
import makeInput from '../../factories/inputFactory.js';

const createForm = makeForm();

createForm.setCSS({
  flexDirection: 'column'
})

const nameInput = makeInput({ id: 'input_name', placeholder: 'Nome'});
const emailInput = makeInput({ id: 'input_name', placeholder: 'Email'});
const ageInput = makeInput({ id: 'input_name', placeholder: 'Idade', type: 'number'});

createForm.append(nameInput.component);
createForm.append(emailInput.component);
createForm.append(ageInput.component);

export default createForm;