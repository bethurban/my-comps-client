import React from 'react';

const CompCard = ({ comp }) => (
  <div className="CompCard">
    <div className="card">
      <div className="card__face card__face--front">
        <h3>Comp</h3>
        <p>{ comp[0] }</p>
        <p>Last sold on { comp[6] } for ${ comp[7] }</p>
        <p><a href={ comp[8] } target="_blank" rel="noopener noreferrer">Zillow link</a></p>
      </div>
      <div className="card__face card__face--back">
        <p>Year built: { comp[1] }</p>
        <p>Finished interior size: { comp[2] } square feet</p>
        <p> { comp[3] } bedrooms, { comp[4] } bathrooms</p>
        <p> Lot size: { comp[5] } square feet</p>
      </div>
    </div>
  </div>
)

// comp array = [address, yearBuilt, sqFeet, bedrooms, bathrooms, lotSize, lastSoldDate, lastSoldPrice, zillowLink, zpid]

export default CompCard;
