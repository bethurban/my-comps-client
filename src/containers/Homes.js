import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Homes.css';
import HomeForm from './HomeForm';
import HomeCard from '../components/HomeCard';
import { getHomes } from '../actions/homes';
import { getZPID } from '../actions/searches';
import { deleteHome } from '../actions/homes';
import SavedSearchButton from '../components/SavedSearchButton';

class Homes extends Component  {

  componentDidMount() {
    this.props.getHomes(this.props.user)
  }

  render() {
    var id = 0
    return (
      <div className="HomesContainer">
        { this.props.user ?
          <div>
          <h2>Saved searches</h2>
          <HomeForm />
          {this.props.homes.map(home =>
            <div key={id + Math.random()}>
            <HomeCard key={home.id} home={home} deleteHome={this.props.deleteHome} user={this.props.user} />
            <SavedSearchButton key={id++} search={Object.assign({}, {address: home.address, citystate: home.citystate})} getZPID={this.props.getZPID} />
            </div>
          )}
          </div>
        :
          <h2>Please log in to save searches.</h2>
      }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    homes: state.homes,
    user: state.user.user.id
  })
}

export default connect(mapStateToProps, { getHomes, getZPID, deleteHome })(Homes);
