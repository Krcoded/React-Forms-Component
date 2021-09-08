import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <Link to="/"> Home </Link>
        <br />
        <Link to="/about"> About </Link>
        <br />
        <Link to="/contact">Contact Us</Link>
      </ul>
    </nav>
  );
};

export default NavBar;
