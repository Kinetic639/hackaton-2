const fetchInput = () => {
  const books = [];
  const searchInput = document.getElementById("search-input");
  const endpoint = `http://openlibrary.org/search.json?title=${searchInput.value}`;

  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < 6; i++) {
        books.push(data.docs[i]);
      }
        console.log(books);
    });
};

export { fetchInput };
