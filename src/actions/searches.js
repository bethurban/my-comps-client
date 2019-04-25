// import { resetSearchForm } from './searchForm';

// const API_URL = process.env.REACT_APP_API_URL;

// ** Action Creators **
const setSearches = searches => {
  return {
    type: 'GET_SEARCHES_SUCCESS',
    searches
  }
}

// const addSearch = search => {
//   return {
//     type: 'CREATE_SEARCH_SUCCESS',
//     search
//   }
// }

// ** Async Actions **
export const getSearches = () => {
  return dispatch => (
    fetch('http://www.zillow.com/webservice/GetDeepComps.htm?zws-id=X1-ZWz1h1ekqqlfrf_70ucn&zpid=52635337&count=5')
      .then(resp => resp.json())
      .then(searches => dispatch(setSearches(searches)))
      // .then(resetSearchForm())
      .catch(error => console.log(error))
  )
}
//
// export const createSearch = search => {
//   return dispatch => {
//     return fetch(`${API_URL}/homes`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(home)
//     })
//       .then(resp => resp.json())
//       .then(home => {
//         dispatch(addHome(home))
//         dispatch(resetHomeForm())
//       })
//       .catch(error => console.log(error))
//   }
// }
