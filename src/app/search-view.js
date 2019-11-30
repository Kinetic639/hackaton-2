import { fetchInput } from "./search-model";

const searchInput = document.getElementById("search-input");

const debounce = (func, delay) => {
  let inDebounce;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
};

const addInputListener = () => {
  searchInput.addEventListener("keyup", debounce(fetchInput, 1000));
};


// const displaySuggestions = (suggestions) => {
//     const list = document.getElementById('list')
//     suggestions.forEach(element => {
//         const liElement = document.createElement('li')
//         liElement.innerText = element.
//     });
// }

export { addInputListener };
