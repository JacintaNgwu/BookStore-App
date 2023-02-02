import React from 'react';
import PropTypes from 'prop-types';
import '../styles/BookList.css';
import BookItem from './BookItem';

const BookList = (props) => {
  const { books } = props;
  return (
    <div className="books">
      <ul>
        { books.map((book) => (
          <BookItem
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
          />
        ))}
      </ul>
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
    }),
  ),
};

BookList.defaultProps = {
  books: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
};

export default BookList;
