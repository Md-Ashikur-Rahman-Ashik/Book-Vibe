import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const book = useLoaderData();
  const { bookId } = useParams();

  const selectedBook = book.find((u) => u.bookId == bookId);

  const {
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
    image,
  } = selectedBook;

  return (
    <div className="mx-32 mt-14 flex gap-10">
      <div className="bg-[#1313130d] w-1/2 flex justify-center rounded-2xl">
        <img src={image} className="w-2/3 p-4" alt="" />
      </div>
      <div className="w-1/2">
        <h1 className="font-playfair-display font-bold text-4xl">{bookName}</h1>
        <p className="mt-4 font-work-sans font-medium text-xl border-b-2 pb-4">
          By: {author}
        </p>
        <p className="mt-2 font-work-sans font-medium text-xl border-b-2 pb-4">
          {category}
        </p>
        <p className="mt-4 w-11/12">
          <span className="font-work-sans font-bold">Review:</span> {review}
        </p>
        <p className="flex gap-4 mt-8 border-b-2 pb-4">
          <span className="font-work-sans font-bold">Tag</span>
          {tags.map((tag, index) => (
            <li className="text-[#23BE0A] list-none font-work-sans font-medium" key={index}>
              #{tag}
            </li>
          ))}
        </p>
        <div className="flex gap-20 mt-4">
          <p>Number of Pages:</p>
          <p className="font-work-sans font-semibold">{totalPages}</p>
        </div>
        <div className="flex gap-32 mt-3">
          <p>Publisher:</p>
          <p className="font-work-sans font-semibold">{publisher}</p>
        </div>
        <div className="flex gap-20 mt-3">
          <p>Year of Publishing:</p>
          <p className="font-work-sans font-semibold">{yearOfPublishing}</p>
        </div>
        <div className="flex gap-40 mt-3">
          <p>Rating:</p>
          <p className="font-work-sans font-semibold">{rating}</p>
        </div>
        <div className="mt-6 flex gap-8">
            <button className="self-center px-8 py-3 text-[18px] font-semibold font-work-sans rounded-lg text-black border">Read</button>
            <button className="bg-[#50B1C9] self-center px-8 py-3 text-[18px] font-semibold rounded-lg text-white border">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
