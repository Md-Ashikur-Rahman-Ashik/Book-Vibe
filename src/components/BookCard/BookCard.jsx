import { Link, useLoaderData, useParams } from "react-router-dom";

const BookCard = ({ book }) => {
  const {
    image,
    bookId,
    tags,
    bookName,
    author,
    category,
    rating,
    yearOfPublishing,
    publisher,
    totalPages,
  } = book;

  return (
    <div className="card-compact flex gap-3 lg:gap-6 bg-base-100 border p-2 lg:p-4 font-work-sans rounded-2xl">
      <div className="bg-[#F3F3F3] p-2 lg:p-8 rounded-2xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
      </div>
      <div className="w-full">
        <div className="flex flex-col gap-0.5 mt-4">
          <h2 className="card-title font-playfair-display font-bold text-2xl">
            {bookName}
          </h2>
          <p className="font-medium font-work-sans mt-3">By: {author}</p>
          <ul className="flex flex-col lg:flex-row gap-3 font-medium mt-2">
            <div className="flex gap-3 font-medium mt-2">
              <span>Tag: </span>
              {tags.map((tag, index) => (
                <li className="text-[#23BE0A]" key={index}>
                  #{tag}
                </li>
              ))}
            </div>
            <div className="flex gap-3 font-medium mt-2 mb-2 lg:mb-0">
              <span className="flex gap-1">
                <img src="https://svgshare.com/i/14mP.svg" alt="" /> Year of
                Publishing: {yearOfPublishing}
              </span>
            </div>
          </ul>
          <div className="flex flex-col lg:flex-row mt-2 pb-8 border-b">
            <div className="flex gap-1 w-1/2 lg:w-2/5 mb-2 lg:mb-0">
              <img src="https://svgshare.com/i/14kA.svg" alt="" /> Publisher:
              {publisher}
            </div>
            <div className="flex gap-2 w-1/2">
              <img src="https://svgshare.com/i/14mw.svg" alt="" /> Pages:
              {totalPages}
            </div>
          </div>
          <div className="card-actions mt-4 flex gap-4">
            <p className="self-center px-8 py-2 rounded-3xl bg-[#328eff26] text-[#328EFF]">
              Category: {category}
            </p>
            <div className="self-center px-8 py-2 rounded-3xl bg-[#ffac3326] text-[#FFAC33]">
              Rating: {rating}
            </div>
            <div className="self-center px-8 py-2 rounded-3xl bg-[#23BE0A] text-white">
              <Link to={`/books/${bookId}`}>View Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
