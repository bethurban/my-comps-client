import { resetSearchForm } from './searchForm';

const ZWS_ID = process.env.REACT_APP_ZWS_ID

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

// ** Async Actions **
const getSearch = zpid => {
  let property = {}
  return dispatch => (
    fetch(`https://cors-anywhere.herokuapp.com/https://www.zillow.com/webservice/GetDeepComps.htm?zws-id=${ZWS_ID}&zpid=${zpid}&count=5`)
      .then(response => response.text())
      .then(text => (new window.DOMParser()).parseFromString(text, "text/xml"))
			.then(xml => xml.getElementsByTagName("principal")[0])
			.then(xml => {
        if (xml.childNodes) {
         let nodesArray = Array.from(xml.childNodes)
         let addressArray = Array.from(nodesArray.find(node => node.nodeName === 'address').childNodes)
         let linksArray = Array.from(nodesArray.find(node => node.nodeName === 'links').childNodes)
         let street = addressArray.find(node => node.nodeName === 'street').innerHTML
         let city = addressArray.find(node => node.nodeName === 'city').innerHTML
         let state = addressArray.find(node => node.nodeName === 'state').innerHTML
         let zip = addressArray.find(node => node.nodeName === 'zipcode').innerHTML
         let lat = addressArray.find(node => node.nodeName === 'latitude').innerHTML
         property.lat = lat
         let long = addressArray.find(node => node.nodeName === 'longitude').innerHTML
         property.long = long
         let address = street + " " + city + ", " + state + " " + zip
         property.address = address
         if (nodesArray.find(node => node.nodeName === 'yearBuilt')) {
           let yearBuilt = nodesArray.find(node => node.nodeName === 'yearBuilt').innerHTML
           property.yearBuilt = yearBuilt
         }
         if (nodesArray.find(node => node.nodeName === 'finishedSqFt')) {
           let sqFeet = nodesArray.find(node => node.nodeName === 'finishedSqFt').innerHTML
           property.sqFeet = sqFeet
         }
         if (nodesArray.find(node => node.nodeName === 'bedrooms')) {
           let bedrooms = nodesArray.find(node => node.nodeName === 'bedrooms').innerHTML
           property.bedrooms = bedrooms
         }
         if (nodesArray.find(node => node.nodeName === 'bathrooms')) {
           let bathrooms = nodesArray.find(node => node.nodeName === 'bathrooms').innerHTML
           property.bathrooms = bathrooms
         }
         if (nodesArray.find(node => node.nodeName === 'lotSizeSqFt')) {
           let lotSize = nodesArray.find(node => node.nodeName === 'lotSizeSqFt').innerHTML
           property.lotSize = lotSize
         }
         if (nodesArray.find(node => node.nodeName === 'lastSoldDate')) {
           let lastSoldDate = nodesArray.find(node => node.nodeName === 'lastSoldDate').innerHTML
           property.lastSoldDate = lastSoldDate
         }
         if (nodesArray.find(node => node.nodeName === 'lastSoldPrice')) {
           let lastSoldPrice = nodesArray.find(node => node.nodeName === 'lastSoldPrice').innerHTML
           property.lastSoldPrice = lastSoldPrice
         }
         let zillowLink = linksArray.find(node => node.nodeName === 'homedetails').innerHTML
         property.zillowLink = zillowLink
         let zpid = nodesArray.find(node => node.nodeName === 'zpid').innerHTML
         property.zpid = zpid
         return [property]
       }})
      .then(property => {
        dispatch(setSearch(property))
        dispatch(resetSearchForm())
      })
      .catch(error => {
        console.log(error)
        alert('This address was entered incorrectly, or Zillow does not have information on this address.')
      })
  )
}

