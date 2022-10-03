import React, { useState, useEffect } from "react";
import Navbar from 'react-bootstrap/Navbar';
import {Container, Offcanvas, Nav, NavDropdown} from 'react-bootstrap';
import logo from './logo.png'
import {  SignOut } from "../store/actions/auth";
import {connect} from 'react-redux';
import { NavLink } from "react-router-dom";



const NavBar = ({signout,auth,history}) => {
    const handleSignout = (e) =>{
        e.preventDefault();
        signout();
    }

    
   
  
    return (
        <div>
            <Navbar style={{backgroundColor:'#00b4d8'}} variant="dark" expand={false}>
            <Container fluid>
                <Navbar.Brand href="#">
                <img
                    alt="BOSA, IIT ROPAR"
                    src={logo}
                    height="40"
                    width='250'
                    className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas 
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    <NavLink to="/dashboard" >Dashboard</NavLink>
                    <NavLink to="/complaint">Complaint Portal</NavLink>
                    <NavLink to="#" onClick={(e)=>handleSignout(e)}>Logout</NavLink>
                    
                    </Nav>
                    
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>

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
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(NavBar);