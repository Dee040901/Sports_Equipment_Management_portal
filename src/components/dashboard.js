import React, { useState, useEffect } from "react";
import {  Navigate } from "react-router-dom";
import NavBar from './navbar';
import Sportscards from './sportcards';
import Complaint from './complaint'
import { SignOut } from "../store/actions/auth";
import { connect } from "react-redux";



const Dashboard = ({auth,signout,userauth}) => {
    
  
    return (
        <div>

            {auth.isEmpty==true ? <Navigate to="/" /> : 
                <div>
                    <NavBar/>
                    <Sportscards/>
                </div>
            }

       </div>
    );
  };
  
  
  
  const mapDispatchToProps = (dispatch) => {
    return {
      signout: () => dispatch(SignOut()),
  
    };
  };
  
  const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth,
      userauth: state.auth.userauth,
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);