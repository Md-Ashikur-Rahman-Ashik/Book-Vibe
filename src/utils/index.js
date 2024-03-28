import { toast } from "react-toastify";

export const getBooks = () => {
    let books = [];
    const storedBooks = localStorage.getItem("books")

    if(storedBooks){
        books = JSON.parse(storedBooks);
    }

    return books;
}

export const saveBook = selectedBook => {

    let books = getBooks();
    const isExist = books.find(b => b.bookId === selectedBook.bookId)

    if(isExist){
        return toast.error("Already Added!!")
    }
    books.push(selectedBook);
    localStorage.setItem("books", JSON.stringify(books));
    toast.success("Book added to Reading List")
}

export const deleteBook = id => {
    let books = getBooks();
    const remaining = books.filter(b => b.bookId !== id);
    localStorage.setItem("books", JSON.stringify(remaining))
}

export const wishBook = selectedBook => {

    let books = getBooks();
    const isExist = books.find(b => b.bookId === selectedBook.bookId)

    if(isExist){
        return toast.error("Already Added!!")
    }
    books.push(selectedBook);
    localStorage.setItem("books", JSON.stringify(books));
    toast.success("Book added to Wishlist")
}