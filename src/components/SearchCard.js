import React from 'react';

const SearchCard = ({ property, image }) => {
  property = property[0]

  var propertyString = ""

  if (property.yearBuilt) {
    propertyString += `Built in ${property.yearBuilt}. `
  }
  if (property.bedrooms && property.bathrooms) {
    propertyString += `${ property.bedrooms } bedrooms, ${ property.bathrooms } bathrooms. `
  }
  if (property.sqFeet) {
    propertyString += `Finished interior size: ${ property.sqFeet } square feet. `
  }
  if (property.lotSize) {
    propertyString += `Lot size: ${ property.lotSize } square feet.`
  }

  return(
    <div className="SearchCard">
      <div className="card">
        <div className="card__face card__face--front">
          <h4 className="cardText"><a href={ property.zillowLink } target="_blank" rel="noopener noreferrer" className="card-link">{ property.address }</a></h4>
          { property.lastSoldDate && property.lastSoldPrice && <p className="cardText">Last sold on { property.lastSoldDate } for ${ property.lastSoldPrice }</p> }
          <p className="cardText"><em>Click cards for more details.</em></p>
        </div>
        <div className="card__face card__face--back">
          { property.lastSoldDate && property.lastSoldPrice && <p className="cardText">Last sold on { property.lastSoldDate } for ${ property.lastSoldPrice }</p> }
          <p className="cardText">{propertyString}</p>
        </div>
      </div>
    </div>
  )
}

// <img src={ image } alt={ property.address } className="cardImage" onError={(e)=>{e.target.onerror = null; e.target.src="https://cdn.dribbble.com/users/440793/screenshots/2744373/dribble.jpg"}} />

export default SearchCard;
