const initialState = {
  name:'',
  address: ''
}

export default (state = initialState, action) => {

  switch(action.type) {

    case 'UPDATED_DATA':
      return action.searchFormData

    case 'RESET_SEARCH_FORM':
      return initialState;

    default:
      return state;
  }
}
