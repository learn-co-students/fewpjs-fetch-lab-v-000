function fetchBooks(json) {
    return fetch('https://anapioficeandfire.com/api/books')
       .then(resp => resp.json())
       .then(json => renderBooks(json));
}

/*
fetch("string representing a URL to a data source")
  .then(function(response) {
    return response.json();
  })
  .then(function(json){
    // Use this data inside of `json` to do DOM manipulation
  })  */

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
