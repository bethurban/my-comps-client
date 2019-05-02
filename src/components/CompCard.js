import React from 'react';

const CompCard = ({ comp }) => (
  <div className="CompCard">
    <div className="card">
      <div className="card__face card__face--front">
        <h4 className="compText">{ comp.address }</h4>
        <p className="compText">Last sold on { comp.lastSoldDate } for ${ comp.lastSoldPrice }</p>
      </div>
      <div className="card__face card__face--back">
        <p className="compText">Last sold on { comp.lastSoldDate } for ${ comp.lastSoldPrice }</p>
        <p className="compText">Built in { comp.yearBuilt }. { comp.bedrooms } bedrooms, { comp.bathrooms } bathrooms. Finished interior size: { comp.sqFeet } square feet. Lot size: { comp.lotSize } square feet.</p>
      </div>
    </div>
    <p><a href={ comp.zillowLink } target="_blank" rel="noopener noreferrer">Zillow link</a></p>
  </div>
)

// comp array = [{address, yearBuilt, sqFeet, bedrooms, bathrooms, lotSize, lastSoldDate, lastSoldPrice, zillowLink, zpid}]

export default CompCard;
