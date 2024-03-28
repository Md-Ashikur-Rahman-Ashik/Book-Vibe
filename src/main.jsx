import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ListedBooks from "./components/ListedBooks/ListedBooks.jsx";
import PagesToRead from "./components/PagesToRead/PagesToRead.jsx";
import Home from "./components/Home/Home.jsx";
import BookDetails from "./components/BookDetails/BookDetails.jsx";
import "./components/Banner/Banner.css";
import "./components/Book/Book.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BookCard from "./components/BookCard/BookCard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listed-Books",
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index: true,
            element: <BookCard></BookCard>,
            loader: () => fetch("books.json"),
          },
        ],
      },
      {
        path: "/books/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("./books.json"),
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead></PagesToRead>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
    <ToastContainer />
  </React.StrictMode>
);
