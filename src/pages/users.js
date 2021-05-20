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
      width: '300px',
      padding: '10px',
    });

    let groupText = makeDiv();
    groupText.setCSS({
      alignItems: 'start',
      flexDirection: 'column',
    });

    let name = makeText({tag: 'span', value: user.name});
    name.setCSS({
      color: 'white',
      fontSize: '18px',
    });

    let email = makeText({tag: 'span', value: user.email});
    email.setCSS({
      color: 'white'
    });

    groupText.append(name, email);


    let groupButton = makeDiv();
    groupButton.setCSS({
      alignItems: 'space-between',
      flexDirection: 'row',
    });
    let editButton = makeButton({ value: 'Editar' });

    editButton.setOnclick(() => {
      window.location.assign(`/edit.html?name=${user.name}&age=${user.age}&email=${user.email}&city=${user.city}`)
    });

    let seeButton = makeButton({ value: 'Ver' });

    let deleteButton = makeButton({ value: 'Deletar' });
    deleteButton.setOnclick(() => {
      let sure = confirm('Tem certeza que deseja deletar?');

      if (sure) {
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
