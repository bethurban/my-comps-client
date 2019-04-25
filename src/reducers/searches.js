export default (state = [], action) => {
  switch(action.type) {

    case 'GET_SEARCHES_SUCCESS':
      return action.searches;

    case 'CREATE_SEARCH_SUCCESS':
      return state.concat(action.search);

    default:
      return state;
  }
}
