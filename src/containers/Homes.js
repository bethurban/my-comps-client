import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Homes.css';
import HomeForm from './HomeForm';
import HomeCard from '../components/HomeCard';
import { getHomes } from '../actions/homes';
import { getZPID } from '../actions/searches';
import { deleteHome } from '../actions/homes';

class Homes extends Component  {

  componentDidMount() {
    if (this.props.user) {
      this.props.getHomes(this.props.user)
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
      this.props.getHomes(this.props.user)
    }
  }

  render() {
    return (
      <div className="HomesContainer">
        { this.props.user ?
          <div>
          <HomeForm />
          {this.props.homes.map(home =>
            <HomeCard key={home.id} home={home} deleteHome={this.props.deleteHome} user={this.props.user} getZPID={this.props.getZPID} />
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
