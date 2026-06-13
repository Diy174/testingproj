import { useState } from "react";

const quotes = [
  "Success is not final, failure is not fatal.",
  "Dream big and dare to fail.",
  "The future depends on what you do today.",
  "Stay hungry, stay foolish.",
  "Do something today that your future self will thank you for."
];

export default function App() {
  const [quote, setQuote] = useState(quotes[0]);

  const generateQuote = () => {
    const randomIndex = Math.floor(
      Math.random() * quotes.length
    );
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="container">
      <h1>Quote Generator</h1>

      <div className="quote-box">
        {quote}
      </div>

      <button onClick={generateQuote}>
        Generate Quote
      </button>
    </div>
  );
}