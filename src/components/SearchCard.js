import React from 'react';

const SearchCard = ({ search }) => (
  <div key={search.id}  className="SearchCard">
    <h3>{search.name}</h3>
    <p>{search.address}</p>
  </div>
)

export default SearchCard;
