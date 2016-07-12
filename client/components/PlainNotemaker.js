import React from 'react';

import Panel from 'react-bootstrap/lib/Panel';
import Well from 'react-bootstrap/lib/Well';


class PlainNotemaker extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
     note: ''
    };
  }

  componentDidMount () {
    // console.log(Editor);
  }

  _updateNote (inputVal) {
    this.setState({
      note: inputVal
    });
    console.log(this.state.note);
  }


  render () {
    return (
      <div>
        <h2>Plain Notemaker</h2>
          <Well>
            <textarea onChange={(event) => {this._updateNote(event.target.value)} } ></textarea> <br/>
            <button  >Save</button>
          </Well>
      </div>
    );
  }
}

export default PlainNotemaker; 



