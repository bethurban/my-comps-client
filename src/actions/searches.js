// import { resetSearchForm } from './searchForm';

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
    fetch('http://www.zillow.com/webservice/GetDeepComps.htm?zws-id=X1-ZWz1h1ekqqlfrf_70ucn&zpid=48749425&count=2')
      .then(response => response.text())
      .then(text => (new window.DOMParser()).parseFromString(text, "text/xml"))
			.then(xml => xml.getElementsByTagName("principal")[0])
			.then(xml => {
				var street = xml.childNodes[2].childNodes[0].innerHTML
				var city = xml.childNodes[2].childNodes[2].innerHTML
				var state = xml.childNodes[2].childNodes[3].innerHTML
				var zip = xml.childNodes[2].childNodes[1].innerHTML
				var address = street + " " + city + ", " + state + " " + zip
				return address
			})
      .then(address => dispatch(setSearches(address)))
      .catch(error => console.log(error))
  )
}

export const getComps = () => {
	console.log("getComps")
	var addresses = []
	return dispatch => (
    fetch('http://www.zillow.com/webservice/GetDeepComps.htm?zws-id=X1-ZWz1h1ekqqlfrf_70ucn&zpid=48749425&count=2')
      .then(response => response.text())
      .then(text => (new window.DOMParser()).parseFromString(text, "text/xml"))
			.then(xml => xml.getElementsByTagName("comp"))
			.then(comps => {
					for (let comp of comps) {
						var street = comp.childNodes[2].childNodes[0].innerHTML
						var city = comp.childNodes[2].childNodes[2].innerHTML
						var state = comp.childNodes[2].childNodes[3].innerHTML
						var zip = comp.childNodes[2].childNodes[1].innerHTML
						var address = street + " " + city + ", " + state + " " + zip
						addresses.push(address)
					}
					return addresses
				}

			)
      .then(addresses => console.log(addresses))
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
