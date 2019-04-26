// import { resetSearchForm } from './searchForm';

// ** XML to JSON function **
function xmlToJson(xml) {

	// Create the return object
	var obj = {};

	if (xml.nodeType === 1) { // element
		// do attributes
		if (xml.attributes.length > 0) {
		obj["@attributes"] = {};
			for (var j = 0; j < xml.attributes.length; j++) {
				var attribute = xml.attributes.item(j);
				obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
			}
		}
	} else if (xml.nodeType === 3) { // text
		obj = xml.nodeValue;
	}

	// do children
	if (xml.hasChildNodes()) {
		for(var i = 0; i < xml.childNodes.length; i++) {
			var item = xml.childNodes.item(i);
			var nodeName = item.nodeName;
			if (typeof(obj[nodeName]) == "undefined") {
				obj[nodeName] = xmlToJson(item);
			} else {
				if (typeof(obj[nodeName].push) == "undefined") {
					var old = obj[nodeName];
					obj[nodeName] = [];
					obj[nodeName].push(old);
				}
				obj[nodeName].push(xmlToJson(item));
			}
		}
	}
	return obj;
};

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
    fetch('http://www.zillow.com/webservice/GetDeepComps.htm?zws-id=X1-ZWz1h1ekqqlfrf_70ucn&zpid=48749425&count=1')
      .then(response => response.text())
      .then(text => (new window.DOMParser()).parseFromString(text, "text/xml"))
      .then(xml => JSON.stringify(xmlToJson(xml)))
      .then(searches => dispatch(setSearches(searches)))
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
