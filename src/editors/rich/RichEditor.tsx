import React, { Component } from 'react';
import { Editor, EditorState, ContentState } from 'draft-js';

import './RichEditor.css';

interface InputProps {
  onChange: Function;
  defaultValue?: string;
}

export class RichEditor extends Component<
  InputProps,
  {
    editorState: EditorState;
  }
> {
  constructor(props: InputProps) {
    super(props);
    const contentState = ContentState.createFromText(props.defaultValue || '');
    this.state = { editorState: EditorState.createWithContent(contentState) };
  }

  onChange = (editorState: EditorState) => {
    this.setState({ editorState });
    this.props.onChange(editorState.getCurrentContent().getPlainText());
  };

  render() {
    return <Editor editorState={this.state.editorState} onChange={this.onChange} />;
  }
}
