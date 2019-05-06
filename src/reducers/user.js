export default (state = {user: ''}, action) => {
  switch(action.type) {

    case 'SET_USER_SUCCESS':
      return {...state, user: action.foundUser}

    case 'CREATE_USER_SUCCESS':
      return {...state, user: action.user}

    default:
      return state;
  }
}
