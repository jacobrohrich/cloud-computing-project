import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import BookSearchForm from './components/BookSearchForm';
import RegisterForm from './components/RegisterForm';
import RateAndReviewForm from './components/RateAndReviewForm';
import ReadingList from './components/ReadingList';
import "./App.css"; // Import the App.css file for styling

function App() {
  return (
    <div className="App">
      <header className="header"> {/* Apply header class */}
        <h1 className="title">Library Book Finder</h1> {/* Apply title class */}
      </header>
      <div className="center-div">
        <Navbar />
        <Routes>
          <Route path="/" element={<BookSearchForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/rate-review" element={<RateAndReviewForm />} />
          <Route path="/reading-list" element={<ReadingList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
