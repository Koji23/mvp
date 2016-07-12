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


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      core: 'Notemaker'
    }
  }

  componentDidMount () {

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
      main = <Signup />
    } else if (this.state.core === 'Login') {
      main = <Login />
    } else if (this.state.core === 'Notemaker') {
      main = <Notemaker />
    }else if (this.state.core === 'PlainNotemaker') {
      main = <PlainNotemaker />
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