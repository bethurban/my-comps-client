export default (state = {search: "", comps: []}, action) => {
  switch(action.type) {

    case 'GET_SEARCHES_SUCCESS':
      return {...state, search: action.searches};

    case 'GET_COMPS_SUCCESS':
      return {...state, comps: action.comps};

    case 'CREATE_SEARCH_SUCCESS':
      return state.concat(action.search);

    default:
      return state;
  }
}
