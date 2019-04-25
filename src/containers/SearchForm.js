import React, { Component } from 'react';
// import { connect } from 'react-redux';

class SearchForm extends Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <label>Street: </label>
            <input
              type="text"
              name="street"
            />
          </div>
          <div>
            <label>City, state: </label>
            <input
              type="text"
              name="citystate"
            />
          </div>
          <button type="submit">Search for comparable properties</button>
        </form>
      </div>
    )
  }
}

export default SearchForm;
