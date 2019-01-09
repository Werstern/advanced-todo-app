import React from 'react';

import './ControlNotes.css';
import classNames from 'classnames';
import '../assets/font-awesome.css';

const ControlNotes = (props) => {

  const {
    layout,
    filter,
    searchQuery,
    onHandleLayOut,
    onHandleFilter,
    onHandleSearch } = props;

  return (
    <div className="control_notes__container">
      <div className="filter">
        <span
          className={classNames(['filter', filter === 'all' && 'active'])}
          data-val="all"
          onClick={(e) => onHandleFilter(e.target.dataset.val)}
        >
          All
        </span>
        <span
          className={classNames(['filter', filter === 'completed' && 'active'])}
          data-val="completed"
            onClick={(e) => onHandleFilter(e.target.dataset.val)}
        >
          Completed
        </span>
      </div>
      <div className="control_notes__search">
        <input
          type="text"
          name="search"
          placeholder="Search note here..."
          value={searchQuery}
          onChange={(e) => onHandleSearch(e.target.value)}
          className="controlnotes__input"
        />
      </div>

      <div className="views">
        <i
          className={classNames(['fa fa-th view view--block', layout === 'block' && 'active'])}
          data-val="block"
          onClick={(e) => onHandleLayOut(e.target.dataset.val)}
        />
        <i
          className={classNames(['fa fa-th-list view view--list', layout === 'list' && 'active'])}
          data-val="list"
          onClick={(e) => onHandleLayOut(e.target.dataset.val)}
        />
      </div>
    </div>
  );
}

export default ControlNotes;
