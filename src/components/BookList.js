import React from 'react'
import '../styles/BookList.css'

const BookList = () => {
  return (
    <div className="books">
    <div className="book">
      <ul className="booklist">
        <li className="booklist-item">
          <div className="bookdetails">
            <div className="genre">Action</div>
            <div className="title">The Hunger Games</div>
            <div className="author">Suzanne Collins</div>
            <div className="interact">
              <div className="comment">Comments</div>
              <span className="vr" />
              <div className="remove">Remove</div>
              <span className="vr" />
              <div className="edit">Edit</div>
            </div>
          </div>
          <div className="progress">
            <div className="progress-bar">
              <div className="progress-bar-outer">
                <div className="progress-bar-inner" />
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#e91e63" />
                    <stop offset="100%" stopColor="#673ab7" />
                  </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" strokeLinecap="round" />
              </svg>
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
        <li className="booklist-item">
          <div className="bookdetails">
            <div className="genre">Science Fiction</div>
            <div className="title">Dune</div>
            <div className="author">Frank Herbert</div>
            <div className="interact">
              <div className="comment">Comments</div>
              <span className="vr" />
              <div className="remove">Remove</div>
              <span className="vr" />
              <div className="edit">Edit</div>
            </div>
          </div>
          <div className="progress">
            <div className="progress-bar">
              <div className="progress-bar-outer">
                <div className="progress-bar-inner" />
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#e91e63" />
                    <stop offset="100%" stopColor="#673ab7" />
                  </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" strokeLinecap="round" />
              </svg>
            </div>
            <div className="progress-percentage">
              8%
              <span>Completed</span>
            </div>
          </div>
          <span className="vrr" />
          <div className="chapter">
            <div className="current">CURRENT CHAPTER</div>
            <div className="chapters">Chapter3:*A Lesson Learned*</div>
            <button type="button" className="update">
              UPDATE PROGRESS
            </button>
          </div>
        </li>
        <li className="booklist-item">
          <div className="bookdetails">
            <div className="genre">Economy</div>
            <div className="title">Capital in the Twenty-First Century</div>
            <div className="author">Suzanne Collins</div>
            <div className="interact">
              <div className="comment">Comments</div>
              <span className="vr" />
              <div className="remove">Remove</div>
              <span className="vr" />
              <div className="edit">Edit</div>
            </div>
          </div>
          <div className="progress">
            <div className="progress-bar">
              <div className="progress-bar-outer">
                <div className="progress-bar-inner" />
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#e91e63" />
                    <stop offset="100%" stopColor="#673ab7" />
                  </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" strokeLinecap="round" />
              </svg>
            </div>
            <div className="progress-percentage">
              0%
              <span>Completed</span>
            </div>
          </div>
          <span className="vrr" />
          <div className="chapter">
            <div className="current">CURRENT CHAPTER</div>
            <div className="chapters">Introduction</div>
            <button type="button" className="update">
              UPDATE PROGRESS
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default BookList