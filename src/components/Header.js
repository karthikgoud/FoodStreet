import { logo } from "../config";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <img src={logo} />
      <ul className="nav-container">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>

        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
