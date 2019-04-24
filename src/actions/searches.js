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
      .then(searches => dispatch(setSearches))
      .catch(error => console.log(error))
  )
}
