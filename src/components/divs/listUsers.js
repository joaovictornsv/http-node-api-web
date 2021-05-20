import makeDiv from '../../factories/div.factory.js';

const listUsers = makeDiv({ className: 'list-users'})

listUsers.setCSS({
  flexDirection: 'column'
});

export default listUsers;