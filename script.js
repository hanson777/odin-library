const myLibrary = [];

function Book(title, author, pages, read, index) { 
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = index;
}

Book.prototype.changeReadStatus = function() {
    this.read = !this.read;
}

function addBookToLibrary(title, author, pages, read, index) {
    let book = new Book(title, author, pages, read, index)
    myLibrary.push(book);
}

function displayBooks(){
    document.querySelector(".display").innerHTML = "";
    for(let i = 0; i < myLibrary.length; i++) {

        const container = document.createElement("div");
        container.classList.add("bookContainer");
        
        const title = document.createElement("p");
        const author = document.createElement("p");
        const pages = document.createElement("p");
        const hasBeenRead = document.createElement("p");

        let statusButton = document.createElement("button");
        statusButton.classList.add("statusButton");
        statusButton.setAttribute("data-index", i);

        let removeButton = document.createElement("button");
        removeButton.classList.add("removeButton");
        removeButton.setAttribute("data-index", i);

        title.textContent = `Title: ${myLibrary[i].title}`;
        author.textContent = `Author: ${myLibrary[i].author}`;
        pages.textContent = `${myLibrary[i].pages} pages`;
        statusButton.textContent = "Change read status";
        removeButton.textContent = "Remove";
    

        if(myLibrary[i].read){
            hasBeenRead.textContent = "READ ✅";
        } else {
            hasBeenRead.textContent = "NOT READ ❌";
        }
            

        container.appendChild(title);   
        container.appendChild(author);
        container.appendChild(pages);
        container.appendChild(hasBeenRead);
        container.appendChild(statusButton);
        container.appendChild(removeButton);
        document.querySelector(".display").appendChild(container);
        
    }
}


document.querySelector(".myForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const formTitle = document.getElementById("title")
    const formAuthor = document.getElementById("author")
    const formPages = document.getElementById("pages")
    const formRead = document.getElementById("read")
    let arr = [formTitle.value, formAuthor.value, formPages.value, formRead.value];
    for(const string of arr){
        if(string == ""){
            alert("Please fill out each field!");
            event.preventDefault();
            return;
        }
    }
    let hasRead = false;
    if(formRead === "Yes") hasRead = true;
    addBookToLibrary(formTitle.value, formAuthor.value, formPages.value, hasRead.value, myLibrary.length);
    displayBooks();
    formTitle.value = "";
    formAuthor.value = "";
    formPages.value = "";
    formRead.value = "";
})

document.addEventListener("click", (event) => {
    if(event.target.classList.contains("statusButton")){
        myLibrary[event.target.dataset.index].changeReadStatus();
        displayBooks();
    } else if(event.target.classList.contains("removeButton")){
        console.log(`removing index ${event.target.dataset.index}`);
        console.log(myLibrary[event.target.dataset.index]);
        myLibrary.splice(event.target.dataset.index, 1);
        displayBooks();
    }
})






