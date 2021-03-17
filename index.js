document.addEventListener('DOMContentLoaded', function() {
    fetchBooks()
})

function fetchBooks() {
    return fetch('https://anapioficeandfire.com/api/books')
        .then(resp => resp.json())
        .then(json => renderBooks(json));
}

function renderBooks(json) {
    const main = document.querySelector('main')
    json.forEach(book => {
        const h2 = document.createElement('h2');
        h2.innerText = book.name;
        main.appendChild(h2);
    })
}