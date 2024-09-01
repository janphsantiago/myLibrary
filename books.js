const newBookBtn = document.getElementById('newBook');
const addRecord = document.getElementById('addRecord');
let newRecord = document.querySelector('.newRec');
const container = document.getElementById('listOfBooks');
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    this.read = read; 
}

Book.prototype.info = function(){
    return this.title + ' by' + this.author + '' + this.pages + ' ' + this.read;
    }

// Object.setPrototypeOf(Book.prototype, addBookToLibrary.prototype);
// Object.getPrototypeOf(addBookToLibrary.prototype);

function addBookToLibrary(){
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;

    let newRec = new Book(title,author,pages,read);
    myLibrary.push(newRec);

    document.querySelector('form').reset();
    document.querySelector('#formShow').style.display = 'none';

    displayBooks();
}

function displayBooks() {
    container.innerHTML = ''; 

    myLibrary.forEach((book, index) => {
        // Create a card element
        const card = document.createElement('div');
        card.classList.add('book-card');
        
        // Create content for the card
        const title = document.createElement('h2');
        title.textContent = book.title;
        
        const author = document.createElement('p');
        author.textContent = `Author: ${book.author}`;
        
        const pages = document.createElement('p');
        pages.textContent = `Pages: ${book.pages}`;
        
        const read = document.createElement('p');
        read.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;
        
        const delRecord = document.createElement('button');
        delRecord.textContent = 'Remove Book'
        delRecord.dataset.index = index;

        delRecord.addEventListener('click', () => {
           myLibrary.splice(index, 1);
           displayBooks();
        });

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
        card.appendChild(delRecord);
 
        container.appendChild(card);
    });
}

newBookBtn.addEventListener("click", function() {
    let newForm = document.querySelector('#formShow');
    newForm.style.display = 'block';
});

document.querySelector('#formShow').addEventListener('submit', function(){
    event.preventDefault();
    addBookToLibrary();

});



