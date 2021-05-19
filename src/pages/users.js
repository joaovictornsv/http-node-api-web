import { makeDiv, makeText } from '../factories/index.js'
import mainDivList from '../components/divs/mainDivList.js';
import resetCSS from '../utils/reset.js'
import headerList from '../components/divs/headerList.js'
import listUsers from '../components/divs/listUsers.js';

const users = [{
  name: 'João Victor',
  email: 'joao@email.com',
}, {
  name: 'João Victor',
  email: 'joao@email.com',
},
{
  name: 'João Victor',
  email: 'joao@email.com',
},
{
  name: 'João Victor',
  email: 'joao@email.com',
},
{
  name: 'João Victor',
  email: 'joao@email.com',
}]

resetCSS();

function CreatePage() {
  mainDivList.initOnRoot();
  mainDivList.append(headerList);
  mainDivList.append(listUsers);
  users.forEach(user => {
    let card = makeDiv();
    card.setCSS({
      width: '300px',
      padding: '10px',
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

    card.append(name, email);

    listUsers.append(card);
  })

}

export default CreatePage();
