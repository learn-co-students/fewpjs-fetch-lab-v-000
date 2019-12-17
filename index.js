function fetchBooks() {
  // To pass this lab, this function should include a fetch request to the
  // Game of Thrones API ('https://anapioficeandfire.com/api/books')

  // The tests in this lab need access to the fetch() request inside fetchBooks().
  // In order to give them access, write you solution so that fetchBooks()
  // returns the fetch().
  return fetch('https://anapioficeandfire.com/api/books')
    // The returned response should be converted to JSON.
    .then(resp => resp.json())

    // Then, call the second function, renderBooks()
    .then(renderBooks)
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
