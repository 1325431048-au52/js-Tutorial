const jokeEl = document.getElementById('joke');
const fetchJokeBtn = document.getElementById('fetch-joke-btn');

// Fetch a random joke from the Dad Jokes API
const fetchJoke = async () => {
  const url = 'https://icanhazdadjoke.com/';
  const response = await fetch(url, {
    headers: {
      'Accept': 'application/json'
    }
  });
  const data = await response.json();
  return data.joke;
};

// Display the joke on the webpage
const displayJoke = async () => {
  const joke = await fetchJoke();
  jokeEl.innerHTML = joke;
};

// Add click event listener to fetch joke button
fetchJokeBtn.addEventListener('click', displayJoke);
