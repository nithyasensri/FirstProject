
import './App.css';
import React from 'react';
import { Container, Row, Col, InputGroup, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocationDot, faPhone, faUser } from "@fortawesome/free-solid-svg-icons"

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.handleonChange = this.handleonChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      contact: null,
      message: "",
      sucmsg: '',
      showmsg: false

    }
  }

  handleonChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }


  // onChangeName = (e) => {
  //   e.preventDefault();
  //   this.setState({ name: e.target.value })
  // }

  // onChangeEmail = (e) => {
  //   e.preventDefault();
  //   this.setState({ email: e.target.value })
  // }

  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.state.firstname !== "" && this.state.email !== "" && this.state.contact !== "") {
      const obj = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        contact: this.state.contact,
        message: this.state.message
      }

      var data = await axios.post('http://localhost:3000/contact', obj)
        .then(function (response) {
          // console.log(response.data)
          return response.data
        })
        .catch(function (error) {
          console.log(error);
        });

      if (data) {
        this.setState({ sucmsg: "Message" })
      }
      else {
        this.setState({ sucmsg: "Something Error" })
      }

    }
    else {
      var div = document.querySelector("#error").style.display = 'block'
      div = document.querySelector("#error").innerHTML = "All items required";
    }

    this.setState({ showmsg: true });


  }


  render() {
    console.log(this.state.sucmsg, this.state.showmsg)
    // console.log(this.state.firstname, this.state.lastname, this.state.email, this.state.contact, this.state.message);

    return (

      <Container fluid>

        <Row>

          <div className="home-content d-flex justify-content-center">

            <div className="content-div contact-div col-lg-10 ">
              <h2>Send us a Message</h2>
              <h5>We are here to help you with anything you need?</h5>


              <Row className="contact-review d-flex justify-content-center">
                <Col xs={4} className="contact-details">
                  <Row className='d-flex justify-content-center'>
                    <Col xs={12}>
                      <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                    </Col>
                    <Col xs={12} className="contact-subdetails">
                      <p>1st floor. No 66,<br />
                        1st street, Aranthangi,<br />
                        Pudukottai 614616.<br />
                        Tamilnadu, India.</p>
                    </Col>
                  </Row>
                </Col>
                <Col xs={4} className="contact-details">
                  <Row className='d-flex justify-content-center'>
                    <Col xs={12}>
                      <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                    </Col>
                    <Col xs={12} className="contact-subdetails">
                      <p>9800076851<br />
                        89076543341,<br /></p>
                    </Col>
                  </Row>
                </Col>
                <Col xs={4} className="contact-details">
                  <Row className='d-flex justify-content-center'>
                    <Col xs={12}>
                      <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    </Col>
                    <Col xs={12} className="contact-subdetails">
                      <p>
                        1st floor. No 66,<br />
                        1st street, Aranthangi,<br />
                        Pudukottai 614616.<br />
                        Tamilnadu, India.</p>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row className="contact-review d-flex justify-content-center" style={{ "position": "relative" }}>
                <Col xs={8} className="contact-form" style={{ "position": "relative" }}>

                  <Row>
                    <Col xs={6}>
                      <InputGroup >
                        <InputGroup.Text id="basic-addon1">
                          <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                        </InputGroup.Text>
                        <Form.Control
                          placeholder="First Name"
                          aria-label="Username"
                          aria-describedby="basic-addon1" name="firstname" onChange={(e) => this.handleonChange(e)} />
                      </InputGroup>
                    </Col>
                    <Col xs={6}>
                      <InputGroup >
                        <InputGroup.Text id="basic-addon1">
                          <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                        </InputGroup.Text>
                        <Form.Control
                          placeholder="Last Name"
                          aria-label="Username"
                          aria-describedby="basic-addon1" name="lastname" onChange={(e) => this.handleonChange(e)} />
                      </InputGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={6}>
                      <InputGroup >
                        <InputGroup.Text id="basic-addon1">
                          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                        </InputGroup.Text>
                        <Form.Control
                          placeholder="Email"
                          aria-label="Username"
                          aria-describedby="basic-addon1" name="email" onChange={(e) => this.handleonChange(e)} />
                      </InputGroup>
                    </Col>
                    <Col xs={6}>
                      <InputGroup >
                        <InputGroup.Text id="basic-addon1">
                          <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                        </InputGroup.Text>
                        <Form.Control
                          placeholder="Phone Number"
                          aria-label="Username"
                          aria-describedby="basic-addon1" name="contact" onChange={(e) => this.handleonChange(e)} />
                      </InputGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={12}>
                      <InputGroup >
                        <textarea cols={200}
                          placeholder="Enter Your Message"
                          type="text" id="message"
                          aria-label="Username"
                          aria-describedby="basic-addon1" name="message" onChange={(e) => this.handleonChange(e)}
                        />
                      </InputGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col style={{ 'textAlign': 'center' }}>
                      <Button onClick={this.handleSubmit} className="btn2" >Submit</Button>
                    </Col>
                  </Row>

                  <Col style={{ 'textAlign': 'center' }}>


                    {this.state.showmsg 
                    ?
                      
                        ((this.state.sucmsg === "Message") ? 
                        <div id="suc">Message Sent Successfully</div> : 
                        <div id="senerr">Something is wrong</div>)
                     : 
                     console.log('cc')
                    }


                  </Col>

                </Col>
              </Row>

            </div>

          </div>
        </Row>
      </Container>)
    // <div>
    //   <form onSubmit={this.handleSubmit}>
    //     <label>
    //       Name:
    //       <input type="text" value={this.state.name} name="name" onChange={this.onChangeName} />
    //     </label>
    //     <br />
    //     <label>
    //       Email:
    //       <input type="text" value={this.state.email} email="email" onChange={this.onChangeEmail} />
    //     </label>
    //     <br />
    //     <input type="submit" value="Submit" />
    //   </form>
    //   <div id="msg"></div>
    //   <div id="error"></div>
    // </div>

  }
}
export default Contact;
