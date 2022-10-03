import React, { useState, useEffect } from "react";
import {  Navigate } from "react-router-dom";
import NavBar from './navbar'
import { connect } from "react-redux";
import {Form, Button, Card} from 'react-bootstrap';

const Complaint = ({auth,userauth}) => {
    let questions = [
        {"question": "How many strikes in an out in baseball?",
         "answer": "3"},
        {"question": "Which sport uses a yellow ball?",
         "answer": "tennis"},
        {"question": "How many quarters in a football game?",
         "answer": "4"},
        {"question": "What surface is hockey played on?",
         "answer": "ice"}
      ]

    return (
        <div>

            {auth.isEmpty ?   <Navigate to={'/'}/>: 
                <div>
                    <NavBar/>
                    <Form style={{width:'100vw',magin:'50px',padding:'70px 10vw'}}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Complaint/Question</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Complaint or Question." />
                            
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                    {questions.map((que,i)=>{
                        return (
                            <Card key={i} style={{width:'100vw',magin:'50px',padding:'20px 10vw'}}>
                                <Card.Header >Question</Card.Header>
                                <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                    <p>
                                        {que.question}
                                    </p>
                                    <footer className="blockquote-footer">
                                        {que.answer}
                                    </footer>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </div>
            }

       </div>
    );
  };
  
  
  
  const mapDispatchToProps = (dispatch) => {
    return {
  
    };
  };
  
  const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth,
      userauth: state.auth.userauth,
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Complaint);