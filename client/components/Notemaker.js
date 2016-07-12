import React from 'react';

import Panel from 'react-bootstrap/lib/Panel';
import Well from 'react-bootstrap/lib/Well';

class Notemaker extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount () {

  }

  render () {
    return (
      <Panel>
        <Well>
          <h2>Notemaker</h2>
          
        </Well>
      </Panel>
    );
  }
}

export default Notemaker;