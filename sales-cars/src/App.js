
import React from "react";
import {
  BrowserRouter as Router, Link,
  Switch,
  Route, Redirect
} from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from "./Navbar/Navbar";
import Home from './Home'
import About from './About'
import Products from "./Product";
import Productdetails from "./productdetails";
import Contact from "./Contact";
import data from './data.json'
import "bootstrap/dist/css/bootstrap.css"
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";


class App extends React.Component {


  state = {
    productlist: data, searchdata: data, filterval: "all", filterval2: "all", filterval3: "all", myval: "all",
    myval2: " ", isPerform: true, option: ["All", "bmw", "ford", "volkswagen"], isComplete: true, productinfo: ''
  }


  handleChange = (e) => {
    // alert(e.target.value);
    e.preventDefault();
    // this.setState({ searchdata: this.state.productlist });
    this.setState({ filterval: e.target.value });
    // this.setState({ filterval2: " ",filterval3: " "});
  }

  newChange = (e) => {
    this.setState({ filterval2: e.target.value });
    // console.log(this.state.filterval2)

    // const newmodel = this.state.productlist.filter((val) => {
    //   if (val.brand === this.state.filterval) {
    //     console.log(val.model)
    //     return val
    //   }
    // })

    // this.setState({ myval: newmodel })
  }

  priceChange = (e) => {
    this.setState({ filterval3: e.target.value });
  }


  dataview = (list) => {
    console.log('aa')
    console.log(list);
    this.setState({ productinfo: list });
    //  this.state.productlist.find(enam => {
    //   if (enam.model === list.model) {
    //     return list;
    //   }
    // });
    this.setState({ isComplete: false })
    // this.setState({productinfo:this.state.productlist});
  }

  proinfo = () => {
    this.setState({ isComplete: true })
  }

  onSubmit = (filterval1, filterval2, filterval3) => {

    alert(filterval1, filterval2, filterval3);
    // console.log(this.state.filterval3);
    // e.preventDefault();
    const filterval = filterval1.trim().toLowerCase();
    const searchval = filterval2.trim().toLowerCase();
    const priceval = filterval3;
    console.log(filterval);
    console.log(searchval);
    console.log(priceval);


    const finalVal = this.state.productlist.filter(val => {
      if (filterval == "all" && searchval == "all" && priceval == "all") {
        console.log(val);
        return val
      }

      else if (filterval == "all" && searchval == "all" && priceval >= val.price) {
        console.log(val);
        return val
      }

      else if (filterval == val.brand && searchval == val.model && priceval == "all") {
        console.log(val);
        return val
      }

      else if (filterval == val.brand && searchval == "all" && priceval == "all") {
        console.log(val);
        return val
      }

      else if (filterval == val.brand && searchval == "all" && priceval >= val.price) {
        console.log(val);
        return val
      }

      else if (filterval == val.brand && searchval == val.model && priceval >= val.price) {
        // console.log(val);
        return val
      }


    })

    // console.log(finalVal);
    this.setState({ searchdata: finalVal, isPerform: false })


    // var newVal = (searchval === "") ? this.state.myval : this.state.myval.filter((val) => {
    //   if (val.model === searchval)
    //     return val;
    // })

    // console.log(newVal);
    // this.setState({ searchdata: newVal })
  }



  render() {
    // console.log(this.state.isPerform);
    // console.log(this.state.myval)
    // console.log(this.state.searchdata)
    // const inpval =  document.querySelector(".inpval").value;
    // console.log(inpval);
    const { productlist, searchdata, option } = this.state
    return (
      <Router>
        <Container fluid>
          <Row className="main-div">
            <Container>
              <Navbar />
              {/* <div className="search-bar">
            <form onSubmit={this.onTrigger} >
              <input type="text" placeholder="search item" name="searchval" className="searchval" onChange={this.searchVal} />
              <input type="submit" value="submit" className="button" />
            </form>
          </div> */}
            </Container>
          </Row>

          <div className="sub-div col-xs-12">
            <Switch>

              {/* {this.state.isPerform ? <Route exact path="/"><Home /></Route> :
              <Route path="/products">
                <Products newData={searchdata} />
              </Route>
            } */}
              {/* <Route exact path="/">{this.state.isPerform ? <Home newprop={this.state.isPerform} /> : <Products newData={searchdata} />}</Route> */}
              {/* <Route exact path="/"><Home onSubmit={this.onSubmit.bind(this)} /></Route> */}
              {this.state.isComplete ?
                <Route exact path="/"><Home onSubmit={this.onSubmit.bind(this)} dataview={this.dataview.bind(this)}
                  isComplete={this.state.isComplete} /></Route> : <Link to="/productinfo">
                  <Productdetails productinfo={this.state.productinfo} isComplete={this.state.isComplete}
                    proinfo={this.proinfo.bind(this)} />
                </Link>
              }


              <Route path="/about"><About /></Route>
              {this.state.isComplete ?
                <Route path="/products">
                  <Products newData={searchdata} onSubmit={this.onSubmit.bind(this)} dataview={this.dataview.bind(this)}
                    isComplete={this.state.isComplete} />
                </Route> : <Link to="/productinfo">
                  <Productdetails productinfo={this.state.productinfo} isComplete={this.state.isComplete}
                    proinfo={this.proinfo.bind(this)} />
                </Link>
              }

              <Route path="/contacts"><Contact /></Route>
            </Switch>
          </div>
        </Container>
        <Row>
          <div className="footer d-flex justify-content-center">
            <div className="product-display  footer-display col-lg-10 ">
              <Row>
                <Col xs={2}>
                  <div className="footer-main1">
                    <h4>Address</h4>
                    <p>Balaji Cars<br />
                      Chekkalai Road<br />
                      Karaikudi
                    </p>
                  </div>
                </Col>
                <Col xs={3}>
                  <div className="footer-main1">
                    <h4>Need Help</h4>
                    <h4>7122456767</h4>
                    <p>hello@balajicars.com</p>
                  </div>
                </Col>
                <Col xs={4}>
                  <div className="footer-main1">
                    <h4>Opening Hours</h4>
                    <p>Monday - Friday: 09:00AM - 09:00PM</p>
                    <p>Monday - Saturday: 09:00AM - 07:00PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </Col>
                <Col xs={3}>
                  <div className="footer-main1-links">
                    <h4>Follow Us</h4>
                    <div class="social-links col-xs-12">
                      <ul>
                        <li><a><FaFacebookF /></a></li>
                        <li><a><FaLinkedinIn /></a></li>
                        <li><a><FaTwitter /></a></li>
                        <li><a><FaInstagram /></a></li>
                      </ul>
                    </div>
                  </div>
                </Col>

              </Row>
            </div>
          </div>
        </Row>
      </Router>
    )
  }


}

export default App;

// npm run start local
// npm run local  start