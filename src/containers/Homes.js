import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Homes.css';
import HomeForm from './HomeForm';
import HomeCard from '../components/HomeCard';
import { getHomes } from '../actions/homes';

class Homes extends Component  {

  componentDidMount() {
    this.props.getHomes()
  }

  render() {
    return (
      <div className="HomesContainer">
        <h1>Homes</h1>
        {this.props.homes.map(home => <HomeCard key={home.id} home={home} />)}
        <HomeForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    homes: state.homes
  })
}


export default connect(mapStateToProps, { getHomes })(Homes);
