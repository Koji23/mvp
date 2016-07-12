import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Well from 'react-bootstrap/lib/Well';

var Noteentry = (props) => (
  <Panel className="comment">
    <h4 className="username">{props.message.username}</h4>
    <span className="note">{props.note.note}</span>
  </Panel>
);

export default Noteentry;