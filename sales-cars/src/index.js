import React from "react";
import { createRoot } from 'react-dom/client';
import ReactDOM from "react-dom";
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Container, Row } from 'react-bootstrap';
import './App.css'
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { FaBeer} from "@fortawesome/free-solid-svg-icons"
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";



function Main() {
  return (<Container fluid>
    <Row>   
        <App />
    </Row>
    </Container>
  )
}
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <div>
    <Main />
  </div>,
);
