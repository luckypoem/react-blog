import React from 'react';
import draftToHtml from 'draftjs-to-html';
import { Editor, editorStyle, wrapperStyle, toolbarStyle } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

let contentState = '';
class TextEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        };

        this.onEditorStateChange = this.onEditorStateChange.bind(this);
    }

    onEditorStateChange(editorState) {
        this.setState({
            editorState: editorState
        });
        contentState = this.state.editorState.getCurrentContent();
    }



    render() {
        const {editorState} = this.state;
        return <Editor
            editorState={editorState}
            onEditorStateChange={this.onEditorStateChange}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
            wrapperStyle={wrapperStyle}
            editorStyle={editorStyle}
            toolbarStyle={toolbarStyle}
        />;
    }
}

function output() {
    let content = convertToRaw(contentState);
    return draftToHtml(content);
}



export {TextEditor, output};