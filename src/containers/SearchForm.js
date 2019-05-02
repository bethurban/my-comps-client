import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSearchFormData } from '../actions/searchForm';
import { getZPID } from '../actions/searches';

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
    this.props.getZPID(this.props.searchFormData)
  }

  render() {
    const { address, citystate } = this.props.searchFormData;
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="address">Street address: </label>
            <input
              required
              type="text"
              onChange={this.handleOnChange}
              name="address"
              value={address}
            />
          </div>
          <div>
            <label htmlFor="citystate">City, state: </label>
            <input
              required
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

export default connect(mapStateToProps, { updateSearchFormData, getZPID })(SearchForm);
