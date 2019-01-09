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

class EditingNote extends Component {

  state = {
    note: this.props.noteEditing[0].text,
    color:  this.props.noteEditing[0].color,
    title: this.props.noteEditing[0].title,
    date: this.props.noteEditing[0].date,
    finished: this.props.noteEditing[0].finished,
    id: this.props.noteEditing[0].id
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
      finished: this.state.finished,
      date: this.state.date,
      id: this.state.id
    }

    this.props.noteEdit(note);

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

          <button className="editor__button" onClick={this.handleSubmit}>CHANGE</button>
        </div>
      </div>
    );
  }

}

export default EditingNote;
