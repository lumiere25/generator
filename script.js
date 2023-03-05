// Get quotes from an API
// try catches allow us to attempt to complete a fetch request, if it fails, we can catch the error information and do something with it.

// In a production website we could pass this as an alert function.
// Or any other UI I have created to show the users any issue with functinality.


const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
// const loader = document.getElementById('loader');

// We have an empty array here because this will be filled with our data from the API
let apiQuotes = [];

// Show loading
// function loading() {
//   loader.hidden = false;
//   quoteContainer.hidden = true;
// }

// Hide Loading
// function complete() {
//   quoteContainer.hidden = false;
//   loader.hidden = true;
// }

function newQuote() {
  // loading();
const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
 // Check if author field is blank and replace with 'unknown';
  if(!quote.author) {
    authorText.textContent = 'unknown';
  } else {
    authorText.textContent = quote.author;
  }

// Check quote length to determine styling
if(quote.text.length > 50) {
  quoteText.classList.add('long-quote');
} else {
  quoteText.classList.remove('long-quote');
}

// Set quote, hide loader

 quoteText.textContent = quote.text;
//  complete();
}




async function getQuotes() {
  // loading();
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
  try {
    // This constant will not populate until there is some data fetched.
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error)  {

  }
}


// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank')
}

// event listeners on button click
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// // on lOad
// newQuote();
getQuotes();
