import React, { useState } from "react";
import "./App.css";

function App() {
  const quotes = [
    "Success is not final, failure is not fatal.",
    "Believe you can and you're halfway there.",
    "Dream big and dare to fail.",
    "Stay hungry, stay foolish.",
    "Every day is a new beginning."
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="container">
      <h1>Quote Generator</h1>

      <div className="quote-box">
        <p>{quote}</p>
      </div>

      <button onClick={generateQuote}>
        Generate Quote
      </button>
    </div>
  );
}

export default App;