import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center flex flex-col text-5xl min-h-screen justify-center">
      <h1 className="mb-2">Oops!!</h1>
      <h1>Your destination is not accessible</h1>
      <Link to="/">Explore Home</Link>
    </div>
  );
};

export default ErrorPage;
