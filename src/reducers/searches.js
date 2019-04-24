export default (state = [], action) => {
  switch(action.type) {
    
    case 'GET_SEARCHES_SUCCESS':
      return action.searches;

    default:
      return state;
  }
}
