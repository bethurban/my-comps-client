import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Navbar.css'
import GoogleLogin from 'react-google-login';
import { checkUser } from '../actions/navbar';

class Navbar extends Component {

  render() {

    const GOOGLE_ID = process.env.REACT_APP_GOOGLE_ID

    const responseGoogle = (response) => {
      if (response.profileObj.email) {
        this.props.checkUser(response.profileObj.email)
      } else {
        alert('Login failed. Please try again.')
      }
    }

    return(
      <nav className="topnav">
        <div className="container">
          <Link to='/' className="logo">My Comps</Link>
          <Link to='/about'>About</Link>
          { this.props.user && <Link to='/saved'>Saved properties</Link> }
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
    user: state.user.user
  })
}

export default connect(mapStateToProps, { checkUser })(Navbar);
