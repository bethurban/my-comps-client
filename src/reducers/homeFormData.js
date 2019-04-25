const initialState = {
  name:'',
  address: ''
}

export default (state = initialState, action) => {

  switch(action.type) {

    case 'UPDATED_DATA':
      return action.homeFormData

    case 'RESET_HOME_FORM':
      return initialState;

    default:
      return state;
  }
}
