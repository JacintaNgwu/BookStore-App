import React from 'react';
import '../styles/BookList.css';
import BookItem from './BookItem';

const BookList = () => {
  const data = [
    {
      id: 1, genre: 'Action', title: 'The Hunger Games', author: 'Suzanne Collins',
    },
    {
      id: 1, genre: 'Science Fiction', title: 'Dune', author: 'Frank Herbrt',
    },
    {
      id: 1, genre: 'Economy', title: 'Capital in the Twenty-First Century', author: 'Suzanne Collins',
    },
  ];
  return (
    <div className="books">
      <div className="book">
        <ul className="booklist">
          {data.map(({
            id, genre, title, author,
          }) => (
            <BookItem key={id} genre={genre} title={title} author={author} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default BookList;
