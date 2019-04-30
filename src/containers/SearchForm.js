import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSearchFormData } from '../actions/searchForm';
import { getSearch } from '../actions/searches';
import { getComps } from '../actions/searches';
import { getSearchImage } from '../actions/searches';

class SearchForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentSearchFormData = Object.assign({}, this.props.searchFormData, {
      [name]: value
    })
    this.props.updateSearchFormData(currentSearchFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.getSearch()
    this.props.getComps()
    this.props.getSearchImage()
  }

  render() {
    const { street, citystate } = this.props.searchFormData;
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="street">Street: </label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="street"
              value={street}
            />
          </div>
          <div>
            <label htmlFor="citystate">City, state: </label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="citystate"
              value={citystate}
            />
          </div>
          <button type="submit">Search for comparable properties</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    searchFormData: state.searchFormData
  }
}

export default connect(mapStateToProps, { updateSearchFormData, getSearch, getComps, getSearchImage })(SearchForm);
