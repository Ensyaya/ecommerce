import React from "react";
import "./Header.css";
import MenuItem from "./MenuItem";

function Header() {
  return (
    <nav className="nav-wrapper">
      <div className="nav-container">
        <div className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png"
            alt="ford"
            className="mr-3 h-10"
          />
          <span className="span-style">eCommerce</span>
        </div>
        <div className="w-auto block">
          <ul>
            <MenuItem />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
