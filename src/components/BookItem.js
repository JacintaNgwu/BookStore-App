import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBooks } from '../redux/Books/RemoveBook';
import '../styles/bookItem.css';

const BookItem = (props) => {
  const { id, title, author } = props;
  const dispatch = useDispatch();
  return (
    <li className="booklist-item">
      <div className="bookdetails">
        <div className="genre">Action</div>
        <div className="title">{title}</div>
        <div className="author">{author}</div>
        <div className="interact">
          <div className="comment">Comments</div>
          <span className="vr" />
          <button className="removeBtn" type="button" onClick={() => { dispatch(removeBooks(id)); }}>Remove</button>
          <span className="vr" />
          <div className="edit">Edit</div>
        </div>
      </div>
      <div className="progress">
        <div className="progress-bar">
          <div className="progress-bar-outer">
            <div className="progress-bar-inner" />
          </div>
        </div>
        <div className="progress-percentage">
          64%
          <span>Completed</span>
        </div>
      </div>
      <span className="vrr" />
      <div className="chapter">
        <div className="current">CURRENT CHAPTER</div>
        <div className="chapters">Chapter 17</div>
        <button type="button" className="update">
          UPDATE PROGRESS
        </button>
      </div>
    </li>
  );
};
BookItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookItem;
