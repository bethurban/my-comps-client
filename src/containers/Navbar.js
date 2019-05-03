import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Navbar.css'
import GoogleLogin from 'react-google-login';
import { updateLogin } from '../actions/navbar';

class Navbar extends Component {

  render() {
    const GOOGLE_ID = process.env.REACT_APP_GOOGLE_ID

    const responseGoogle = (response) => {
        console.log(response);
        // if (response) {
        //   this.props.updateLogin(true)
        // }
      }

    return(
      <nav className="topnav">
        <div className="container">
          <Link to='/' className="logo">My Comps</Link>
          <Link to='/about'>About</Link>
          <GoogleLogin
            clientId={GOOGLE_ID}
            buttonText="Log in"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
        </div>
      </nav>
    )
  }

}

const mapStateToProps = (state) => {
  return({
    loggedIn: state.loggedIn
  })
}

export default connect(mapStateToProps)(Navbar);
