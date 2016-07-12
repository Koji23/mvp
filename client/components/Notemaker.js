import React from 'react';

import Panel from 'react-bootstrap/lib/Panel';
import Well from 'react-bootstrap/lib/Well';

//for draft.js
import ReactDOM from 'react-dom';
import {Editor, EditorState, RichUtils} from 'draft-js';


class Notemaker extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.onChange = (editorState) => this.setState({editorState});
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  componentDidMount () {
    // console.log(Editor);
  }

  handleKeyCommand(command) {
    console.log('heard from handle key command ', command); //fires on enter
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  _onBoldClick() {
    // console.log('???heard from onBoldClikc');
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  render () {
    const {editorState} = this.state;
    console.log('from render: ',this.state.editorState);
    return (
      <div>
        <h2>Notemaker</h2>
          <button onClick={this._onBoldClick.bind(this)}>Bold</button>
          <div>
            <Editor 
              editorState={this.state.editorState} 
              handleKeyCommand={this.handleKeyCommand}
              onChange={this.onChange} 
            />
          </div>
      </div>
    );
  }
}

export default Notemaker; 






// return (
//   <Panel>
//     <Well>
//       <h2>Notemaker</h2>
//         <button onClick={this._onBoldClick.bind(this)}>Bold</button>
//         <Panel>
//           <Editor 
//             editorState={this.state.editorState} 
//             handleKeyCommand={this.handleKeyCommand}
//             onChange={this.onChange} 
//           />
//         </Panel>
//     </Well>
//   </Panel>
// );

