import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./navbar.css"
import logo from "../images/chay-logo5.png"
import { FcHome, FcBusinesswoman, FcVideoProjector} from 'react-icons/fc';


const NavBar = () => {
  const [expand, updateExpanded] = useState(false);
  
  return (
    <Navbar collapseOnSelect expanded={expand} expand="lg" className="navbar-head sticky-top">
      <Container>
        <Navbar.Brand className="navbar" href="/">
          <img width="auto" height="50px" className="img-responsive" src={logo}  alt="logo" />
          </Navbar.Brand>
        <Navbar.Toggle  area-controls="responsive-navbar-nav" onClick={() => {
          updateExpanded(expand ? false : "expanded");
        }} /> 
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                 <FcHome /> Home
              </Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
               <FcVideoProjector />  Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                <FcBusinesswoman /> About
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
