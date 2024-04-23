import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import logo from '../../assets/images/logo.jpg';
import "./index.css";
import { Container, Row, Col } from 'reactstrap';

import {HiMenuAlt3} from 'react-icons/hi';
import { Element, scrollSpy, Events, Link } from 'react-scroll';


const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (
    <div className={props.navbg ? "fixed-top navwhite" : "fixed-top" }>
      <Container>
      <Row>
        <Col>
          <Navbar light expand="md" className="navbar">
            <NavbarBrand href="/">
                <img src={logo} className="logo img-fluid" alt="Logo" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                
                  <NavLink><Link to="home" spy={true} smooth={true} duration={500} offset={-50}>Home</Link></NavLink>
                </NavItem>
                <NavItem>                
                  <NavLink><Link to="services" spy={true} smooth={true} duration={500} offset={-50}>About</Link></NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Menu;