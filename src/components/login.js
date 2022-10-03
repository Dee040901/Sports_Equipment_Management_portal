import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { SignInWithGoogle } from "../store/actions/auth";
// import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/compat/auth";
import google from './google.svg'
import {Navigate } from 'react-router-dom'


const Login = ({signIn, autherrors,auth,userauth}) => {
  const [user, setUser] = useState({ email: "", password: "" });

  useEffect(() => {
    console.log(auth,userauth);
  });

  const handlesubmit = (e) => {
    e.preventDefault();
    signIn()
  };

  

  return (
    <div>
    {auth.isEmpty==false ? <Navigate to="/dashboard" /> : 
                <div>
                <div id="loginform">
        
                  <h2 id="headerTitle">Log In</h2>
                  <a href="#" id="googleIcon" onClick={(e)=>handlesubmit(e)}><img id="google" src={google} alt='Google Login'/></a>
                </div>
                </div>
      }
    </div>
    
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: () => dispatch(SignInWithGoogle()),

  };
};

const mapStateToProps = (state) => {
  return {
    autherrors: state.auth.authError,
    auth: state.firebase.auth,
    userauth: state.auth.userauth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default Login;
