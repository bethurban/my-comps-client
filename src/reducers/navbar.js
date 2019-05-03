export default (state = {loggedIn: false}, action) => {

  console.log(action)
  
  switch(action.type) {

    case 'UPDATED_LOGIN':
      return {...state, loggedIn: action.login}

    default:
      return state;
  }
}
