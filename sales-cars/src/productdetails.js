import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Button, Container, Col } from "react-bootstrap";

export default class Productdetails extends React.Component {
    render(props) {
        const { productinfo } = this.props;
        console.log(productinfo);
        return (
            <Row className="d-flex justify-content-center">
                <Col className="info-pro" xs={10}>
                <Button className="btn1"><Link to="/products" onClick={()=>this.props.proinfo()}>Back to Products</Link></Button>
                    <Row>
                        <Col xs={6}>
                            <Card className="pro-main">
                                <img src={require("./Images/car-banner/" + productinfo.img)} />
                            </Card>
                        </Col>
                        <Col xs={6} className="product-info">
                            <h3>{productinfo.model} </h3>
                            <h3>{productinfo.price}</h3>
                            <Row>
                                <Col xs={5}><p>year</p></Col>
                                <Col xs={1}>:</Col>
                                <Col xs={5}><p>{productinfo.year}</p></Col>
                            </Row>
                            <Row>
                                <Col xs={5}><p>Miles</p></Col>
                                <Col xs={1}>:</Col>
                                <Col xs={5}> <p>{productinfo.milage} </p></Col>
                            </Row>
                            <Row>
                                <Col xs={5}><p>Engine-Size</p></Col>
                                <Col xs={1}>:</Col>
                                <Col xs={5}> <p>{productinfo.enginesize} </p></Col>
                            </Row>
                            <Row>
                                <Col xs={5}><p>Body-Type</p></Col>
                                <Col xs={1}>:</Col>
                                <Col xs={5}>  <p>{productinfo.bodystyle} </p></Col>
                            </Row>



                            <Row>
                                <Col xs={5}><p>Color</p></Col>
                                <Col xs={1}>:</Col>
                                <Col xs={5}><p>{productinfo.color} </p></Col>
                            </Row>
                            <Row>
                                <Col xs={5}><p>Transmission</p></Col>
                                <Col xs={1}>:</Col>
                                <Col xs={5}><p>{productinfo.transmission} </p></Col>
                            </Row>
                            <Row>
                                <Col xs={5}><p>Fuel-Type</p></Col>
                                <Col xs={1}>:</Col>
                                <Col xs={5}><p>{productinfo.fueltype} </p></Col>
                            </Row>
                        </Col>

                    </Row>
                </Col>
            </Row>
        )
    }
}


