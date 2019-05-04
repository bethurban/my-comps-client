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
      console.log(response)
      // debugger
      if (response.googleId) {this.props.updateLogin(true)
        // if (response.googleId) {this.props.checkUser(response.profileObj.email)
        // send user's google email to fetch action that will send it to db and check if already stored
        // if already stored, loggedIn is set to true
        // if not in db, user's email is stored and loggedIn is set to true
        // rendering of saved searches only occurs if loggedIn is set to true
      }
    }

    return(
      <nav className="topnav">
        <div className="container">
          <Link to='/' className="logo">My Comps</Link>
          <Link to='/about'>About</Link>
          { this.props.loggedIn === true && <Link to='/saved'>Saved properties</Link> }
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
    loggedIn: state.navbar.loggedIn
  })
}

export default connect(mapStateToProps, { updateLogin })(Navbar);
