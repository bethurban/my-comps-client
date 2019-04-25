export default (state = {
  name:'',
  address: ''
}, action) => {

  switch(action.type) {

    case 'UPDATED_DATA':
      return action.searchFormData

    default:
      return state;
  }
}
