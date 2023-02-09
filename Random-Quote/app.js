const quotes = [
    {
      text: "Life is 10% what happens to us and 90% how we react to it.",
      author: "Charles R. Swindoll"
    },
    {
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston S. Churchill"
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      text: "Hardships often prepare ordinary people for an extraordinary destiny.",
      author: "C.S. Lewis"
    }
  ];
  
  const quoteBox = document.getElementById("quote-box");
  const text = document.getElementById("text");
  const author = document.getElementById("author");
  const newQuoteButton = document.getElementById("new-quote");
  
  newQuoteButton.addEventListener("click", displayQuote);
  
  function displayQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    text.innerText = quote.text;
    author.innerText = quote.author;
  }
  
  displayQuote();
  