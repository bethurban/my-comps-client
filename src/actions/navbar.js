const API_URL = process.env.REACT_APP_API_URL;

// * Action Creators *

const setUser = (users, email) => {
  var foundUser = users.find(user => user.email === email)

  if (foundUser) {
    return {
      type: 'SET_USER_SUCCESS',
      foundUser
    }
  } else {
    createUser(email)
  }
}

const addUser = user => {
  return {
    type: 'CREATE_USER_SUCCESS',
    user
  }
}

// * Async Actions *

export const checkUser = email => {
  return dispatch => (
    fetch(`${API_URL}/users`)
    .then(resp => resp.json())
    .then(users => dispatch(setUser(users, email)))
    .catch(error => console.log(error))
  )
}

const createUser = email => {
  return dispatch => {
    return fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(email)
    })
      .then(resp => resp.json())
      .then(user => dispatch(addUser(user)))
      .catch(error => console.log(error))
  }
}
