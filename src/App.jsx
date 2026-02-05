import React, { useState } from "react";
import QuoteBox from "./QuoteBox.jsx";
import "./index.css";

const quotes = [
  { text: "Courage is grace under pressure.", author: "Ernest Hemingway" },
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "Creativity takes courage.", author: "Henri Matisse" },
  { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
  { text: "Every moment is a fresh beginning.", author: "T.S. Eliot" }
];

export default function App() {
  const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);

  const getNewQuote = () => {
    let newQuote;
    do {
      newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (newQuote.text === quote.text);
    setQuote(newQuote);
  };

  const tweetQuote = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.text}" - ${quote.author}`)}`;

  return (
    <div id="quote-box">
      <QuoteBox quote={quote} />
      <div>
        <button id="new-quote" onClick={getNewQuote}>New Quote</button>
        <a id="tweet-quote" href={tweetQuote} target="_blank" rel="noopener noreferrer">Tweet Quote</a>
      </div>
    </div>
  );
}
