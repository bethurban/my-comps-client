import React from 'react';

const CompCard = ({ comp }) => (
  <div className="CompCard">
    <div className="card">
      <div className="card__face card__face--front">
        <h4 className="compText">{ comp[0] }</h4>
        <p className="compText">Last sold on { comp[6] } for ${ comp[7] }</p>
      </div>
      <div className="card__face card__face--back">
        <p className="compText">Built in { comp[1] }. { comp[3] } bedrooms, { comp[4] } bathrooms.</p>
        <p className="compText">Finished interior size: { comp[2] } square feet. Lot size: { comp[5] } square feet.</p>
      </div>
    </div>
    <p><a href={ comp[8] } target="_blank" rel="noopener noreferrer">Zillow link</a></p>
  </div>
)

// comp array = [address, yearBuilt, sqFeet, bedrooms, bathrooms, lotSize, lastSoldDate, lastSoldPrice, zillowLink, zpid]

export default CompCard;
