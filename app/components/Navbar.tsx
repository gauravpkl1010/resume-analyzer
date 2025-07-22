import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to={"/"}>
        <p className="text-xl font-bold text-gradient">VITAESCAN</p>
      </Link>
      <Link to={"/upload"} className="primary-button w-fit">
        Upload Resume
      </Link>
    </nav>
  );
};

export default Navbar;
