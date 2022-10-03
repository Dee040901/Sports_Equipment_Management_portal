import React, { useState, useEffect } from "react";
import {  Navigate } from "react-router-dom";
import NavBar from './navbar';
import { connect } from "react-redux";
import { Table, Modal, Button, Form } from "react-bootstrap";
import add from "./add.png";



const SportsInfo = ({auth,userauth,equipments_}) => {
    
  const [modalShow, setModalShow] = useState(false);

  // let equipments = []
  console.log(equipments_);
  // for(let i=0;i<10;i++){
  //   equipments.push(['Bat',0])
  // }
  // let students_ = []
  // for(let i=0;i<10;i++){
  //   students_.push(['Shreyash','2019mcb1218','Bat','22-03-2022'])
  // }
  
    return (
        <div>

            {auth.isEmpty==true ? <Navigate to="/" /> : 
                <div>
                    <NavBar/>

                    <Table striped bordered hover style={{width:'80%',margin:'50px auto'}}>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Equipments</th>
                          <th>Count</th>
                        </tr>
                      </thead>
                      <tbody>
                        {equipments_.equipments.map((e,i)=>{
                          return (
                          <tr key={i}>
                            <td>{i}</td>
                            <td>{e.id}</td>
                            <td>{e.count}</td>
                          </tr>
                        )
                        })}
                        
                      </tbody>
                    </Table>

                    <Table striped bordered hover style={{width:'80%',margin:'50px auto'}}>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Student</th>
                          <th>Equipment</th>
                          <th>Return Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {equipments_.issued.map((e,i)=>{
                          return (
                          <tr key={i}>
                            <td>{i}</td>
                            <td>{e.Email}</td>
                            <td>{e.Equipment}</td>
                            <td>{e.Return_date}</td>
                          </tr>
                        )
                        })}
                        


                      </tbody>
                    </Table>
                    <div style={{width:"60px",height:"60px",backgroundColor:"#E45826",position:'fixed',bottom:'50px',right:'50px',
                                borderRadius:"50%"}} onClick={() => setModalShow(true)}>
                          <img src={add} alt="Add" style={{width:"60px",height:"60px",color:'black',alignItems:"center"}}/>
                    </div>
                    <CenteredModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                </div>
            }

       </div>
    );
  };
  
  function CenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Equipment Issue Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Equipment</Form.Label>

          <Form.Select aria-label="Default select example">
            <option value="0">Bat</option>
            <option value="1">Ball</option>
            <option value="2">Stumps</option>
            <option value="3">Wicketkeeping Kit</option>
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} style={{backgroundColor:"#E45826"}}>Submit</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
  
    };
  };
  
  const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth,
      userauth: state.auth.userauth,
      equipments_:state.equipments
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(SportsInfo);