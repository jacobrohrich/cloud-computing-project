// src/components/RegisterForm.js

import React from 'react';

function RegisterForm() {
  return (
    <div className="center-div">
      <form action="InsertBookDetails" method="post">
        <h3>Enter book details here:</h3>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="booktitle">Book Title:</label>
            <input type="text" id="booktitle" name="booktitle" placeholder="Lord of the Rings..." />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="author">Author:</label>
            <input type="text" id="author" name="author" placeholder="J.R.R. Tolkien..." />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="genre">Genre:</label>
            <input type="text" id="genre" name="genre" placeholder="High Fantasy..." />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="isbn">ISBN:</label>
            <input type="text" id="isbn" name="isbn" />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="summary">Summary:</label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <textarea name="summary" rows="5" cols="35" placeholder="Summary goes here..."></textarea>
          </div>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default RegisterForm;


