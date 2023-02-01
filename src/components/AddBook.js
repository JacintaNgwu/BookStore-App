import React, { useState } from 'react';
import '../styles/AddBook.css';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/Books/Books';

const AddBook = () => {
  const [data, setData] = useState({ title: '', author: '', id: '' });
  const dispatch = useDispatch();
  const handleAddBook = (e) => {
    setData({ ...data, [e.target.name]: e.target.value, id: uuidv4() });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(data));
    setData({ title: '', author: '', id: '' });
  };
  return (
    <div className="addbook">
      <div className="addbook-title">ADD NEW BOOK</div>
      <form className="addbook-form" onSubmit={handleSubmit}>
        <div className="addbook-form-item">
          <input type="text" name="title" id="title" placeholder="Book Title" value={data.title} onChange={handleAddBook} />
        </div>
        <div className="addbook-form-item">
          <input type="text" name="author" id="author" placeholder="Author" value={data.author} onChange={handleAddBook} />
        </div>
        <div className="addbook-form-item">
          <button type="submit">ADD BOOK</button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
