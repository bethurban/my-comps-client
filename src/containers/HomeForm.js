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
      this.props.createHome(this.props.homeFormData, this.props.user)
    }

    render() {
      const { name, address, citystate } = this.props.homeFormData;
      return(
        <div>
          <h4>Save a new home</h4>
          <form onSubmit={this.handleOnSubmit}>
            <div>
              <label htmlFor="name"><b>Name your home:</b> </label>
              <input
                required
                type="text"
                onChange={this.handleOnChange}
                name="name"
                value={name}
              />
            </div>
            <div>
              <label htmlFor="address"><b>Street address</b> <em>(Ex: 123 Main St.)</em><b>:</b> </label>
                <input
                  required
                  type="text"
                  onChange={this.handleOnChange}
                  name="address"
                  value={address}
                />
            </div>
            <div>
              <label htmlFor="citystate"><b>City, state</b> <em>(Ex: Anytown, PA)</em><b>:</b> </label>
                <input
                  required
                  type="text"
                  onChange={this.handleOnChange}
                  name="citystate"
                  value={citystate}
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
      homeFormData: state.homeFormData,
      user: state.user.user.id
    }
  }

  export default connect(mapStateToProps, {
    updateHomeFormData,
    createHome
  })(HomeForm);
