import React from 'react';

import Panel from 'react-bootstrap/lib/Panel';
import Well from 'react-bootstrap/lib/Well';


class PlainNotemaker extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
     
    };
  }

  componentDidMount () {
    // console.log(Editor);
  }

  


  render () {
    return (
      <div>
        <h2>Plain Notemaker</h2>
          <Well>
            <textarea></textarea>
            <button onClick={}></button>
          </Well>
      </div>
    );
  }
}

export default PlainNotemaker; 



