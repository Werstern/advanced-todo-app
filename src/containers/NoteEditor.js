import React, { Component } from 'react';

import ColorPicker from '../components/ColorPicker.js';
import './NoteEditor.css';

const colorPalette = [
  '#FFFFFF',
  '#FF897D',
  '#FFD27A',
  '#FFFF85',
  '#CBFF8A',
  '#A4FFEB',
  '#7CD7FF',
  '#80AFFF',
  '#B384FF',
  '#F9BAD0',
  '#D7CCC8',
  '#CFD8DC'];

class NoteEditor extends Component {

  state = {
    note: '',
    color:  colorPalette[0],
    title: ''
  }

  handlePickColor = (color) => {
    this.setState({
      ...this.state,
      color
    });
  }

  handleNoteChange = (e) => {

    this.setState({
      ...this.state,
      note: e.target.value
    });
  }

  handleTitleChange = (e) => {
    this.setState({
      ...this.state,
      title: e.target.value
    });
  }

  handleSubmit = () => {
    const note = {
      text: this.state.note,
      color: this.state.color,
      title: this.state.title,
      finished: false,
      date: Date.now(),
      id: this.props.notesLength
    }

    this.props.noteAdd(note);

    this.resetState();
  }

  resetState() {
    this.setState({
      note: '',
      title: '',
      color:  colorPalette[0]
    });
  }

  render() {

    return (
      <div className="editor">
        <input
          type="text"
          onChange={this.handleTitleChange}
          placeholder="Title"
          value={this.state.title}
          className="editor__input"
        />
        <textarea
          rows={5}
          cols={100}
          placeholder="Type note here..."
          className="editor__textarea"
          onChange={this.handleNoteChange}
          value={this.state.note}
        />

        <div className="editor__manage_panel">
          <ColorPicker
            onColorChange={this.handlePickColor}
            colorPalette={colorPalette}
            chosenColor={this.state.color}
          />

          <button className="editor__button" onClick={this.handleSubmit}>Add</button>
        </div>
      </div>
    );
  }

}

export default NoteEditor;
