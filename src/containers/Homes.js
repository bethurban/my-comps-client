import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Homes.css';
import HomeForm from './HomeForm';
import HomeCard from '../components/HomeCard';
import { getHomes } from '../actions/homes';
import { getZPID } from '../actions/searches';

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
          <HomeCard key={home.id} home={home} search={Object.assign({}, {address: home.address, citystate: home.citystate})} getZPID={this.props.getZPID} />
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


export default connect(mapStateToProps, { getHomes, getZPID })(Homes);
