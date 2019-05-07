import React from 'react';
import SavedSearchButton from './SavedSearchButton';
import '../containers/Button.css'

const HomeCard = ({ home, deleteHome, user, getZPID }) => (
  <div key={home.id}  className="HomeCard">
    <h3>{home.name}</h3>
    <p>{home.address}</p>
    <p>{home.citystate}</p>
    <SavedSearchButton search={Object.assign({}, {address: home.address, citystate: home.citystate})} getZPID={getZPID} />
    <br></br>
    <button className="myButton" onClick={() => deleteHome(home.id, user)}>Delete this saved address</button>

  </div>
)

export default HomeCard;
