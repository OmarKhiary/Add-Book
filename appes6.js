// Book Class
class Book {
    constructor(title, author, isbn){
        this.title  = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// Ui Class
class UI {
    addBookToList(book){
        const list = document.getElementById('book-list');
        // Create tr element 
    
        const row = document.createElement('tr');
    
        // insert cols 
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
        `;
        list.appendChild(row);
    }
    showAlert(message,className){
        // Create div 
        const div = document.createElement('div');
        // Add Classes 
        div.className = `alert ${className}`;
        // Add Text 
        div.appendChild(document.createTextNode(message));
        // Get Parent 
        const container = document.querySelector('.container');
        // Get Form 
        const form = document.querySelector('#book-form');
        // Inser alert 
        container.insertBefore(div, form);

        // Timeout after 3 sec 
        setTimeout(function(){
        document.querySelector('.alert').remove();
        }, 3000);
    }
    deleteBook(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        } 
    }

    clearFields(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';   
    }    
}

//Event Listeners 

document.getElementById('book-form').addEventListener('submit',
function(e){

    const title  = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn   = document.getElementById('isbn').value

    // Instantiante Book 
    const book = new Book(title, author, isbn);

    // Instantiate book 

    const ui = new UI();
    // Validate 
    if(title === '' || author === '' || isbn ==='' ){
        ui.showAlert('Please fill in all fields', 'error');

    }else{
        // Add book to list 
        ui.addBookToList(book);
        // Show Success
        ui.showAlert('Book Added!', 'success');
        // Clear Fields 
        ui.clearFields();
    }
    e.preventDefault();
});

// Event Listenner for Delete 

document.getElementById('book-list').addEventListener('click',
    function(e){
        // Instaniate UI 
        const ui = new UI();

        // Delete Book 
        ui.deleteBook(e.target);

        // Show Message 
        ui.showAlert('Book Removed', 'success');
        e.preventDefault();
});