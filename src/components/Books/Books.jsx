import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("./books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="mt-24 mx-32">
      <h2 className="font-playfair-display font-bold text-4xl text-center mb-10">
        Books
      </h2>
      <div className="grid grid-cols-3 gap-6 mb-28">
        {
            books.map(book => <Book key={book.bookId} book={book}></Book>)
        }
      </div>
    </div>
  );
};

export default Books;
