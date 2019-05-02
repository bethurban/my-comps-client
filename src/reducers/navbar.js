export default (state = {loggedIn: false}, action) => {
  switch(action.type) {

    case 'UPDATED_LOGIN':
      return {...state, loggedIn: action.login}

    default:
      return state;
  }
}
