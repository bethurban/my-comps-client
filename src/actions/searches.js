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
  var property = []
  return dispatch => (
    fetch(`http://www.zillow.com/webservice/GetDeepComps.htm?zws-id=${ZWS_ID}&zpid=${zpid}&count=5`)
      .then(response => response.text())
      .then(text => (new window.DOMParser()).parseFromString(text, "text/xml"))
			.then(xml => xml.getElementsByTagName("principal")[0])
			.then(xml => {
       if (xml.childNodes) {
         var nodesArray = Array.from(xml.childNodes)
         var addressArray = Array.from(nodesArray.find(node => node.nodeName == 'address').childNodes)
         var linksArray = Array.from(nodesArray.find(node => node.nodeName == 'links').childNodes)
         var street = addressArray.find(node => node.nodeName == 'street').innerHTML
         var city = addressArray.find(node => node.nodeName == 'city').innerHTML
         var state = addressArray.find(node => node.nodeName == 'state').innerHTML
         var zip = addressArray.find(node => node.nodeName == 'zipcode').innerHTML
         var address = street + " " + city + ", " + state + " " + zip
         property.push(address)
         var yearBuilt = nodesArray.find(node => node.nodeName == 'yearBuilt').innerHTML
         property.push(yearBuilt)
         var sqFeet = nodesArray.find(node => node.nodeName == 'finishedSqFt').innerHTML
         property.push(sqFeet)
         var bedrooms = nodesArray.find(node => node.nodeName == 'bedrooms').innerHTML
         property.push(bedrooms)
         var bathrooms = nodesArray.find(node => node.nodeName == 'bathrooms').innerHTML
         property.push(bathrooms)
         var lotSize = nodesArray.find(node => node.nodeName == 'lotSizeSqFt').innerHTML
         property.push(lotSize)
         var lastSoldDate = nodesArray.find(node => node.nodeName == 'lastSoldDate').innerHTML
         property.push(lastSoldDate)
         var lastSoldPrice = nodesArray.find(node => node.nodeName == 'lastSoldPrice').innerHTML
         property.push(lastSoldPrice)
         var zillowLink = linksArray.find(node => node.nodeName == 'homedetails').innerHTML
         property.push(zillowLink)
         var zpid = nodesArray.find(node => node.nodeName == 'zpid').innerHTML
         property.push(zpid)
         return property
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
          var comparable = []
					for (let comp of comps) {
            comparable = []
						var street = comp.childNodes[2].childNodes[0].innerHTML
						var city = comp.childNodes[2].childNodes[2].innerHTML
						var state = comp.childNodes[2].childNodes[3].innerHTML
						var zip = comp.childNodes[2].childNodes[1].innerHTML
						var address = street + " " + city + ", " + state + " " + zip
            comparable.push(address)
            var yearBuilt = comp.childNodes[5].innerHTML
            comparable.push(yearBuilt)
            var sqFeet = comp.childNodes[7].innerHTML
            comparable.push(sqFeet)
            var bedrooms = comp.childNodes[9].innerHTML
            comparable.push(bedrooms)
            var bathrooms = comp.childNodes[8].innerHTML
            comparable.push(bathrooms)
            var lotSize = comp.childNodes[6].innerHTML
            comparable.push(lotSize)
            if (comp.childNodes[10].tagName === "totalRooms") {
              var lastSoldDate = comp.childNodes[11].innerHTML
              comparable.push(lastSoldDate)
              var lastSoldPrice = comp.childNodes[12].innerHTML
              comparable.push(lastSoldPrice)
            } else {
              lastSoldDate = comp.childNodes[10].innerHTML
              comparable.push(lastSoldDate)
              lastSoldPrice = comp.childNodes[11].innerHTML
              comparable.push(lastSoldPrice)
            }
            var zillowLink = comp.childNodes[1].childNodes[0].innerHTML
            comparable.push(zillowLink)
            var zpid = comp.childNodes[0].innerHTML
            comparable.push(zpid)
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
        dispatch(getSearchImage(zpid))
        dispatch(getComps(zpid))
      })
      .catch(error => {
        console.log(error)
        alert('This address was entered incorrectly, or Zillow does not have information on this address.')
      })
  }
}
