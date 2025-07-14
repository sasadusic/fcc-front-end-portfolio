import React from 'react'
import { useState, useEffect } from 'react';

const Quote = () => {
    const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getQuote = async () => {
    try {
      const res = await fetch(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      );

      const data = await res.json();
      // console.log(data);
      const randomQuote =
        data.quotes[Math.floor(Math.random() * data.quotes.length)];
      setQuote(randomQuote.quote);
      setAuthor(randomQuote.author);
      // console.log(randomQuote);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };


  useEffect(() => {
    getQuote();
  }, []);

  return (<div id='home' className='home'>

     <div id='quote' className="cont">
      <div id="quote-box">
        <div className='body'>

        <h2 id="text">"{quote}"</h2>
        <p id="author">- {author}</p>
        </div>
        <div className='footer'>
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `"${quote}" - ${author}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block", marginTop: "10px" }}
            >
          Tweet
        </a>
        <button id="new-quote" onClick={getQuote}>
          New Quote
        </button>
          </div>
      </div>
    </div>
  </div>
  );
}

export default Quote