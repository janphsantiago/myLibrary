const newBookBtn = document.getElementById('newBook');
const addRecord = document.getElementById('addRecord');

const myLibrary = [

];

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
}

newBookBtn.addEventListener("click", function() {
    let newForm = document.querySelector('#formShow');
    newForm.style.display = 'block';
});

document.querySelector('#formShow').addEventListener('submit', function(){
    event.preventDefault();
    addBookToLibrary();
});


