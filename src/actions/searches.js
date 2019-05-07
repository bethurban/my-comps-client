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

const setSearchImage = image => {
  return {
    type: 'GET_SEARCH_IMAGE_SUCCESS',
    image
  }
}

// ** Async Actions **
const getSearch = zpid => {
  // var property = []
  var property = {}
  return dispatch => (
    fetch(`http://www.zillow.com/webservice/GetDeepComps.htm?zws-id=${ZWS_ID}&zpid=${zpid}&count=5`)
      .then(response => response.text())
      .then(text => (new window.DOMParser()).parseFromString(text, "text/xml"))
			.then(xml => xml.getElementsByTagName("principal")[0])
			.then(xml => {
        if (xml.childNodes) {
         var nodesArray = Array.from(xml.childNodes)
         var addressArray = Array.from(nodesArray.find(node => node.nodeName === 'address').childNodes)
         var linksArray = Array.from(nodesArray.find(node => node.nodeName === 'links').childNodes)
         var street = addressArray.find(node => node.nodeName === 'street').innerHTML
         var city = addressArray.find(node => node.nodeName === 'city').innerHTML
         var state = addressArray.find(node => node.nodeName === 'state').innerHTML
         var zip = addressArray.find(node => node.nodeName === 'zipcode').innerHTML
         var lat = addressArray.find(node => node.nodeName === 'latitude').innerHTML
         property.lat = lat
         var long = addressArray.find(node => node.nodeName === 'longitude').innerHTML
         property.long = long
         var address = street + " " + city + ", " + state + " " + zip
         property.address = address
         if (nodesArray.find(node => node.nodeName === 'yearBuilt')) {
           var yearBuilt = nodesArray.find(node => node.nodeName === 'yearBuilt').innerHTML
           property.yearBuilt = yearBuilt
         }
         if (nodesArray.find(node => node.nodeName === 'finishedSqFt')) {
           var sqFeet = nodesArray.find(node => node.nodeName === 'finishedSqFt').innerHTML
           property.sqFeet = sqFeet
         }
         if (nodesArray.find(node => node.nodeName === 'bedrooms')) {
           var bedrooms = nodesArray.find(node => node.nodeName === 'bedrooms').innerHTML
           property.bedrooms = bedrooms
         }
         if (nodesArray.find(node => node.nodeName === 'bathrooms')) {
           var bathrooms = nodesArray.find(node => node.nodeName === 'bathrooms').innerHTML
           property.bathrooms = bathrooms
         }
         if (nodesArray.find(node => node.nodeName === 'lotSizeSqFt')) {
           var lotSize = nodesArray.find(node => node.nodeName === 'lotSizeSqFt').innerHTML
           property.lotSize = lotSize
         }
         if (nodesArray.find(node => node.nodeName === 'lastSoldDate')) {
           var lastSoldDate = nodesArray.find(node => node.nodeName === 'lastSoldDate').innerHTML
           property.lastSoldDate = lastSoldDate
         }
         if (nodesArray.find(node => node.nodeName === 'lastSoldPrice')) {
           var lastSoldPrice = nodesArray.find(node => node.nodeName === 'lastSoldPrice').innerHTML
           property.lastSoldPrice = lastSoldPrice
         }
         var zillowLink = linksArray.find(node => node.nodeName === 'homedetails').innerHTML
         property.zillowLink = zillowLink
         var zpid = nodesArray.find(node => node.nodeName === 'zpid').innerHTML
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
	var addresses = []
  var zpids = []
	return dispatch => (
    fetch(`http://www.zillow.com/webservice/GetDeepComps.htm?zws-id=${ZWS_ID}&zpid=${zpid}&count=5`)
      .then(response => response.text())
      .then(text => (new window.DOMParser()).parseFromString(text, "text/xml"))
			.then(xml => xml.getElementsByTagName("comp"))
			.then(comps => {
          var comparable = {}
					for (let comp of comps) {
            comparable = {}
            var compArray = Array.from(comp.childNodes)
            var compAddressArray = Array.from(compArray.find(node => node.nodeName === 'address').childNodes)
            var compLinksArray = Array.from(compArray.find(node => node.nodeName === 'links').childNodes)
            var street = compAddressArray.find(node => node.nodeName === 'street').innerHTML
            var city = compAddressArray.find(node => node.nodeName === 'city').innerHTML
            var state = compAddressArray.find(node => node.nodeName === 'state').innerHTML
            var zip = compAddressArray.find(node => node.nodeName === 'zipcode').innerHTML
            var lat = compAddressArray.find(node => node.nodeName === 'latitude').innerHTML
            comparable.lat = lat
            var long = compAddressArray.find(node => node.nodeName === 'longitude').innerHTML
            comparable.long = long
            var address = street + " " + city + ", " + state + " " + zip
            comparable.address = address
            if (compArray.find(node => node.nodeName === 'yearBuilt')) {
              var yearBuilt = compArray.find(node => node.nodeName === 'yearBuilt').innerHTML
              comparable.yearBuilt = yearBuilt
            }
            if (compArray.find(node => node.nodeName === 'finishedSqFt')) {
              var sqFeet = compArray.find(node => node.nodeName === 'finishedSqFt').innerHTML
              comparable.sqFeet = sqFeet
            }
            if (compArray.find(node => node.nodeName === 'bedrooms')) {
              var bedrooms = compArray.find(node => node.nodeName === 'bedrooms').innerHTML
              comparable.bedrooms = bedrooms
            }
            if (compArray.find(node => node.nodeName === 'bathrooms')) {
              var bathrooms = compArray.find(node => node.nodeName === 'bathrooms').innerHTML
              comparable.bathrooms = bathrooms
            }
            if (compArray.find(node => node.nodeName === 'lotSizeSqFt')) {
              var lotSize = compArray.find(node => node.nodeName === 'lotSizeSqFt').innerHTML
              comparable.lotSize = lotSize
            }
            if (compArray.find(node => node.nodeName === 'lastSoldDate')) {
              var lastSoldDate = compArray.find(node => node.nodeName === 'lastSoldDate').innerHTML
              comparable.lastSoldDate = lastSoldDate
            }
            if (compArray.find(node => node.nodeName === 'lastSoldPrice')) {
              var lastSoldPrice = compArray.find(node => node.nodeName === 'lastSoldPrice').innerHTML
              comparable.lastSoldPrice = lastSoldPrice
            }
            var zillowLink = compLinksArray.find(node => node.nodeName === 'homedetails').innerHTML
            comparable.zillowLink = zillowLink
            var zpid = compArray.find(node => node.nodeName === 'zpid').innerHTML
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

const getSearchImage = zpid => {
  var id = encodeURIComponent(zpid)
  return dispatch => (
    fetch(`http://www.zillow.com/webservice/GetUpdatedPropertyDetails.htm?zws-id=${ZWS_ID}&zpid=${id}`)
      .then(response => response.text())
      .then(text => (new window.DOMParser()).parseFromString(text, "text/xml"))
      .then(xml => xml.getElementsByTagName("image")[0].innerHTML)
      .then(image => dispatch(setSearchImage(image)))
      .catch(error => console.log(error))
  )
}

// export const getCompImages = zpids => {
//   var compImages = []
//   Promise.all(zpids.map(id => fetch(`http://www.zillow.com/webservice/GetUpdatedPropertyDetails.htm?zws-id=${ZWS_ID}&zpid=${id}`)
//     .then(response => response.text())
//     .then(text => (new window.DOMParser()).parseFromString(text, "text/xml"))
//     // .then(xml => xml.getElementsByTagName("image")[0])
//     .then(image => compImages.push(image.childNodes[0].childNodes[2].childNodes[4].innerHTML))
//   )).then(values => {console.log("promise finished:", values)}).then(setCompImages(compImages))
//   console.log("comp images here:", compImages)
// }

export const getZPID = search => {
  return dispatch => {
    fetch(`http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=${ZWS_ID}&address=${encodeURIComponent(search.address)}&citystatezip=${encodeURIComponent(search.citystate)}`)
      .then(response => response.text())
      .then(text => (new window.DOMParser()).parseFromString(text, "text/xml"))
      .then(xml => xml.getElementsByTagName("zpid")[0].innerHTML)
      .then(zpid => {
        dispatch(getSearch(zpid))
        //**** Want to only run the following if getSearch succeeds ****
        dispatch(getSearchImage(zpid))
        dispatch(getComps(zpid))
      })
      .catch(error => {
        console.log(error)
        alert('This address was entered incorrectly, or Zillow does not have information on this address.')
      })
  }
}
