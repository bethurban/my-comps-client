import React from 'react';

const SearchCard = ({ property, image }) => (
  <div className="SearchCard">
    <div className="card">
      <div className="card__face card__face--front">
        <h3>Searched property</h3>
        <img src={ image } alt={ property[0].address } className="cardImage" onError={(e)=>{e.target.onerror = null; e.target.src="https://cdn.dribbble.com/users/440793/screenshots/2744373/dribble.jpg"}} />
        <h4>{ property[0].address }</h4>
        <p>Last sold on { property[0].lastSoldDate } for ${ property[0].lastSoldPrice }</p>
        <p><a href={ property[0].zillowLink } target="_blank" rel="noopener noreferrer">Zillow link</a></p>
      </div>
      <div className="card__face card__face--back">
        <h3>Searched property</h3>
        <p>Last sold on { property[0].lastSoldDate } for ${ property[0].lastSoldPrice }</p>
        <p>Built in { property[0].yearBuilt }.</p>
        <p>{ property[0].bedrooms } bedrooms, { property[0].bathrooms } bathrooms.</p>
        <p>Finished interior size: { property[0].sqFeet } square feet.</p>
        <p>Lot size: { property[0].lotSize } square feet.</p>
      </div>
    </div>
  </div>
)

export default SearchCard;
