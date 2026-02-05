import React from "react";

export default function QuoteBox({ quote }) {
  return (
    <>
      <div id="text">"{quote.text}"</div>
      <div id="author">- {quote.author}</div>
    </>
  );
}
