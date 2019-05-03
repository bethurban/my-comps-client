import React from 'react';

const CompCard = ({ comp }) => {
  var compString = ""

  if (comp.yearBuilt) {
    compString += `Built in ${comp.yearBuilt}. `
  }
  if (comp.bedrooms && comp.bathrooms) {
    compString += `${ comp.bedrooms } bedrooms, ${ comp.bathrooms } bathrooms. `
  }
  if (comp.sqFeet) {
    compString += `Finished interior size: ${ comp.sqFeet } square feet. `
  }
  if (comp.lotSize) {
    compString += `Lot size: ${ comp.lotSize } square feet.`
  }

  return(
    <div className="CompCard">
      <div className="card">
        <div className="card__face card__face--front">
          <h4 className="compText">{ comp.address }</h4>
          { comp.lastSoldDate && comp.lastSoldPrice && <p className="compText">Last sold on { comp.lastSoldDate } for ${ comp.lastSoldPrice }</p> }
        </div>
        <div className="card__face card__face--back">
          { comp.lastSoldDate && comp.lastSoldPrice && <p className="compText">Last sold on { comp.lastSoldDate } for ${ comp.lastSoldPrice }</p> }
          <p className="compText">{compString}</p>
        </div>
      </div>
      <p><a href={ comp.zillowLink } target="_blank" rel="noopener noreferrer">Zillow link</a></p>
    </div>
  )
}

export default CompCard;
