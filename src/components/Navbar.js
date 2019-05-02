import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import GoogleLogin from 'react-google-login';

const Navbar = () => {
  const GOOGLE_ID = process.env.REACT_APP_GOOGLE_ID

  const responseGoogle = (response) => {
      console.log(response);
    }
  return(
    <nav className="topnav">
      <div className="container">
        <Link to='/' className="logo">My Comps</Link>
        <Link to='/about'>About</Link>
        <GoogleLogin
          clientId={GOOGLE_ID}
          buttonText="Log in with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </div>
    </nav>
  )
}

export default Navbar;
