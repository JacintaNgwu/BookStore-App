import React from 'react'
import '../styles/AddBook.css'

const AddBook = () => {
  return (
    <div className="addbook">
    <div className="addbook-title">ADD NEW BOOK</div>
    <form className="addbook-form">
      <div className="addbook-form-item">
        <input type="text" name="title" id="title" placeholder="Book Title" />
      </div>
      <div className="addbook-form-item">
        <input type="text" name="author" id="author" placeholder="Author" />
      </div>
      <div className="addbook-form-item">
        <button type="submit">ADD BOOK</button>
      </div>
    </form>
  </div>
  )
}

export default AddBook