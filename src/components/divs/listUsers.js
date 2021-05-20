import makeDiv from '../../factories/div.factory.js';

const listUsers = makeDiv({ className: 'main'})

listUsers.setCSS({
  flexDirection: 'column'
});

export default listUsers;