import React from 'react';

const CompCard = ({ comp }) => (
  <div className="HomeCard">
    <h3>Comp</h3>
    <p>{ comp[0] }</p>
    <p>Last sold on { comp[6] } for ${ comp[7] }</p>
    <p>Year built: { comp[1] }</p>
    <p>Finished interior square feet: { comp[2] }</p>
    <p> { comp[3] } bedrooms, { comp[4] } bathrooms</p>
    <p> Lot size: { comp[5] } square feet</p>
  </div>
)

// comp array = [address, yearBuilt, sqFeet, bedrooms, bathrooms, lotSize, lastSoldDate, lastSoldPrice]

export default CompCard;
