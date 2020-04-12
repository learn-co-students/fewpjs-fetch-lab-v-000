function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books") // this sends a fetch request to the game of thrones API for info
  .then(resp => resp.json()) // then it takes the returned info and converts it into JSON format data
  .then(json => renderBooks(json)); // then it takes the JSON data and calls the renderBooks function with the JSON data as an arguement.
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

