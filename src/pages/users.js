import makeDiv from '../factories/div.factory.js';
import makeButton from '../factories/button.factory.js';
import makeText from '../factories/text.factory.js';

import mainDivList from '../components/divs/mainDivList.js';
import resetCSS from '../utils/reset.js';
import headerList from '../components/divs/headerList.js';
import listUsers from '../components/divs/listUsers.js';

resetCSS();

const users = [
  {
    name: 'João Victor',
    email: 'joao@email.com',
    age: 19,
    city: 'Campina Grande'
  },
  {
    name: 'Vinicius',
    email: 'vini@email.com',
    age: 19,
    city: 'Esperança'
  },
  {
    name: 'Lucas Bivar',
    email: 'bivar@email.com',
    age: 18,
    city: 'João Pessoa'
  }
]


function CreatePage() {
  mainDivList.initOnRoot();
  mainDivList.append(headerList);
  mainDivList.append(listUsers);
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

export default CreatePage();
