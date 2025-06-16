// Function to add a book
function Add_books() {
    let Name = document.getElementById("input-Name").value;
    let Author = document.getElementById("input-Author").value;
    let Publisher = document.getElementById("input-Publisher").value;
    let Pages = document.getElementById("input-Pages").value;
    let Serial = document.getElementById("input-Serial").value;

    // Validation: Check if all fields are filled
    if (!Name || !Author || !Publisher || !Pages || !Serial) {
        alert("Please enter all the details.");
        return;
    }

    // Get stored books or create an empty array
    let books = JSON.parse(localStorage.getItem("books")) || [];
    books.push({ Name, Author, Publisher, Pages, Serial });

    // Store the updated array in localStorage
    localStorage.setItem("books", JSON.stringify(books));

    // Refresh the book list
    displaybooks();
    clearForm();
}

// Function to display books
function displaybooks() {
    let table_body = document.querySelector("#data_table tbody"); 
    table_body.innerHTML = ""; // Clear previous rows

    let books = JSON.parse(localStorage.getItem("books")) || [];

    books.forEach((book, index) => {
        table_body.innerHTML += `
            <tr>
                <td>${book.Name}</td>
                <td>${book.Author}</td>
                <td>${book.Publisher}</td>
                <td>${book.Pages}</td>
                <td>${book.Serial}</td>
                <td><button class="delete-btn" onclick="remove_books(${index})">X</button></td>
            </tr>
        `;
    });
}



// Function to remove a book
function remove_books(index) {
    let books = JSON.parse(localStorage.getItem("books")) || [];
    books.splice(index, 1); // Remove book at the given index

    localStorage.setItem("books", JSON.stringify(books));

    displaybooks(); // Refresh the book list
}

// Function to clear form fields after adding a book
function clearForm() {
    document.getElementById("input-Name").value = "";
    document.getElementById("input-Author").value = "";
    document.getElementById("input-Publisher").value = "";
    document.getElementById("input-Pages").value = "";
    document.getElementById("input-Serial").value = "";
}
