document.addEventListener('DOMContentLoaded', function() {
    fetchBooks()
});

function fetchBooks() {
    return fetch('https://anapioficeandfire.com/api/books')
    .then(resp => resp.json())
    .then(json => renderBooks(json))
};

function renderBooks(json) {
    const main = document.querySelector('main')
    json.forEach(book => {
        const h2 = document.createElement('h2')
        h2.innerHTML = `<h2>${book.name} - ${book.authors}</h2>`
        main.appendChild(h2)
  })
};

// function selectCharacter(json) {
//     const characters = json.characters.map
//     return characters
// }; //Not working in current form

