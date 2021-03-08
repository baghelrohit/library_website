console.log("this is library")

//constructor
function Book(name, author, booktype) {
    this.name = name;
    this.author = author;
    this.booktype = booktype;
}

//Display constructor
function Display() {

}

//Add method to display Prototype

Display.prototype.add = function (book) {
    console.log("Adding to UI")
    tablebody = document.getElementById('tablebody');
    let uiString = `
                    <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.booktype}</td>
                    </tr>`
    tablebody.innerHTML += uiString;

}

//implementing the clear function
Display.prototype.clear = function (book) {
    let libraryform = document.getElementById('libraryform')
    libraryform.reset();
}

//implementing the validate function
Display.prototype.validate = function (book) {
    if (book.name.length < 3 || book.author.length < 3) {
        return false;
    }
    else {
        return true;
    }
}

Display.prototype.show = function (type, displaymessage) {
    let message = document.getElementById('message')
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
            <strong>Alert!!!</strong> ${displaymessage}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`
    setTimeout(function () {
        message.innerHTML = '';
    }, 2000);
}

//Add Submit event listener to library form
let libraryform = document.getElementById('libraryform');
libraryform.addEventListener('submit', libraryformsubmit);

function libraryformsubmit(e) {
    // console.log("Form submitted")
    let name = document.getElementById('bookname').value;
    let author = document.getElementById('authorname').value;
    let booktype;
    let fiction = document.getElementById('fiction')
    let programming = document.getElementById('programming')
    let history = document.getElementById('history')


    if (fiction.checked) {
        booktype = fiction.value;
    }
    else if (programming.checked) {
        booktype = programming.value;
    }
    else if (history.checked) {
        booktype = history.value;
    }
    e.preventDefault();

    let book = new Book(name, author, booktype);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.show('success', 'Your Book is added succesfully!');
        display.clear();


    }
    else {
        //Show error to user
        display.show('danger', 'Sorry your book cannot be added');

    }


}

