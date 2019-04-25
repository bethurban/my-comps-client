const API_URL = process.env.REACT_APP_API_URL;

// ** Action Creators **
const setSearches = searches => {
  return {
    type: 'GET_SEARCHES_SUCCESS',
    searches
  }
}

// ** Async Actions **
export const getSearches = () => {
  return dispatch => (
    fetch(`${API_URL}/searches`)
      .then(resp => resp.json())
      .then(searches => dispatch(setSearches(searches)))
      .catch(error => console.log(error))
  )
}

export const createSearch = search => {
  return dispatch => {
    return fetch(`${API_URL}/searches`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(search)
    })
      .then(resp => resp.json())
      .then(search => {
        debugger})
      .catch(error => console.log(error))
  }
}
