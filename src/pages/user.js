import makeDiv from '../factories/div.factory.js';
import makeButton from '../factories/button.factory.js';
import makeText from '../factories/text.factory.js';

import mainDivList from '../components/divs/mainDivList.js';
import resetCSS from '../utils/reset.js';
import headerUser from '../components/divs/headerUser.js';
import listUsers from '../components/divs/listUsers.js';

resetCSS();

const params = new URLSearchParams(document.location.search.substring(1));
const idValue = params.get('id');


const getUser = (id) => {
  const xhr = new XMLHttpRequest();
  return new Promise((resolve, reject) => {
    xhr.open('GET', `http://localhost:3333/users/${id}`, true);
    xhr.send();

    xhr.onreadystatechange = function(){
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        }
        else {
          reject('Erro na requisição');
        }
      }
    }
})
}


function renderUserInfo(user) {
  let card = makeDiv({ className: 'groupFields'});
  card.setCSS({
    width: '450px',
    padding: '10px',
    height: '300px',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: '40px'
  });

  let nameField = makeDiv();
  nameField.setCSS({
    alignItems: 'start',
    flexDirection: 'column',
    height: 'max-content',
  });

  let nameLegend = makeText({tag: 'span', value: 'Nome:'});
  nameLegend.setCSS({
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '6px'
  });
  let nameValue = makeText({tag: 'span', value: user.name});
  nameValue.setCSS({
    color: 'white',
    fontSize: '22px',
    marginBottom: '4px'
  });


  let emailField = makeDiv();
  emailField.setCSS({
    alignItems: 'start',
    flexDirection: 'column',
    height: 'max-content',
  });

  let emailLegend = makeText({tag: 'span', value: 'Email:'});
  emailLegend.setCSS({
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '6px'
  });
  let emailValue = makeText({tag: 'span', value: user.email});
  emailValue.setCSS({
    color: 'white',
    fontSize: '22px',
    marginBottom: '4px'
  });


  let ageField = makeDiv();
  ageField.setCSS({
    alignItems: 'start',
    flexDirection: 'column',
    height: 'max-content',
  });

  let ageLegend = makeText({tag: 'span', value: 'Idade:'});
  ageLegend.setCSS({
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '6px'
  });
  let ageValue = makeText({tag: 'span', value: user.age});
  ageValue.setCSS({
    color: 'white',
    fontSize: '22px',
    marginBottom: '4px'
  });


  let cityField = makeDiv();
  cityField.setCSS({
    alignItems: 'start',
    flexDirection: 'column',
    height: 'max-content',
  });

  let cityLegend = makeText({tag: 'span', value: 'Cidade:'});
  cityLegend.setCSS({
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '6px'
  });
  let cityValue = makeText({tag: 'span', value: user.city});
  cityValue.setCSS({
    color: 'white',
    fontSize: '22px',
    marginBottom: '4px'
  });


  nameField.append(nameLegend, nameValue);
  emailField.append(emailLegend, emailValue);
  ageField.append(ageLegend, ageValue);
  cityField.append(cityLegend, cityValue);

  card.append(nameField, emailField, ageField, cityField);

  listUsers.append(card);
}


function renderNotFoundUser(text){
  let message = makeText({tag: 'span', value: text});
  message.setCSS({
    color: 'white',
    fontSize: '22px',
    margin: '40px 0 60px'
  });
  listUsers.append(message);
}

async function UserPage() {
  mainDivList.initOnRoot();
  mainDivList.append(headerUser);
  mainDivList.append(listUsers);
  
  await getUser(idValue)
  .then((response) => {
    renderUserInfo(response);
  })
  .catch(() =>{
    renderNotFoundUser('Erro na requisição do usuário')
  });

  const backButton = makeButton({ value: 'Voltar' });
  backButton.setCSS({
    backgroundColor: '#3fc1c9',
    border: 'none',
    borderRadius: '5px',
    color: 'black',
    fontSize: '18px',
    marginTop: '20px',
    transition: 'background-color 0.2s',
    width: '150px',
    height: '50px',
  }, {
    backgroundColor: '#2B9197'
  });

  backButton.setOnclick(() => {
    window.location.assign('/users.html')
  })

  listUsers.append(backButton);

}

export default UserPage();
