import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from "react-router-dom";


import '../App.css'
import { Row, Col } from 'react-bootstrap';
import Products from '../Product';
import Logo from '../Images/logo/l1.png'
import '../fonts/fa-light-300.ttf'
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';


const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })
    let navbarClasses = ['navbar'];
    if (scrolled) {
        navbarClasses.push('scrolled');
    }

    return (<Container>
        <Row className="sub-main">
            <Col>
                <div className='logo'>
                    <a href="/">
                        <img src={Logo} />
                    </a>
                </div>
            </Col>

            <Col>
                <div className='menu' >
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>
                            <Link to="/contacts">Contact</Link>
                        </li>
                    </ul>
                </div>
            </Col>
        </Row>
    </Container>
    );
}


export default Navbar;