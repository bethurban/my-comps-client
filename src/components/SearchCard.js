import React from 'react';

const SearchCard = ({ property, image }) => (
  <div className="SearchCard">
    <div className="card">
      <div className="card__face card__face--front">
        <h3>Searched property</h3>
        <img src={ image } alt={ property[0] } className="cardImage" onError={(e)=>{e.target.onerror = null; e.target.src="https://cdn.dribbble.com/users/440793/screenshots/2744373/dribble.jpg"}} />
        <p>{ property[0] }</p>
        <p><a href={ property[8] } target="_blank" rel="noopener noreferrer">Zillow link</a></p>
      </div>
      <div className="card__face card__face--back">
        <p>Last sold on { property[6] } for ${ property[7] }</p>
        <p>Year built: { property[1] }</p>
        <p>Finished interior size: { property[2] } square feet</p>
        <p> { property[3] } bedrooms, { property[4] } bathrooms</p>
        <p> Lot size: { property[5] } square feet</p>
      </div>
    </div>
  </div>
)
// property array = [address, yearBuilt, sqFeet, bedrooms, bathrooms, lotSize, lastSoldDate, lastSoldPrice, zillowLink, zpid]

export default SearchCard;
