import React from 'react';

const HomeCard = ({ home, deleteHome, user }) => (
  <div key={home.id}  className="HomeCard">
    <h3>{home.name}</h3>
    <p>{home.address}</p>
    <p>{home.citystate}</p>
    <button onClick={() => deleteHome(home.id, user)}>Delete this saved address</button>
  </div>
)

export default HomeCard;
