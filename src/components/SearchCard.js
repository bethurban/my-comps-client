import React from 'react';

const SearchCard = ({ property }) => (
  <div className="HomeCard">
    <h3>Searched property</h3>
    <p>{ property[0] }</p>
    <p>Year built: { property[1] }</p>
    <p>Finished interior square feet: { property[2] }</p>
    <p> { property[3] } bedrooms, { property[4] } bathrooms</p>
    <p> Lot size: { property[5] } square feet</p>
  </div>
)
// property array = [address, yearBuilt, sqFeet, bedrooms, bathrooms, lotSize]

export default SearchCard;
