function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books') 
  return fetch('https://anapioficeandfire.com/api/books') 
  //Using fetch(), we can include requests for data wherever we need to in our code. We can fetch() data on the click of a button or the expansion of an accordion display. There are many older methods for fetching data, but fetch() is the future.
  .then(resp => resp.json())
  .then(json => renderBooks(json)); 
  //JavaScript Object Notation is an open standard file format, and data interchange format, that uses human-readable text to store and transmit data objects 
  //json basically takes data files and makes them objects
  //so, instead of just logging the JSON from the response, we want to call our renderBooks function, and pass the json to it within fetchBooks - Kevin Webster
  //json is found and given within the same scope of fetchbooks()
  //because its defined by .then
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
