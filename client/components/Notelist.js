import React from 'react';
import Noteentry from './Noteentry';

import Panel from 'react-bootstrap/lib/Panel';
import Well from 'react-bootstrap/lib/Well';
import Button from 'react-bootstrap/lib/Button';

var getMessages = function(cb){
  return $.ajax({
    method: "GET",
    url: "http://localhost:3000/notes",
    contentType: "application/json",
    success: function(data){
      cb(data);
    },
    error: function(data){
      // console.log(data);
      console.err('NoteTaker: Failed to retrieve messages', data);
    }
  });
};

class Notelist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  componentDidMount () {
    //get notes
    // _getNotes();
  }

  _getNotes () {
    var context = this;
    getMessages(function(data){
      context.setState({notes: data});
    });
  }

  render () {
    return (
      <Well className='noteList'>
        <h1 >Notes:</h1>
        <ul>
          {this.state.notes.map((note)=>{
            return <Noteentry note={note} key={note._id}/>
            // return <li>{note._id}</li>
          })}
        </ul>
        <Button  onClick={this._getNotes.bind(this)}>Load More</Button>
      </Well>
    );
  }
}


export default Notelist;