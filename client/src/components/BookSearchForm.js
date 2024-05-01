// src/components/BookSearchForm.js
import React from 'react';

function BookSearchForm() {
  return (
    <div className="center-div">
      <form action="GetBookDetails" method="post">
        <h3>Enter search keywords:</h3>
        <input type="submit" value="Search" />
        <input type="text" name="keyword" placeholder="George R. R. Martin..." size="35" />
      </form>
    </div>
  );
}

export default BookSearchForm;

