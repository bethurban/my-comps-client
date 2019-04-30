// import { resetSearchForm } from './searchForm';

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


export const getSearch = zpid => {
  console.log("getSearch", zpid)
  var property = []
  var id = encodeURIComponent(zpid)
  console.log("url: ", `http://www.zillow.com/webservice/GetDeepComps.htm?zws-id=${ZWS_ID}&zpid=${id}&count=5`)
  return dispatch => (
    fetch(`http://www.zillow.com/webservice/GetDeepComps.htm?zws-id=${ZWS_ID}&zpid=${id}&count=5`)
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
    fetch(`http://www.zillow.com/webservice/GetDeepComps.htm?zws-id=${ZWS_ID}&zpid=48749425&count=5`)
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
            var lastSoldDate = comp.childNodes[10].innerHTML
            comparable.push(lastSoldDate)
            var lastSoldPrice = comp.childNodes[11].innerHTML
            comparable.push(lastSoldPrice)
						addresses.push(comparable)
					}
					return addresses
				})
      .then(addresses => dispatch(setComps(addresses)))
      .catch(error => console.log(error))
  )
}

export const getSearchImage = zpid => {
  console.log("getSearchImage")
  var id = encodeURIComponent(zpid)
  console.log("image search:", `http://www.zillow.com/webservice/GetUpdatedPropertyDetails.htm?zws-id=${ZWS_ID}&zpid=${id}`)
  return dispatch => (
    fetch(`http://www.zillow.com/webservice/GetUpdatedPropertyDetails.htm?zws-id=${ZWS_ID}&zpid=${id}`)
      .then(response => response.text())
      .then(text => (new window.DOMParser()).parseFromString(text, "text/xml"))
      .then(xml => xml.getElementsByTagName("image")[0].innerHTML)
      .then(image => dispatch(setSearchImage(image)))
      .catch(error => console.log(error))
  )
}

export const getZPID = search => {
  return dispatch => {
    console.log("getting ZPID")
    fetch(`http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=${ZWS_ID}&address=${encodeURIComponent(search.address)}&citystatezip=${encodeURIComponent(search.citystate)}`)
      .then(response => response.text())
      .then(text => (new window.DOMParser()).parseFromString(text, "text/xml"))
      .then(xml => xml.getElementsByTagName("zpid")[0].innerHTML)
      .then(zpid => {
        dispatch(getSearch(zpid))
        dispatch(getSearchImage(zpid))
      })
      .catch(error => console.log(error))
  }
}
