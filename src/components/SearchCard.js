import React from 'react';

const SearchCard = ({ property, image }) => (
  <div className="SearchCard" ontouchstart="this.classList.toggle('hover');">
    <div className="flipper">
      <div className="front">
        <h3>Searched property</h3>
        <p>{ property[0] }</p>
      </div>
      <div className="back">
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
