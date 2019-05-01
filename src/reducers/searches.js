export default (state = {search: "", comps: [], searchImage: ""}, action) => {
  switch(action.type) {

    case 'GET_SEARCH_SUCCESS':
      return {...state, search: action.search};

    case 'GET_COMPS_SUCCESS':
      return {...state, comps: action.comps};

    case 'GET_SEARCH_IMAGE_SUCCESS':
      return {...state, searchImage: action.image}

    // case 'GET_COMP_IMAGES_SUCCESS':
    //   return {...state, compImages: action.images}

    case 'CREATE_SEARCH_SUCCESS':
      return state.concat(action.search);

    default:
      return state;
  }
}
