/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Zaid Allam, Jan 19, 2020
******************************************/

/* 
Here, I define an array of objects. Each object contains a quote and relevant information about said quote.
I added citations and years to as many of these quotes as possible. Quotes get so convoluted and misattrubited 
that citing them correctly is sometimes impossible.
*/
const quotes = [
  {quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.", source: "Mahatma Gandhi"},
  {quote: "That which does not kill us makes us stronger.", source: "Friedrich Nietzsche", citation: "Maxims and Arrows", year: "1888"},
  {quote: "Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.", source: "Bernard Baruch"},
  {quote: "We must not allow other people’s limited perceptions to define us.", source: "Virginia Satir"},
  {quote: "Do what you can, with what you have, where you are.", source: "Theodore Roosevelt", year: "1905"},
  {quote: "Be yourself; everyone else is already taken.", source: "Oscar Wilde"},
  {quote: "This above all: to thine own self be true.", source: "William Shakespeare", citation: "Hamlet", year: "1609"},
  {quote: "If you cannot do great things, do small things in a great way.", source: "Napoleon Hill"},
  {quote: "If opportunity doesn’t knock, build a door.", source: "Milton Berle"},
  {quote: "Wise men speak because they have something to say; fools because they have to say something.", source: "Plato"}
];

// Here, I define a function that will fetch a random quote from the quotes array
function getRandomQuote() {
  let randIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randIndex];
}

/* 
Here, I define a function that updates the HTML on the page to display a new quote every time it is called. It also 
returns the html it uses to update the page, but the program doesn't use this functionality at this time.
*/
function printQuote() {
  let randQuote = getRandomQuote();
  let html = 
   `<p class="quote">${randQuote.quote}</p>
    <p class="source">${randQuote.source}`;
  if (randQuote.hasOwnProperty('citation')) {html += (`<span class="citation">${randQuote.citation}</span>`);}
  if (randQuote.hasOwnProperty('year')) {html += (`<span class="year">${randQuote.year}</span>`);}
  html += `</p>`;
  document.getElementById('quote-box').innerHTML = html;
  return html;
}

/*
This is an event listener. It was provided to me and created by the Treehouse Staff
*/
document.getElementById('load-quote').addEventListener("click", printQuote, false);