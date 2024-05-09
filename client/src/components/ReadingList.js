// src/components/ReadingList.js
import React, { useState } from 'react';

function ReadingList() {
  const [readingList, setReadingList] = useState([]);

  const handleDisplayReadingList = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/getAllBooks');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setReadingList(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="center-div">
      <h2>Click the button to display your reading list:</h2>
      <button type="button" onClick={handleDisplayReadingList}>Display Reading List</button>
      <div>
        <h4>Reading List:</h4>
        <ul>
          {readingList.map((book, index) => (
            <li key={index}>
              <strong>Title:</strong> {book.Book_Title}<br />
              <strong>Author:</strong> {book.Author}<br />
              <strong>Genre:</strong> {book.Genre}<br />
              <strong>ISBN:</strong> {book.ISBN}<br />
              <strong>Summary:</strong> {book.Summary}<br />
              <strong>Publisher:</strong> {book.Publisher}<br />
              <strong>Published Year:</strong> {book.PublishedYear}<br />
              <strong>Rate:</strong> {book.Rate}<br />
              <strong>Reviews:</strong> {book.Reviews}<br />
              <br />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ReadingList;

