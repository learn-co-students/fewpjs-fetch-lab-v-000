function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
          .then(resp => resp.json())
          .then(json => renderBooks(json));

  // .then(resp => { renderBooks(resp.json()); }); 
  // This way won't work, as whatever json() returns does not have a forEach method.
}

/* This is equivalent/better code: 
  async function fetchBooks() {
    const resp = await fetch('https://anapioficeandfire.com/api/books');
    const json = await resp.json();
    return renderBooks(json);
  }
*/

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

/* For future reference:
*
* To print out the 5th book in the series:
* 
* fetch('https://anapioficeandfire.com/api/books/5')
*   .then(resp => resp.json())
*   .then(json => console.log(json));
* 
* (To get the NAME of that book - "A Feast for Crows" use 'console.log(json["name"])' above. json.name also works.)
*
* To print out the 1031st character in the series:
*
* fetch('https://anapioficeandfire.com/api/characters/1031')
*   .then(resp => resp.json())
*   .then(json => console.log(json));
*
* (To get the NAME of that character - Torren Liddle - use 'console.log(json["name"])' above. json.name works, too.)
*
* To print out the total number of pages (6626) of all of the books:
*
* let totalNumberOfPages = 0;
*
* fetch('https://anapioficeandfire.com/api/books')
*   .then(resp => resp.json())
*   .then(function(json) {
*     json.forEach(book => totalNumberOfPages += book["numberOfPages"]);
*     // book.numberOfPages works, too.
*     console.log(totalNumberOfPages);
*   });
*/