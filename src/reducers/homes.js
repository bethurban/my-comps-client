export default (state = [], action) => {
  switch(action.type) {

    case 'GET_HOMES_SUCCESS':
      return action.homes;

    case 'CREATE_HOME_SUCCESS':
      return state.concat(action.home);

    case 'DELETE_HOME':
      const homeId = action.home
      return state.filter(home => home.id !== homeId)

    default:
      return state;
  }
}
