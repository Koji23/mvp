import React from 'react';
 
import Panel from 'react-bootstrap/lib/Panel';
import Well from 'react-bootstrap/lib/Well';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';



var Login = (props) => (
  <Panel >
    <Well>
      <h2>Login</h2>
      <form>
        <FormGroup>
          <ControlLabel>Username:</ControlLabel>
          <FormControl/>
          <ControlLabel>Password:</ControlLabel>
          <FormControl/>
          <FormControl.Feedback />
        </FormGroup>
      </form>
    </Well>
  </Panel>
);

export default Login;
