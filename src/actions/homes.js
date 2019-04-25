import { resetHomeForm } from './homeForm';

const API_URL = process.env.REACT_APP_API_URL;

// ** Action Creators **
const setHomes = homes => {
  return {
    type: 'GET_HOMES_SUCCESS',
    homes
  }
}

const addHome = home => {
  return {
    type: 'CREATE_HOME_SUCCESS',
    home
  }
}

// ** Async Actions **
export const getHomes = () => {
  return dispatch => (
    fetch(`${API_URL}/homes`)
      .then(resp => resp.json())
      .then(homes => dispatch(setHomes(homes)))
      .catch(error => console.log(error))
  )
}

export const createHome = home => {
  return dispatch => {
    return fetch(`${API_URL}/homes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(home)
    })
      .then(resp => resp.json())
      .then(home => {
        dispatch(addHome(home))
        dispatch(resetHomeForm())
      })
      .catch(error => console.log(error))
  }
}
