const initialState = {
  street:'',
  citystate: ''
}

export default (state = initialState, action) => {

  switch(action.type) {

    case 'UPDATED_FORM':
      return action.searchFormData

    case 'RESET_SEARCH_FORM':
      return initialState;

    default:
      return state;
  }
}
