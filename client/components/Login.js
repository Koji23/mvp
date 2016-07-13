import React from 'react';
 
import Panel from 'react-bootstrap/lib/Panel';
import Well from 'react-bootstrap/lib/Well';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';


class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  _updateInput (stateProperty, inputVal) {
    var options = {};
    options[stateProperty] = inputVal;
    this.setState(options);
  }



  render () {
    return (
      <Panel >
        <Well>
          <h2>Login</h2>
          <form>
            <FormGroup>
              <ControlLabel>Username:</ControlLabel>
              <FormControl onChange={(event) =>{this._updateInput('username', event.target.value)} }/>
              <ControlLabel>Password:</ControlLabel>
              <FormControl onChange={(event) =>{this._updateInput('password', event.target.value)} }/>
              <FormControl.Feedback />
            </FormGroup>
            <Button  onClick={() => {this.props.postUser(this.state.username, this.state.password, '/login')}}>Submit</Button>
          </form>
        </Well>
      </Panel>
    );
  }
}


export default Login;

