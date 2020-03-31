function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(resp => resp.json())
    .then(json => renderBooks(json));
    // let book5 = json[4];
    // let totalPages = json[0].numberOfPages + json[1].numberOfPages + json[2].numberOfPages + json[3].numberOfPages + json[4].numberOfPages + json[5].numberOfPages + json[6].numberOfPages + json[7].numberOfPages;
    // let char1031 = json.find(({numberOfPages}) => === '1031');
}

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