const getComps = zpid => {
	let addresses = []
  let zpids = []
	return dispatch => (
    fetch(`https://cors-anywhere.herokuapp.com/https://www.zillow.com/webservice/GetDeepComps.htm?zws-id=${ZWS_ID}&zpid=${zpid}&count=5`)
      .then(response => response.text())
      .then(text => (new window.DOMParser()).parseFromString(text, "text/xml"))
			.then(xml => xml.getElementsByTagName("comp"))
			.then(comps => {
					for (let comp of comps) {
            let comparable = {}
            let compArray = Array.from(comp.childNodes)
            let compAddressArray = Array.from(compArray.find(node => node.nodeName === 'address').childNodes)
            let compLinksArray = Array.from(compArray.find(node => node.nodeName === 'links').childNodes)
            let street = compAddressArray.find(node => node.nodeName === 'street').innerHTML
            let city = compAddressArray.find(node => node.nodeName === 'city').innerHTML
            let state = compAddressArray.find(node => node.nodeName === 'state').innerHTML
            let zip = compAddressArray.find(node => node.nodeName === 'zipcode').innerHTML
            let lat = compAddressArray.find(node => node.nodeName === 'latitude').innerHTML
            comparable.lat = lat
            let long = compAddressArray.find(node => node.nodeName === 'longitude').innerHTML
            comparable.long = long
            let address = street + " " + city + ", " + state + " " + zip
            comparable.address = address
            if (compArray.find(node => node.nodeName === 'yearBuilt')) {
              let yearBuilt = compArray.find(node => node.nodeName === 'yearBuilt').innerHTML
              comparable.yearBuilt = yearBuilt
            }
            if (compArray.find(node => node.nodeName === 'finishedSqFt')) {
              let sqFeet = compArray.find(node => node.nodeName === 'finishedSqFt').innerHTML
              comparable.sqFeet = sqFeet
            }
            if (compArray.find(node => node.nodeName === 'bedrooms')) {
              let bedrooms = compArray.find(node => node.nodeName === 'bedrooms').innerHTML
              comparable.bedrooms = bedrooms
            }
            if (compArray.find(node => node.nodeName === 'bathrooms')) {
              let bathrooms = compArray.find(node => node.nodeName === 'bathrooms').innerHTML
              comparable.bathrooms = bathrooms
            }
            if (compArray.find(node => node.nodeName === 'lotSizeSqFt')) {
              let lotSize = compArray.find(node => node.nodeName === 'lotSizeSqFt').innerHTML
              comparable.lotSize = lotSize
            }
            if (compArray.find(node => node.nodeName === 'lastSoldDate')) {
              let lastSoldDate = compArray.find(node => node.nodeName === 'lastSoldDate').innerHTML
              comparable.lastSoldDate = lastSoldDate
            }
            if (compArray.find(node => node.nodeName === 'lastSoldPrice')) {
              let lastSoldPrice = compArray.find(node => node.nodeName === 'lastSoldPrice').innerHTML
              comparable.lastSoldPrice = lastSoldPrice
            }
            let zillowLink = compLinksArray.find(node => node.nodeName === 'homedetails').innerHTML
            comparable.zillowLink = zillowLink
            let zpid = compArray.find(node => node.nodeName === 'zpid').innerHTML
            comparable.zpid = zpid
            zpids.push(zpid)
						addresses.push(comparable)
					}
					return addresses
				})
      .then(addresses => dispatch(setComps(addresses)))
      .catch(error => {
        console.log(error)
        alert('Zillow does not have information on comparable properties for this address.')
      })
  )
}

export const getZPID = search => {
  var request = new Request(`https://cors-anywhere.herokuapp.com/https://www.zillow.com/webservice/GetSearchResults.htm?zws-id=${ZWS_ID}&address=${encodeURIComponent(search.address)}&citystatezip=${encodeURIComponent(search.citystate)}`, {
    headers: new Headers({
      'X-Requested-With': 'XMLHttpRequest'
    })
  });

  return dispatch => {
    fetch(request)
      .then(response => response.text())
      .then(text => (new window.DOMParser()).parseFromString(text, "text/xml"))
      .then(xml => xml.getElementsByTagName("zpid")[0].innerHTML)
      .then(zpid => {
        dispatch(getSearch(zpid))
        dispatch(getComps(zpid))
      })
      .catch(error => {
        console.log(error)
        alert('This address was entered incorrectly, or Zillow does not have information on this address.')
      })
  }
}
