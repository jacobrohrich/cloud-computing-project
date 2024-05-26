// src/components/BookSearchForm.js
import React, { useState } from 'react';

function BookSearchForm() {
  const [keyword, setKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/searchBookByTitle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: keyword }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="center-div">
      <h3>Enter search keywords:</h3>
      <input
        type="text"
        value={keyword}
        onChange={handleInputChange}
        placeholder="Enter book title..."
        size="35"
      />
      <button type="button" onClick={handleSearch}>Search</button>
      <div>
        <h4>Search Results:</h4>
        <ul>
          {searchResults.map((book, index) => (
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

export default BookSearchForm;

