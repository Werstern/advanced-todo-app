import React from 'react';
import classNames from 'classnames';

import './Note.css';

const Note = function(props) {
  const {
    id,
    text,
    title,
    onNoteDelete,
    onNoteEdit,
    color,
    date,
    finished,
    layout,
    onNoteFinished
  } = props;

  const noteDate = new Date(date);

  return (
    <div
      className={classNames(['note__container', layout])}
      style={{backgroundColor: color}}
      key={id}
    >

      <i
        className="fa fa-pencil-square-o note__edit-icon"
        aria-hidden="true"
        onClick={() => onNoteEdit(id)}
      />

      <span className="note__delete-icon" onClick={() => onNoteDelete(id)}>x</span>
      <h6
        className={classNames(finished ? 'finished_note' : '')}
      >
        {title}
      </h6>
      <p
        className={classNames(['note__text', finished ? 'finished_note' : ''])}
        onClick={() => onNoteFinished(id)}
      >
        {text}
      </p>
      <h6 className={classNames(finished ? 'finished_note' : '')}>
        {`${noteDate.getFullYear()}, ${noteDate.getHours()}:${noteDate.getMinutes()}`}
      </h6>
    </div>
  );
}

export default Note;
