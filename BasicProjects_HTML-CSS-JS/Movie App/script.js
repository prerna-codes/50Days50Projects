//TMDB - movie api

const API_KEY = 'api_key=  fad2fadc9c290a7a2118d1f0111b4bbff';
const BASE_URL='https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' +
API_KEY ;
const IMG_URL= 'https://image.tmdb.org/t/p/w500'; // TMDB images

const searchURL =BASE_URL + '/search/movie?' +API_KEY;

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_URL);

function getMovies(url){

    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results)
        showMovies(data.results); // 
  
    }) 
}

function showMovies(data) {
//before looping set innertext or innerHTML
main.innerHTML ='';

    data.forEach(movie => {
        const{title,poster_path,vote_average , overview} = movie;
        const movieE1 = document.createElement('div');
        movieE1.classList.add('movie');//adding class movie
        movieE1.innerHTML =`
         <img src="${IMG_URL + poster_path}" alt="${title}">
        <div class="movie-info">
            <h3>${title} </h3>
            <span class="${getColor(vote_average)}">${vote_average}</span>
        </div>

        <div class="overview">
            <h3>Overview</h3>
            ${overview}
         </div>
    `

    main.appendChild(movieE1); //API movies will show on screen
    });
}

function getColor(vote){ //rating color
    if(vote>=8){
        return 'green'
    }
    else if(vote >=5){
        return 'orange'
    }
    else{
        return'red'
    }
}

form.addEventListener('submit' , (e) =>{
    e.preventDefault();

    const searchTerm=search.value;

    if(searchTerm){
        getMovies(searchURL +'&query'+searchTerm)
    }
})