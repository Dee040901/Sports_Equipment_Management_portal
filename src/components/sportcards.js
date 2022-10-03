import React, { useState, useEffect } from "react";
import {Card ,Button} from 'react-bootstrap';
import logo from './logo.png'
import cricket from './sports/cricket.jpg';
import football from './sports/football.jpg';
import basketball from './sports/basketball.jpg';
import badminton from './sports/badminton.jpg';
import hockey from './sports/hockey.jpg';
import tabletennis from './sports/tabletennis.jpg';
import athletics from './sports/athletics.jpg';
import volleyball from './sports/volleyball.jpg';
import tennis from './sports/tennis.jpg';
import { useNavigate } from "react-router";
import { getEquipments, issuedEquipments } from "../store/actions/equipments";
import { connect } from "react-redux";




const Sportscards = ({getEquipments,issuedEquipments}) => {
    
    let sports = [cricket,football,basketball,tabletennis,hockey,volleyball,badminton,athletics,tennis];
    let sports_ = ['Cricket','Football','Basketball','Tabletennis','Hockey','Volleyball','Badminton','Athletics','Tennis'];
    let navigate = useNavigate();


    const handleClick = (e) =>{
        // e.preventDefault();
        let sport = e.target.value;
        getEquipments(sport);
        issuedEquipments(sport);
        navigate('/sportinfo');
    }

    return (
        <div style={{display: 'flex', flexWrap:'wrap',margin:'30px 100px',  justifyContent: 'space-around' }}>
            {
                sports.map((sport,i)=>{
                    return (
                        <div key={i} style={{padding:'50px',borderRadius:"40px"}}>
                        <Card style={{ width: '18rem',borderRadius:"40px",boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px" }}>
                            <Card.Img variant="top" src={sport} style={{width:'18rem',height:'15rem',borderRadius:"40px"}} />
                            <Card.Body>
                                <Card.Title>{sports_[i]}</Card.Title>
                                <Card.Text>
                                Get info about {sports_[i]} equipment by clicking the button below.
                                </Card.Text>
                                <Button style={{backgroundColor:"#00b4d8",borderColor:'#00b4d8'}} value={sports_[i]} onClick={(e)=>handleClick(e)} >Equipments</Button>
                            </Card.Body>
                        </Card>
                        </div>
                    )
                })
            }
       </div>
    );
  };
  
  
  
  const mapDispatchToProps = (dispatch) => {
    return {
        getEquipments: (sport) => dispatch(getEquipments(sport)),
        issuedEquipments: (sport) => dispatch(issuedEquipments(sport)),
    };
  };
  
  
  
  export default connect(null, mapDispatchToProps)(Sportscards);