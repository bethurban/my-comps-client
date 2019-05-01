import React from 'react';

const HomeCard = ({ home }) => (
  <div key={home.id}  className="HomeCard">
    <h3>{home.name}</h3>
    <p>{home.address}</p>
    <p>{home.citystate}</p>
  </div>
)

export default HomeCard;
