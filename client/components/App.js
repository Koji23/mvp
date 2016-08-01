import React from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Clearfix from 'react-bootstrap/lib/Clearfix';

import Navigation from './Navigation';
import Signup from './Signup';
import Login from './Login';
import Notemaker from './Notemaker';
import PlainNotemaker from './PlainNotemaker';
import Notelist from './Notelist';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      core: 'Login', //default to login
      loggedIn: false,
      appEditorState: undefined
    }
  }

  _changeAppEditorStateAndCore (newEditorState) {
    this.setState({appEditorState: newEditorState});
    // console.log("FROM APP ", this.state.test, newEditorState);
    this._changeCore(null, 'Notemaker');
  }

  _postUser (username, password, route) {
    var options = {
      username: username,
      password: password
    };
    console.log(route, options);
    postData(options, route, function(response){
      // DO SOME STUFF AFTER SIGN UP!!!!!!!!!!!!!
      // console.log('app state now: ', response);
      console.log("@@@", route);
      this.setState({
        loggedIn: response,
        core: 'Notemaker'
      });
    }.bind(this));
    // console.log(this, 'app state now officially ', this.state.loggedIn);
    
  }

  _changeCore (event, str) {
    // console.log('from onClick',str);
    // console.log('before setState', this.state.core);
    this.setState({core: str});
    // console.log('after setState', this.state.core);
  }



  render () {
    var main;
    if(this.state.core === 'Signup'){
      main = <Signup postUser={this._postUser.bind(this)}/>
    } else if (this.state.core === 'Login') {
      main = <Login postUser={this._postUser.bind(this)}/>
    } else if (this.state.core === 'Notemaker' && this.state.loggedIn) {
      main = <Notemaker appEditorState={this.state.appEditorState}/>
    }else if (this.state.core === 'Notelist' && this.state.loggedIn) {
      main = <Notelist changeAppEditorStateAndCore={this._changeAppEditorStateAndCore.bind(this)}/> //add props here
    }

    return (
      <Grid>
        <Row className="show-grid">
          <Navigation changeCore={this._changeCore.bind(this)}/>
        </Row>
        <Row>
          {main}
        </Row>
      </Grid>
    );
  }
}

export default App;



var postData = function(note, route, cb){
  return $.ajax({
    method: "POST",
    url: "http://localhost:3000/users" + route,
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