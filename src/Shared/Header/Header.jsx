import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex gap-5 mb-10">
      <Link to="/" className="underline">
        Home
      </Link>
      <Link to="/addCoffee" className="underline">
        Add Coffee
      </Link>
    </div>
  );
};

export default Header;
