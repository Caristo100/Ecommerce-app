import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./database";

function Header() {
  const [{ cart, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Ecommerce.com"
        />
      </Link>
      <div className="header_Search">
        <input className="header_searchInp" type="text" />
        <SearchIcon className="S_Icon" />
      </div>
      <div className="header_nav">
        <Link to={!user && "/Login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionL1">hello{user?.email}</span>
            <span className="header_optionL2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionL1">Return</span>
          <span className="header_optionL2">/Orders</span>
        </div>
        <Link to="/checkout">
          <div className="header_SKart">
            <ShoppingCartIcon />
            <span className="header_optionL2 header_itemCount">
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
