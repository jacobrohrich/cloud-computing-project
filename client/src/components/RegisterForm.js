// src/components/RegisterForm.js
import React from 'react';

function RegisterForm() {
  return (
    <div className="center-div">
      <form action="InsertBookDetails" method="post">
        <h3>Enter book details here:</h3>
        <label htmlFor="booktitle">Book Title:</label>
        <input type="text" id="booktitle" name="booktitle" placeholder="Lord of the Rings..." />
        {/* Add other input fields */}
        <input type="submit" />
      </form>
    </div>
  );
}

export default RegisterForm;

