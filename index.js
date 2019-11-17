function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json))
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
    
    const ul = document.createElement("ul");
    const numberOfPages = document.createElement("li");
    const released = document.createElement("li");
    numberOfPages.innerText = `pages: ${book.numberOfPages}`;
    released.innerText = `released: ${book.released}`;
    ul.appendChild(numberOfPages);
    ul.appendChild(released);
    h2.appendChild(ul)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
