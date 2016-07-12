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

  _postUser () {
    var options = {
      username: this.state.username,
      password: this.state.password
    };
    postNote(options, function(response){
      //DO SOME STUFF AFTER SIGN UP!!!!!!!!!!!!!
    });
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
            <Button  onClick={this._postUser.bind(this)}>Submit</Button>
          </form>
        </Well>
      </Panel>
    );
  }
}


export default Login;

//Jquery ajax
var postNote = function(note, cb){
  return $.ajax({
    method: "POST",
    url: "http://localhost:3000/users",
    data: JSON.stringify(note),
    contentType: 'application/json',
    success: function(data){
      console.log('Post Success!', data);
      cb(data);
    },
    error: function(data){
      console.error('Notemaker: Failed to send note', data);
    }
  })
};