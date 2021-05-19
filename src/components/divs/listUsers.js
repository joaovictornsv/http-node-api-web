import { makeDiv } from '../../factories/index.js'

const listUsers = makeDiv({ className: 'main'})

listUsers.setCSS({
  flexDirection: 'column'
});

export default listUsers;