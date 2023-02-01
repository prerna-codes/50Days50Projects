const joke = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

//get jokes from joke API
getJokes();

jokeBtn.addEventListener('click', getJokes); // By clicking buttons multiple jokes are there at once 

async function getJokes() {

    const config = {
        headers: {
            "Accept": "application/json" //Accepted joke
        }
    }
    
    const res = await fetch('https://icanhazdadjoke.com/', config); //fetch joke from joke API
    const data = await res.json();
    joke.innerText = data.joke;
    
}