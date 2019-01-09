import React from 'react';
import Masonry from 'react-masonry-component';

import './NotesGrid.css';
import Note from './Note.js';

const masonryOptions = {
  columnWidth: 250,
  gutter: 10,
  fitWidth: true
};

const NotesGrid = (props) => {

const {
  notes,
  onDelete,
  layout,
  searchQuery,
  filter,
  onNoteFinished,
  onNoteEdit} = props;

const filteredNotes = notes.filter(note => {

  if (filter === 'all') {
    return note;
  } else {
    return note.finished;
  }
});

const resultNotes = filteredNotes.filter(note => {
  const searchValue = note.text.toLowerCase();
  return searchValue.indexOf(searchQuery.toLowerCase()) !== -1;
});

return (
    <Masonry
      className="notesgrid__container"
      options={masonryOptions}
    >
      {
        resultNotes.map( note => {
          return (
            <Note
              color={note.color}
              key={note.id}
              id={note.id}
              text={note.text}
              title={note.title}
              date={note.date}
              finished={note.finished}
              layout={layout}
              onNoteDelete={onDelete}
              onNoteFinished={onNoteFinished}
              onNoteEdit={onNoteEdit}
              />
            );
        })
      }
    </Masonry>
  );
}

export default NotesGrid;
