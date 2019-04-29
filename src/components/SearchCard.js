import React from 'react';

const SearchCard = ({ street }) => (
  // { search.childNodes[2].childNodes[0].innerHTML }
  <div className="HomeCard">
    <h3>Searched property</h3>
    <p>{ street }</p>
  </div>
)

export default SearchCard;
