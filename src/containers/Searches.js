import React from 'react';
import './Searches.css'

const Searches = (props) => (
  <div className="SearchesContainer">
    <h1>Searches</h1>
    {props.searches.map(search =>
      <div key={search.id} className="SearchCard">
        <h3>{search.name}</h3>
        <p>{search.address}</p>
      </div>
    )}
  </div>
);

export default Searches;
