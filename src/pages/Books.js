import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/Books/FetchBook';
import BookList from '../components/BookList';
import AddBook from '../components/AddBook';
import Navigation from '../components/Navigation';
import '../styles/Books.css';

const Books = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.book);
  const books = [];

  Object.entries(data).forEach(([key, value]) => {
    const book = value[0];
    const id = { id: key };
    books.push({ ...book, ...id });
  });

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }
  return (
    <div className="contain">
      {' '}
      <div className="content">
        <div className="container">
          <Navigation />
        </div>
        <div className="header">
          <BookList books={books} />
          <AddBook />
        </div>
      </div>
    </div>
  );
};

export default Books;
