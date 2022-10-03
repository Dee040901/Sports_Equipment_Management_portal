import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login';
import Dashboard from './components/dashboard';
import Complaint from './components/complaint';
import SportsInfo from './components/sportinfo';

// import { connect } from "react-redux";



const App = () => {
  

  
    return (
      <BrowserRouter>
      <div className="App">
        <Routes>
       
          <Route exact path="/" element={<Login/>}/>

          <Route exact path="/dashboard" element={<Dashboard/>}/>

          <Route exact path="/complaint" element={<Complaint/>}/>

          <Route exact path="/sportinfo" element={<SportsInfo/>}/>

        </Routes>
      </div>
    </BrowserRouter>
    )
  };



export default App;
