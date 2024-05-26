import React, { useState } from 'react';

function RegisterForm() {
  // State variables to store form data
  const [bookTitle, setBookTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [isbn, setIsbn] = useState('');
  const [summary, setSummary] = useState('');

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare data to send to backend
    const formData = {
      bookTitle,
      author,
      genre,
      isbn,
      summary
    };

    try {
      // Send form data to backend endpoint
      const response = await fetch('http://localhost:8000/api/insertBookDetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      // Handle response from the backend
      if (response.ok) {
        console.log('Data inserted successfully!');
        // Clear form after successful submission
        setBookTitle('');
        setAuthor('');
        setGenre('');
        setIsbn('');
        setSummary('');
      } else {
        console.error('Failed to insert data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="center-div">
      <form onSubmit={handleSubmit}>
        <h3>Enter book details here:</h3>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="booktitle">Book Title:</label>
            <input 
              type="text" 
              id="booktitle" 
              name="booktitle" 
              value={bookTitle} 
              onChange={(e) => setBookTitle(e.target.value)} 
              placeholder="Lord of the Rings..." 
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="author">Author:</label>
            <input 
              type="text" 
              id="author" 
              name="author" 
              value={author} 
              onChange={(e) => setAuthor(e.target.value)} 
              placeholder="J.R.R. Tolkien..." 
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="genre">Genre:</label>
            <input 
              type="text" 
              id="genre" 
              name="genre" 
              value={genre} 
              onChange={(e) => setGenre(e.target.value)} 
              placeholder="High Fantasy..." 
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="isbn">ISBN:</label>
            <input 
              type="text" 
              id="isbn" 
              name="isbn" 
              value={isbn} 
              onChange={(e) => setIsbn(e.target.value)} 
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="summary">Summary:</label>
            <textarea 
              id="summary" 
              name="summary" 
              value={summary} 
              onChange={(e) => setSummary(e.target.value)} 
              rows="5" 
              cols="35" 
              placeholder="Summary goes here..."
              required
            ></textarea>
          </div>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default RegisterForm;
