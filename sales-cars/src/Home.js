
import React from "react";
import data from './data.json'
import {
    BrowserRouter as Router, Link,
    Switch,
    Route, Redirect
} from "react-router-dom";
import Searchform from "./searchform";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from './Images/banner/banner7.png';
import banner2 from './Images/banner/banner7.png';
import banner3 from './Images/banner/banner7.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from './Images/car-banner/car8.jpg'
import img2 from './Images/car-banner/car5.jpg'
import img3 from './Images/car-banner/car3.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { FaBeer} from "@fortawesome/free-solid-svg-icons"
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";




class Home extends React.Component {
    state = {
        productlist: data, searchdata: data, filterval: "all", filterval2: "all", filterval3: "all", myval: "all",
        myval2: " ", isPerform: true, option: ["All", "bmw", "ford", "volkswagen"]
    }


    render(props) {

        return (<Container fluid>

            <Row>
                <div className="banner">
                    <Container>
                        <div className="header-title col-lg-12" >
                            <Row>
                                <Col className="name-div" xs={12}>
                                    <h1>Find Your Next Match</h1>
                                    <span class="aminated-object1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="119" height="15" viewBox="0 0 119 15" fill="none">
                                            <path d="M1 13.5C21 4.16666 72 -3 118 6" stroke="#F5C34B" stroke-width="3" />
                                        </svg>
                                    </span>
                                    <p>Find the right Price, dealer and advice.</p>
                                </Col>
                            </Row>
                            {/* <Row>
                                <Col className="sub-title" xs={12}>
                                    <h3>Find YOUR BEST</h3>
                                    <p>Find the right Price, dealer and advice.</p>
                                </Col>
                            </Row> */}
                            <Row>
                                <div>
                                    <Searchform onSubmit={this.props.onSubmit} />
                                </div>
                            </Row>
                        </div>
                    </Container>
                </div>
            </Row >
            <Row>
                <div className="listing-prod d-flex justify-content-center">
                    <div className="product-display col-lg-10 ">
                        <h2>Popular Listing</h2>
                        <Row>
                        {this.state.productlist.map((data, index) => {
                                if (index <= 2) {
                                    return (
                                        <Col xs={4}>
                                            <Card>
                                                <div className="thumb">
                                                    <div className="tag">
                                                        <Button className="btn1" onClick={() => this.props.dataview(data)}>Details</Button>
                                                    </div>
                                                </div>
                                                <Card.Title>{data.model}</Card.Title>
                                                <Card.Img variant="top" src={require("./Images/car-banner/" + data.img)} />

                                            </Card>
                                        </Col>
                                    )
                                }
                            })}
                        </Row>
                    </div>
                </div>

            </Row>
            <Row>
                <div className="home-content d-flex justify-content-center">
                    <div className="content-div col-lg-10 ">
                        <p>Transforming the Electronics Industry
                            with Innovative PCB Design Software
                            From automotive and aerospace to consumer electronics and medical devices,
                            Altium is always there for designers whenever and wherever.
                            Transforming the Electronics Industry
                            with Innovative PCB Design Software
                            From automotive and aerospace to consumer electronics and medical devices,
                            Altium is always there for designers whenever and wherever.
                            Transforming the Electronics Industry
                            with Innovative PCB Design Software
                            From automotive and aerospace to consumer electronics and medical devices,
                            Altium is always there for designers whenever and wherever.
                        </p>
                    </div>
                </div>
            </Row>

            <Row>
                <div className="testimonial d-flex justify-content-center">
                    <div className="product-display col-lg-10 ">
                        <h2>Customer Reviews</h2>
                        <div>
                            <OwlCarousel items={2} margin={8} autoplay={true} >

                                <div className="myreview d-flex justify-content-center" xs={12}>
                                    <Row>
                                        <Col className="mypic" xs={4}>
                                            <img className="img" src={img2} />
                                        </Col>
                                        <Col className="mycontent" xs={8}>
                                            <p style={{ 'color': '#000' }}>From automotive and aerospace to consumer electronics and medical devices,
                                                Altium is always there for designers whenever and wherever.
                                                Transforming the Electronics Industry
                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="myreview" xs={12}>
                                    <Row>
                                        <Col className="mypic" xs={4}>
                                            <img className="img" src={img2} />
                                        </Col>
                                        <Col className="mycontent" xs={8}>
                                            <p style={{ 'color': '#000' }}>From automotive and aerospace to consumer electronics and medical devices,
                                                Altium is always there for designers whenever and wherever.
                                                Transforming the Electronics Industry
                                            </p>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="myreview" xs={12}>
                                    <Row>
                                        <Col className="mypic" xs={4}>
                                            <img className="img" src={img2} />
                                        </Col>
                                        <Col className="mycontent" xs={8}>
                                            <p style={{ 'color': '#000' }}>From automotive and aerospace to consumer electronics and medical devices,
                                                Altium is always there for designers whenever and wherever.
                                                Transforming the Electronics Industry
                                            </p>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="myreview" xs={12}>
                                    <Row>
                                        <Col className="mypic" xs={4}>
                                            <img className="img" src={img2} />
                                        </Col>
                                        <Col className="mycontent" xs={8}>
                                            <p style={{ 'color': '#000' }}>From automotive and aerospace to consumer electronics and medical devices,
                                                Altium is always there for designers whenever and wherever.
                                                Transforming the Electronics Industry
                                            </p>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="myreview" xs={12}>
                                    <Row>
                                        <Col className="mypic" xs={4}>
                                            <img className="img" src={img2} />
                                        </Col>
                                        <Col className="mycontent" xs={8}>
                                            <p style={{ 'color': '#000' }}>From automotive and aerospace to consumer electronics and medical devices,
                                                Altium is always there for designers whenever and wherever.
                                                Transforming the Electronics Industry
                                            </p>
                                        </Col>
                                    </Row>
                                </div>

                            </OwlCarousel>

                        </div>
                    </div>
                </div>
            </Row>
        </Container>
        )
    }

}


export default Home