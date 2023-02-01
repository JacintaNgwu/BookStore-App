import React from 'react';
import '../styles/BookList.css';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BookList = () => {
  const books = useSelector((state) => state.books.books);

  return (
    <div className="books">
      <ul>
        {books && books.length > 0
          ? books.map((book) => (
            <BookItem
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
            />
          ))
          : 'No books available'}
      </ul>
    </div>
  );
};
export default BookList;
