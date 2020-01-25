function fetchBooks() {
  //original api does not work for those up in Canada
  return fetch('http://api.open-notify.org/astros.json')
  .then(function(response){
    return response.json();
  }).then(function(json){
    renderBooks(json);
  });
}

function renderBooks(json) {
  const main = document.querySelector('main')
  console.log(json);
  json.people.forEach(person => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${person.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
