import React from 'react';
 
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

var Navigation = (props) => (
  <Navbar inverse >
    <Navbar.Brand>
      <a href="#">Note Taker</a>
    </Navbar.Brand>
    <Nav pullRight={true} bsStyle="pills">
      <NavItem eventKey={1} href="#">Signup</NavItem>
      <NavItem eventKey={2} href="#">Login</NavItem>
      <NavItem eventKey={3} href="#">Notes!</NavItem>
    </Nav>
  </Navbar>
);

export default Navigation;
