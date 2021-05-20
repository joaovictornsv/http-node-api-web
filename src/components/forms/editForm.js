import makeForm from '../../factories/form.factory.js';
import makeInput from '../../factories/input.factory.js';
import makeButton from '../../factories/button.factory.js';

const params = new URLSearchParams(document.location.search.substring(1));

const editForm = makeForm();

const nameValue = params.get('name') || '';
const ageValue = params.get('age') || '';
const emailValue = params.get('email') || '';
const cityValue = params.get('city') || '';
const idValue = params.get('id') || '';

const updateUser = (query) => {
  const xhr = new XMLHttpRequest();
  return new Promise((resolve, reject) => {
    try {
    xhr.open('PUT', `http://localhost:3333/users/${idValue}/data?${query}`, true);
    xhr.send();

    xhr.onreadystatechange = function(){
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        }
        if (xhr.responseText) {
          reject(JSON.parse(xhr.responseText).error);
        } else {
          reject('Erro na requisição');
        }
      }
    }
    }catch(err) {
      alert(err)
    }
  })
}

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

editForm.setCSS({
  flexDirection: 'column'
})

editForm.setOnSubmit(async (e) => {
  e.preventDefault();

  const newName = document.getElementById('input_name').value;
  const newEmail = document.getElementById('input_email').value;
  const newAge = document.getElementById('input_age').value;
  const newCity = document.getElementById('input_city').value;

  const query = `name=${newName}&email=${newEmail}&age=${newAge}&city=${newCity}`;

  await updateUser(query)
    .then(() => {
      alert(`Usuário '${newName}' atualizado!`);
      window.location.assign('/users.html');
    })
    .catch((err) =>{
      alert(err)
    });
})

const nameInput = makeInput({ id: 'input_name', placeholder: 'Nome', value: nameValue});
const emailInput = makeInput({ id: 'input_email', placeholder: 'Email', value: emailValue});
const ageInput = makeInput({ id: 'input_age', placeholder: 'Idade', type: 'number', value: ageValue});
const cityInput = makeInput({ id: 'input_city', placeholder: 'Cidade', value: cityValue});

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
  transition: 'background-color 0.2s',
  width: '150px',
  height: '50px',
}, {
  backgroundColor: '#2B9197'
});

editForm.append(nameInput);
editForm.append(emailInput);
editForm.append(ageInput);
editForm.append(cityInput);
editForm.append(submitButton);

export default editForm;