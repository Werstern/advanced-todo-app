import React, { Component } from 'react';

import Header from '../components/Header';
import NoteEditor from './NoteEditor';
import EditingNote from './EditingNote';
import ControlNotes from '../components/ControlNotes';
import NotesGrid from '../components/NotesGrid';
import './App.css';

class App extends Component {
  state = {
    notes: [],
    layout: 'block',
    filter: 'all',
    backgroundImage: '',
    editing: false,
    edited_id: '',
    searchQuery: ''
  }

  componentDidMount() {
    const storage = JSON.parse(localStorage.getItem('advancedTodo')) || {notes: [], backgroundImage: 'background1.jpg' };

    this.setState({
      notes: storage.notes,
      backgroundImage: storage.backgroundImage
    });
  }

  componentDidUpdate() {
    const storage = JSON.stringify({notes: this.state.notes, backgroundImage: this.state.backgroundImage});
    localStorage.setItem('advancedTodo', storage);
  }


  bgChange = (background) => {
    this.setState({
      ...this.state,
      backgroundImage: background
    });
  }

  handleLayout = (layout) => {
    this.setState({
      ...this.state,
      layout: layout
    });
  }

  handleFilter = (filter) => {
    this.setState({
      ...this.state,
      filter: filter
    });
  }

  handleSearch = (search) => {
    this.setState({
      ...this.state,
      searchQuery: search
    });
  }

  handleNoteAdd = (note) => {
    this.setState({
      ...this.state,
      notes: [
        note,
        ...this.state.notes
      ]
    });
  }

  handleNoteDelete = (id) => {
    let notes = this.state.notes.filter(note => {
      return note.id !== id;
    });

    this.setState({
      ...this.props,
      notes: notes
    });
  }

  handleFinishedNote = (id) => {
    const notes = this.state.notes.map(note => {
      if (note.id === id) {
        note.finished = !note.finished;
      }

      return note;
    });

    this.setState({
      ...this.props,
      notes: notes
    });
  }

  handleNoteEdit = (id) => {
    this.setState({
      ...this.props,
      editing: true,
      edited_id: id
    });
  }

  noteEditing = (id) => {
    const note = this.state.notes.filter(note => {
      return note.id === id;
    });

    return note;
  }

  handleNoteEditing = (editedNote) => {
    let notes = this.state.notes.map(note => {
      return (note.id === editedNote.id) ? editedNote : note;
    });

    this.setState({
      ...this.props,
      editing: false,
      notes: notes
    });
  }

  render() {
    return (
      <div
        style={{backgroundImage:`url(${this.state.backgroundImage})`}}
        className="App_container"
      >
        <div
          className="App"
        >
          <Header
            title="NotesApp"
            onBgChange={this.bgChange}
            backgroundImage={this.state.backgroundImage}
          />

          {
            this.state.editing ?
            <EditingNote
              noteEditing={this.noteEditing(this.state.edited_id)}
              noteEdit={this.handleNoteEditing}
            />
            :
            <NoteEditor
              noteAdd={this.handleNoteAdd}
              notesLength={this.state.notes.length}
            />
          }


          <ControlNotes
            layout={this.state.layout}
            filter={this.state.filter}
            searchQuery={this.state.searchQuery}
            onHandleLayOut={this.handleLayout}
            onHandleFilter={this.handleFilter}
            onHandleSearch={this.handleSearch}
          />

          <NotesGrid
            notes={this.state.notes}
            layout={this.state.layout}
            filter={this.state.filter}
            searchQuery={this.state.searchQuery}
            onDelete={this.handleNoteDelete}
            onNoteFinished={this.handleFinishedNote}
            onNoteEdit={this.handleNoteEdit}
          />
        </div>
      </div>
    );
  }
}

export default App;
