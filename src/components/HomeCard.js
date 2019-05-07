import React from 'react';
import SavedSearchButton from './SavedSearchButton';

const HomeCard = ({ home, deleteHome, user, getZPID }) => (
  <div key={home.id}  className="HomeCard">
    <h3>{home.name}</h3>
    <p>{home.address}</p>
    <p>{home.citystate}</p>
    <button onClick={() => deleteHome(home.id, user)}>Delete this saved address</button>
    <SavedSearchButton search={Object.assign({}, {address: home.address, citystate: home.citystate})} getZPID={getZPID} />
  </div>
)

export default HomeCard;
