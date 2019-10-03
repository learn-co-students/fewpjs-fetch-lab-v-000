
document.addEventListener('DOMContentLoaded', function() {
   // fetchBooks()
   fetchPages()
  // fetch5th()
  // fetch1031Character()
})

// function fetchBooks() {
// 	return fetch('https://anapioficeandfire.com/api/books')
// 	.then(response => response.json())
// 	.then(json => renderBooks(json))
	
// }
function fetchPages() {
	return fetch('https://anapioficeandfire.com/api/books')
	.then(response => response.json())
	.then(json => totalPages(json))
	
}

function totalPages(json){
	// iterate through all the books and capture the number of Pages and add that 
	// into a counter
	let pageCounter = [];
	json.forEach(book => {
		const pages = book.numberOfPages
		const pageNum = parseInt(pages)
		pageCounter.push(pageNum)
	
	})
	const totalPages = pageCounter.reduce( (a, b) => a + b, 0 )
	console.log(totalPages)
}


// function renderBooks(json) {
//   const main = document.querySelector('main')
//   json.forEach(book => {
//     const h2 = document.createElement('h2')
//     h2.innerHTML = `<h2>${book.name}</h2>`
//     main.appendChild(h2)
//   })
// }

// function fetch5th() {
// 	fetch('https://anapioficeandfire.com/api/books/5')
// 	.then(res => res.json())
// 	.then(json => console.log(json))

// }

// function fetch1031Character() {
// 	fetch("https://anapioficeandfire.com/api/characters/1031")
// 	.then(res => res.json())
// 	.then(json => console.log(json))
// }


