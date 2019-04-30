// import { resetSearchForm } from './searchForm';

// ** Action Creators **
const setSearch = search => {
  return {
    type: 'GET_SEARCH_SUCCESS',
    search
  }
}

const setComps = comps => {
	return {
		type: 'GET_COMPS_SUCCESS',
		comps
	}
}

// const addSearch = search => {
//   return {
//     type: 'CREATE_SEARCH_SUCCESS',
//     search
//   }
// }

// ** Async Actions **
export const getSearch = () => {
  console.log("getSearch")
  var property = []
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
        property.push(address)
        var yearBuilt = xml.childNodes[5].innerHTML
        property.push(yearBuilt)
        var sqFeet = xml.childNodes[7].innerHTML
        property.push(sqFeet)
        var bedrooms = xml.childNodes[9].innerHTML
        property.push(bedrooms)
        var bathrooms = xml.childNodes[8].innerHTML
        property.push(bathrooms)
        var lotSize = xml.childNodes[6].innerHTML
        property.push(lotSize)
        return property
			})
      .then(property => dispatch(setSearch(property)))
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
				})
      // var yearBuilt = xml.childNodes[5].innerHTML
      // var bathrooms = xml.childNodes[8].innerHTML
      // var bedrooms = xml.childNodes[9].innerHTML
      // var lotSize = xml.childNodes[6].innerHTML
      // var sqFeet = xml.childNodes[7].innerHTML
      // var lastSoldDate = xml.childNodes[10].innerHTML
      // var lastSoldPrice = xml.childNodes[11].innerHTML
      .then(addresses => dispatch(setComps(addresses)))
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
