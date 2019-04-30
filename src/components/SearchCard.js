import React from 'react';

const SearchCard = ({ address }) => (
  // { search.childNodes[2].childNodes[0].innerHTML }
  <div className="HomeCard">
    <h3>Searched property</h3>
    <p>{ address.first }</p>
  </div>
)

export default SearchCard;
