import { useEffect, useState } from "react";
import { getBooks } from "../../utils";
import Book from "../Book/Book";
import BookCard from "../BookCard/BookCard";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
  const [books, setBooks] = useState([]);

  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    const storedBooks = getBooks();
    setBooks(storedBooks);
  }, []);

  return (
    <div className="mx-36">
      <h1 className="font-work-sans font-bold text-2xl text-center mt-9 mb-8 bg-[#1313130d] py-8 rounded-2xl">
        Books
      </h1>
      <div className="flex justify-center mb-9">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 self-center px-8 py-3 text-[18px] font-semibold rounded bg-[#23BE0A] text-white w-max-content flex items-center"
          >
            Sort By
            <img
              className="w-6 flex items-center"
              src="https://svgshare.com/i/14nF.svg"
              alt=""
            />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Number Of Pages</a>
            </li>
            <li>
              <a>Published Year</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex -mx-4 overflow-x-auto overflow-y-hidden flex-nowrap dark:text-gray-800">
        <Link
          to=""
          onClick={() => setTabIndex(0)}
          className={`flex items-center px-5 py-3 space-x-2 ${
            tabIndex === 0 ? "border border-b-0" : "border-b"
          } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Read Books</span>
        </Link>
        <Link
          to={`wishlist-card`}
          onClick={() => setTabIndex(1)}
          className={`flex items-center px-5 py-3 space-x-2 ${
            tabIndex === 1 ? "border border-b-0" : "border-b"
          } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Wishlist Books</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 mb-28">
        {books.map((book) => (
          <BookCard key={book.bookId} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default ListedBooks;
