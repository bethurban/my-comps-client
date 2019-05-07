import React from 'react';

const SearchCard = ({ property, image }) => {
  property = property[0]
  return(
    <div className="SearchCard">
      <div className="card">
        <div className="card__face card__face--front">
          <h3>Searched property</h3>
          <h4>{ property.address }</h4>
          { property.lastSoldDate && property.lastSoldPrice && <p>Last sold on { property.lastSoldDate } for ${ property.lastSoldPrice }</p> }
          <p><a href={ property.zillowLink } target="_blank" rel="noopener noreferrer">Zillow link</a></p>
        </div>
        <div className="card__face card__face--back">
          <h3>Searched property</h3>
          { property.lastSoldDate && property.lastSoldPrice && <p>Last sold on { property.lastSoldDate } for ${ property.lastSoldPrice }</p> }
          { property.yearBuilt && <p>Built in { property.yearBuilt }.</p> }
          { property.bedrooms && property.bathrooms && <p>{ property.bedrooms } bedrooms, { property.bathrooms } bathrooms.</p> }
          { property.sqFeet && <p>Finished interior size: { property.sqFeet } square feet.</p> }
          { property.lotSize && <p>Lot size: { property.lotSize } square feet.</p> }
        </div>
      </div>
    </div>
  )
}

// <img src={ image } alt={ property.address } className="cardImage" onError={(e)=>{e.target.onerror = null; e.target.src="https://cdn.dribbble.com/users/440793/screenshots/2744373/dribble.jpg"}} />

export default SearchCard;
