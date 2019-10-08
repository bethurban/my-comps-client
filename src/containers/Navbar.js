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
      if (response.profileObj) {
        this.props.checkUser(response.profileObj.email)
      } else if (response.error) {
        alert('Google login failed. Please try again.')
      }
    }

    return(
      <nav className="topnav">
        <div className="topnav-left">
          <Link to='/' className="logo">My Comps</Link>
          <Link to='/about'>About</Link>
          { this.props.user && <Link to='/saved'>Saved properties</Link> }
        </div>
        <div className="topnav-right">
          { this.props.user ?
            <GoogleLogin
              clientId={GOOGLE_ID}
              buttonText="You are logged in via Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            />
          :
            <GoogleLogin
              clientId={GOOGLE_ID}
              buttonText="Log in with Google to save your searches"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            />
          }
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
