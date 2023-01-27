import React from 'react';
import '../styles/BookList.css';
import BookItem from "./BookItem";

const BookList = () => {
  const data=[{id:1,title:"t1",author:"a1"},{id:1,title:"t2",author:"a2"}]
  return (
    <div className="books">
      <div className="book">
        <ul className="booklist">
        {data.map({id,title,author})=> <BookItem title={title} author={author}/>}
        </ul>
      </div>
    </div>
  );
};
export default BookList;
