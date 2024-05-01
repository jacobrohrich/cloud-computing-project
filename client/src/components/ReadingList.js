// src/components/ReadingList.js
import React from 'react';

function ReadingList() {
  return (
    <div className="center-div">
      <form method="post" action="DisplayReadingList">
        <h2>Click the button to display your reading list:</h2>
        <button type="submit">Display Reading List</button>
      </form>
    </div>
  );
}

export default ReadingList;

