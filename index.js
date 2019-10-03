
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})

function fetchBooks() {
	debugger
	return fetch('https://anapioficeandfire.com/api/books')
	.then(response => response.json())
	.then(json => renderBooks(json))
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

