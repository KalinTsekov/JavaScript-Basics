function books (input) {

    let bookPages = Number (input[0]);
    let pagesPreH = Number (input [1]);
    let days = Number (input[2]);
 let allBooks = (bookPages / pagesPreH) / days;
 
 console.log(allBooks);
 
 }