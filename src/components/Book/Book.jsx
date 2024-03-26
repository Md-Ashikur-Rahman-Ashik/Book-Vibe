import { Link } from "react-router-dom";
import "./Book.css";

const Book = ({ book }) => {
  const { image, tags, bookName, author, category, rating, bookId } = book;

  return (
    <Link to={`/books/${bookId}`}>
      <div className="card card-compact bg-base-100 border p-4 font-work-sans">
        <div className="bg-[#F3F3F3] p-8">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
        </div>
        <ul className="flex gap-3 font-medium mt-7">
          {tags.map((tag, index) => (
            <li className="text-[#23BE0A]" key={index}>
              {tag}
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-0.5 mt-4">
          <h2 className="card-title font-playfair-display font-bold text-2xl">
            {bookName}
          </h2>
          <p className="font-medium mt-3 border-b pb-8">By: {author}</p>
          <div className="card-actions mt-4 flex justify-between">
            <p>{category}</p>
            <div className="flex gap-2 items-center justify-center">
              {rating} <img src="https://svgshare.com/i/14jY.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
