// src/components/RateAndReviewForm.js
import React from 'react';

function RateAndReviewForm() {
  return (
    <div className="center-div">
      <form method="post" action="InsertRateandReviews">
        <h3>Enter Rate and Review:</h3>
        <label htmlFor="rate">Rating:</label>
        <input type="number" id="rate" name="rate" step="0.1" min="0" max="5" placeholder="Enter rating (0-5)" /><br /><br />
        <label htmlFor="review">Review:</label><br />
        <textarea id="review" name="review" rows="5" cols="35" placeholder="Enter your review"></textarea>
        <h2>Enter search keywords:</h2>
        <label htmlFor="keyword">Keyword:</label>
        <input type="text" id="keyword" name="keyword" placeholder="Enter keyword" />
        <p><input type="submit" /></p>
      </form>
    </div>
  );
}

export default RateAndReviewForm;

