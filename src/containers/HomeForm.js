  import React, { Component } from 'react';
  import { connect } from 'react-redux';
  import { updateHomeFormData } from '../actions/homeForm';
  import { createHome } from '../actions/homes'

  class HomeForm extends Component {

    handleOnChange = event => {
      const { name, value } = event.target;
      const currentHomeFormData = Object.assign({}, this.props.homeFormData, {
        [name]: value
      })
      this.props.updateHomeFormData(currentHomeFormData)
    }

    handleOnSubmit = event => {
      event.preventDefault()
      this.props.createHome(this.props.homeFormData)
    }

    render() {
      const { name, address } = this.props.homeFormData;
      return(
        <div>
          <h4>Save a new home</h4>
          <form onSubmit={this.handleOnSubmit}>
            <div>
              <label htmlFor="name">Name your home: </label>
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
            <button type="submit">Save home</button>
          </form>
        </div>
      );
    }
  }

  const mapStateToProps = state => {
    return {
      homeFormData: state.homeFormData
    }
  }

  export default connect(mapStateToProps, {
    updateHomeFormData,
    createHome
  })(HomeForm);
