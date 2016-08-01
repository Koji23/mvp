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
      <NavItem eventKey={1} href="#" onClick={(event) => { props.changeCore(event, 'Signup') }}>Signup</NavItem>
      <NavItem eventKey={2} href="#" onClick={(event) => { props.changeCore(event, 'Login') }}>Login</NavItem>
      {props.loggedIn ? <NavItem eventKey={3} href="#" onClick={(event) => { props.changeCore(event, 'Notemaker') }}>Notes!</NavItem> : ''}
      {props.loggedIn ? <NavItem eventKey={4} href="#" onClick={(event) => { props.changeCore(event, 'Notelist') }}>Note List</NavItem> : ''}

    </Nav>
  </Navbar>
);

export default Navigation;
