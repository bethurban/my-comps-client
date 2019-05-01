import React from 'react';

const HomeCard = ({ home, search, getZPID }) => (
  <div key={home.id}  className="HomeCard">
    <h3>{home.name}</h3>
    <p>{home.address}</p>
    <p>{home.citystate}</p>
    <button onClick={() => getZPID(search)}>Search for comps</button>
  </div>
)

export default HomeCard;
