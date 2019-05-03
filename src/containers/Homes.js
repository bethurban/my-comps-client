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
    this.props.getHomes()
  }

  render() {
    // debugger
    return (
      <div className="HomesContainer">
        <h2>Saved searches</h2>
        <HomeForm />
        {this.props.homes.map(home =>
          <div>
          <HomeCard key={home.id} home={home} deleteHome={this.props.deleteHome} />
          <SavedSearchButton search={Object.assign({}, {address: home.address, citystate: home.citystate})} getZPID={this.props.getZPID} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    homes: state.homes
  })
}


export default connect(mapStateToProps, { getHomes, getZPID, deleteHome })(Homes);
