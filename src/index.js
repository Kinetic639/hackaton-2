import "./styles/main.scss";
import {addInputListener} from './app/search-controller'

addInputListener()
// fetchData()



// const endpoint = "https://api.punkapi.com/v2/beers";
// const beers = [];
// const searchInput = document.querySelector(".search");
// const suggestions = document.querySelector(".suggestions");

// const submitSearch = e => {
//   //   e.preventDefault();
//   fetch(endpoint)
//     .then(response => response.json())
//     .then(data => beers.push(...data));

//   console.log(beers);
// };

// function FindMatches(wordToMatch, beers) {
//   return beers.filter(beer => {
//     const regex = new RegExp(wordToMatch, "gi");
//     return beer.name.match(regex);
//   });
// }

// function displayMatches() {
//   submitSearch();
//   const matchArray = FindMatches(this.value, beers);
//   console.log(matchArray);
//   const html = matchArray
//     .map(beer => {
//       return `
// 		<li>
// 		<span> ${beer.name}</span>
// 		</li>
// 		`;
//     })
//     .join();
//   suggestions.innerHTML = html;
//   //   console.log(this.value);
// }

// searchInput.addEventListener("change", displayMatches);
// searchInput.addEventListener("keyup", displayMatches);

// const addSubmitListener = () => {
//   const buttonSubmit = document.getElementById("btn-submit");
//   buttonSubmit.addEventListener("click", submitSearch);
// };

// addSubmitListener();
