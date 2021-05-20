import makeDiv from '../factories/div.factory.js';
import makeButton from '../factories/button.factory.js';
import makeText from '../factories/text.factory.js';

import mainDivList from '../components/divs/mainDivList.js';
import resetCSS from '../utils/reset.js';
import headerList from '../components/divs/headerList.js';
import listUsers from '../components/divs/listUsers.js';

resetCSS();


const getUsers = () => {
  const xhr = new XMLHttpRequest();
  return new Promise((resolve, reject) => {
    xhr.open('GET', 'http://localhost:3333/users', true);
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

function renderUsers(users) {
  users.forEach(user => {
    let card = makeDiv();
    card.setCSS({
      width: '450px',
      padding: '10px',
      borderBottom: '1px solid #cecece',
    });

    let groupText = makeDiv();
    groupText.setCSS({
      alignItems: 'start',
      flexDirection: 'column',
    });

    let name = makeText({tag: 'span', value: user.name});
    name.setCSS({
      color: 'white',
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '4px'
    });

    let email = makeText({tag: 'span', value: user.email});
    email.setCSS({
      color: 'white',
      fontSize: '16px'
    });

    groupText.append(name, email);


    let groupButton = makeDiv();
    groupButton.setCSS({
      justifyContent: 'space-between',
      flexDirection: 'row',
    });

    let seeButton = makeButton({ value: 'Ver' });

    seeButton.setCSS({
      backgroundColor: '#227FCE',
      borderRadius: '5px',
      border: 'none',
      color: 'white',
      fontSize: '14px',
      padding: '10px 15px',
      transition: 'background-color 0.2s'
    }, {
      backgroundColor: '#1A619E'
    });

    seeButton.setOnclick(() => {
      window.location.assign(`/user.html?id=${user.id}`)
    });

    let editButton = makeButton({ value: 'Editar' });
    editButton.setCSS({
      backgroundColor: '#21DEC1',
      borderRadius: '5px',
      border: 'none',
      color: 'black',
      fontSize: '14px',
      padding: '10px 15px',
      transition: 'background-color 0.2s'
    }, {
      backgroundColor: '#1AAD97'
    });

    editButton.setOnclick(() => {
      window.location.assign(`/edit.html?name=${user.name}&age=${user.age}&email=${user.email}&city=${user.city}`)
    });


    let deleteButton = makeButton({ value: 'Deletar' });

    deleteButton.setCSS({
      backgroundColor: '#e23e57',
      borderRadius: '5px',
      border: 'none',
      color: 'white',
      fontSize: '14px',
      padding: '10px 15px',
      transition: 'background-color 0.2s'
    }, {
      backgroundColor: '#BA1C34'
    });

    deleteButton.setOnclick(() => {
      let sure = confirm(`Tem certeza que deseja deletar '${user.name}'?`);

      if (sure) {
        alert(`Usuário '${user.name}' deletado!`)
        window.location.reload()
      }
    });

    groupButton.append(seeButton, editButton, deleteButton);

    card.append(groupText);
    card.append(groupButton);

    listUsers.append(card);
  })
}


function renderNotFoundUsers(text=''){
  let message = makeText({tag: 'span', value: text});
  message.setCSS({
    color: 'white',
    fontSize: '22px',
    margin: '40px 0 60px'
  });
  listUsers.append(message);
}

async function CreatePage() {
  mainDivList.initOnRoot();
  mainDivList.append(headerList);
  mainDivList.append(listUsers);
  
  await getUsers()
  .then((response) => {
    if (response.length > 0) {
      renderUsers(response);
    } else {
      renderNotFoundUsers('Sem usuários')
    }
  })
  .catch(() =>{
    renderNotFoundUsers('Erro na requisição')
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
    window.location.assign('/index.html')
  })

  listUsers.append(backButton);
  
}

export default CreatePage();
