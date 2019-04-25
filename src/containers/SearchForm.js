  import React, { Component } from 'react';
  import { connect } from 'react-redux';
  import { updateSearchFormData } from '../actions/searchForm';
  import { createSearch } from '../actions/searches'

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
      this.props.createSearch(this.props.searchFormData)
    }

    render() {
      const { name, address } = this.props.searchFormData;
      return(
        <div>
          <h4>Save a new search</h4>
          <form onSubmit={this.handleOnSubmit}>
            <div>
              <label htmlFor="name">Name your search: </label>
              <input
                type="text"
                onChange={this.handleOnChange}
                name="name"
                value={name}
              />
            </div>
            <div>
              <label htmlFor="address">Address: </label>
                <input
                  type="text"
                  onChange={this.handleOnChange}
                  name="address"
                  value={address }
                />
            </div>
            <button type="submit">Save search</button>
          </form>
        </div>
      );
    }
  }

  const mapStateToProps = state => {
    return {
      searchFormData: state.searchFormData
    }
  }

  export default connect(mapStateToProps, {
    updateSearchFormData,
    createSearch
   })(SearchForm);
