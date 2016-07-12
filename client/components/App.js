import React from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Clearfix from 'react-bootstrap/lib/Clearfix';

import Navigation from './Navigation';
import Signup from './Signup';


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentCom: '',
    }
  }

  componentDidMount () {

  }

  render () {
    return (
      <Grid>
        <Row className="show-grid">
          <Navigation />
        </Row>
        <Row>
          <Signup />
        </Row>
      </Grid>
    );
  }
}

export default App;