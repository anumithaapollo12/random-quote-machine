fetch("https://quotable-quotes.p.rapidapi.com")
  .then((response) => response.json())
  .then((data) => console.log(data));
