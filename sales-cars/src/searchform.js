import React from "react";
import data from './data.json'
import {
    BrowserRouter as Router, Link,
    Switch,
    Route, Redirect
} from "react-router-dom";
import { Row, Col, Button } from 'react-bootstrap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {  faSearch } from "@fortawesome/free-solid-svg-icons"


class Searchform extends React.Component {
    state = {
        productlist: data, searchdata: data, filterval: "all", filterval2: "all", filterval3: "all", myval: "all",
        myval2: " ", isPerform: true, option: ["All", "bmw", "ford", "volkswagen"]
    }

    handleChange = (e) => {
        // alert(e.target.value);
        // e.preventDefault();
        // this.setState({ searchdata: this.state.productlist });
        this.setState({ filterval: e.target.value });
        // this.setState({ filterval2: " ",filterval3: " "});
        // console.log(this.state.filterval);

    }

    newChange = (e) => {
        this.setState({ filterval2: e.target.value });
        // console.log(this.state.filterval2)
    }

    priceChange = (e) => {
        this.setState({ filterval3: e.target.value });
        // console.log(this.state.filterval3)
    }

    render(props) {
        console.log(this.state.filterval, this.state.filterval2, this.state.filterval3);
        const { filterval, filterval2, filterval3 } = this.state;
        return (<div>
            <Row className="d-flex justify-content-center">
                <Col className="brand-filter " md={8}>
                    <form >
                        <Row className="search-bar">
                            <Col class="first-search" xs={4}>
                                <select id="brand-input" onChange={(e) => this.handleChange(e)}>
                                    {this.state.option.map((val, index) => {
                                        // console.log(this.state.option)
                                        return (<option key={index} value={val}>{val}</option>)
                                    })}
                                </select>
                            </Col>
                            <Col class="first-search" xs={4}>
                                <select id="brand-input" onChange={(e) => this.newChange(e)}>
                                    <option value="all" >Any Model</option>
                                    <option value="all">All</option>
                                    {
                                        this.state.productlist.map((val, index) => {
                                            if (val.brand === this.state.filterval) {
                                                return (<option key={index} value={val.model}>{val.model}</option>)
                                            }
                                        })
                                    }

                                </select>
                            </Col>
                            <Col class="first-search" xs={4}>
                                <select id="brand-input" onChange={(e) => this.priceChange(e)}>
                                    <option value="all" >Any price</option>
                                    {
                                        this.state.productlist.map((val, index) => {
                                            return (<option key={index} value={val.price}>{val.price}</option>)
                                        })
                                    }
                                </select>
                            </Col>
                        </Row>
                        <Row className="d-flex justify-content-center">
                            <Col xs={5}>
                                <Button className="btn1" type="submit" onClick={(e) => this.props.onSubmit(filterval, filterval2, filterval3)}>
                                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                                    <Link to="/products">submit </Link>
                                </Button>
                            </Col>
                        </Row>


                    </form>
                </Col>
            </Row>
        </div>)
    }

}

export default Searchform