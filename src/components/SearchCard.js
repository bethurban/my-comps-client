import React from 'react';

const SearchCard = ({ property, image }) => (
  <div className="SearchCard">
    <div className="card">
      <div className="card__face card__face--front">
        <h3>Searched property</h3>
        <img src={ image } alt={ property[0] } width="90%" height="70%"/>
        <p>{ property[0] }</p>
      </div>
      <div className="card__face card__face--back">
        <p>Year built: { property[1] }</p>
        <p>Finished interior square feet: { property[2] }</p>
        <p> { property[3] } bedrooms, { property[4] } bathrooms</p>
        <p> Lot size: { property[5] } square feet</p>
      </div>
    </div>
  </div>
)
// property array = [address, yearBuilt, sqFeet, bedrooms, bathrooms, lotSize]

export default SearchCard;
