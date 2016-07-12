import React from 'react';

import Panel from 'react-bootstrap/lib/Panel';
import Well from 'react-bootstrap/lib/Well';


var postNote = function(note, cb){
  return $.ajax({
    method: "POST",
    url: "http://localhost:3000/notes",
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

class PlainNotemaker extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
     note: ''
    };
  }

  componentDidMount () {
    // console.log(Editor);
    console.log(postNote);
  }

  _updateNote (inputVal) {
    this.setState({
      note: inputVal
    });
    console.log(this.state.note);
  }

  _postNote (event) {
    console.log('the stateeee', this.state.note);
    postNote(JSON.stringify(this.state.note), function(){
      console.log('yo!');
    });
  }

  render () {
    return (
      <div>
        <h2>Plain Notemaker</h2>
          <Well>
            <textarea onChange={(event) => {this._updateNote(event.target.value)} } ></textarea> <br/>
            <button onClick={(event) => { this._postNote(event) } }>Save</button>
          </Well>
      </div>
    );
  }
}

export default PlainNotemaker; 



