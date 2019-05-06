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

export const deleteSavedHome = home => {
  return {
    type: 'DELETE_HOME',
    home
  }
}

// ** Async Actions **
export const getHomes = user => {
  return dispatch => (
    fetch(`${API_URL}/users/${user}/homes`)
      .then(resp => resp.json())
      .then(homes => dispatch(setHomes(homes)))
      .catch(error => console.log(error))
  )
}

export const createHome = (home, user) => {
  return dispatch => {
    return fetch(`${API_URL}/users/${user}/homes`, {
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

export const deleteHome = home => {
  return dispatch => {
    return fetch(`${API_URL}/homes/${home}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: home})
    })
      .then(dispatch(deleteSavedHome(home)))
      .catch(error => console.log(error))
  }
}
