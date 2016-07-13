import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Well from 'react-bootstrap/lib/Well';

import ReactDOM from 'react-dom';
import {Editor, EditorState, RichUtils, convertFromRaw} from 'draft-js';

class Noteentry extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      editorState: EditorState.createWithContent(convertFromRaw(JSON.parse(this.props.note.note)) )
    }
    this.onChange = (editorState) => this.setState({editorState});
  }
  render () {
    return (
      <Panel className="comment" onClick={() => {this.props.changeAppEditorStateAndCore(this.state.editorState)}}>
        <h4 className="username">{this.props.note.username}</h4>
        <Editor 
          editorState={this.state.editorState} 
          onChange={this.onChange}
        />
      </Panel>
    );
  }
}


export default Noteentry;