const myLibrary = [];

function Book(title, author, pages, read) { 
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = Math.random();
}

Book.prototype.changeReadStatus = function() {
    this.read = !this.read;
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.pop();
    let book = new Book(title, author, pages, read)
    myLibrary.push(book);
}

function displayBooks(){
    for(let i = 0; i < myLibrary.length; i++) {

        const container = document.createElement("div");
        container.classList.add("bookContainer");
        container.setAttribute("data-uuid", myLibrary[i].id);
        
        console.log(container.dataset.uuid);

        const title = document.createElement("p");
        const author = document.createElement("p");
        const pages = document.createElement("p");
        const hasBeenRead = document.createElement("p");

        let changeReadStatus = document.createElement("button");
        changeReadStatus.classList.add("statusBtn");

        let remove = document.createElement("button");
        remove.classList.add("statusBtn");

        title.textContent = `Title: ${myLibrary[i].title}`;
        author.textContent = `Author: ${myLibrary[i].author}`;
        pages.textContent = `${myLibrary[i].pages} pages`;
        changeReadStatus.textContent = "Change read status";
        remove.textContent = "Remove";

        if(myLibrary[i].read){
            hasBeenRead.textContent = "You have read this book.";
        } else {
            hasBeenRead.textContent = "You have not read this book.";
        }

        container.appendChild(title);   
        container.appendChild(author);
        container.appendChild(pages);
        container.appendChild(hasBeenRead);
        container.appendChild(changeReadStatus);
        container.appendChild(remove);
        document.querySelector(".display").appendChild(container);
    }
}

const addBookBtn = document.querySelector(".addBook");

addBookBtn.addEventListener("click", () => {
    document.querySelector(".popup").classList.toggle("show");
})

document.querySelector(".myForm").addEventListener("submit", (event) => {
    const formTitle = document.getElementById("title").value;
    const formAuthor = document.getElementById("author").value;
    const formPages = document.getElementById("pages").value;
    const formRead = document.getElementById("read").value;
    let hasRead = false;
    if(formRead === "Yes") {
        hasRead = true;
    } else {
        hasRead = false;
    }
    addBookToLibrary(formTitle, formAuthor, formPages, hasRead);
    displayBooks();
    event.preventDefault();
})






