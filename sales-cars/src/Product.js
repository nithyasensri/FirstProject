
import React from "react";
import data from './data.json'
import { Link } from "react-router-dom";
import { Card, Row, Button, Container, Col } from "react-bootstrap";
import Searchform from "./searchform";
import Productdetails from './productdetails';
import Navbar from "./Navbar/Navbar";
import './App.css'
import Productmain from "./Productmain";

// console.log("./Images/"+"pro1.jpg")

class Products extends React.Component {


  state = { product: "", isComplete: true }
  dataview = (list) => {
    const newVal = this.props.newData.find(enam => {
      if (enam.model === list.model) {
        return list;
      }
    });
    // console.log(newVal)
    this.setState({ product: newVal, isComplete: false })
  }



  render(props) {

    // const { product } = this.state;
    const { newData, dataview } = this.props;
    // console.log(newData.length);
    const newDatam = (newData.length !== 0) ?
      <Row>
        {newData.map((data, index) => (
          <Col xs={4} className="pro-list-pro">
            <Card>
              <div className="thumb">
                <div className="tag">
                  <Button className="btn1" onClick={()=>this.props.dataview(data)}>Details</Button>
                </div>
                <Card.Img src={require("./Images/car-banner/" + data.img)} />
              </div>
              <Card.Title>{data.model} - {data.year}</Card.Title>
              <Card.Text>{data.price}</Card.Text>
              <Col xs={12}>
                <Row className="car-detail-sub">
                  <Col xs={5} className="car-details">
                    <p>Milage:{data.milage}</p>
                  </Col>
                  <Col xs={7} className="car-details">
                    <p>Transmission:{data.transmission}</p>
                  </Col>
                </Row>
              </Col>
            </Card>
          </Col>))
        }
      </Row>

      : <Row>"NO PRODUCT"</Row>


    // console.log(this.state.searchVal);
    // console.log(this.state.productlist);
    return (<Container fluid>
      <Row>
        <div className="header-title col-lg-12" >
          <Searchform onSubmit={this.props.onSubmit} />
        </div>
      </Row>

      <Row>
        <div className="listing-prod d-flex justify-content-center">
          <div className="product-display col-lg-10 ">
            <h2>Products</h2>
            <Row> 
                  <Col xs={12}>{newDatam}</Col>  
            </Row>
          </div>
        </div>
      </Row>


    </Container >)
  }
}


export default Products
