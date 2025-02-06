import React from "react";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo">
        <img src="/images/logo.png" alt="" width={100} />
      </div>

      <div className="navlist">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Region</li>
          <li>Language</li>
        </ul>
      </div>

      <div className="buttons">
        <button>LOG IN</button>
        <button>SIGN IN</button>
      </div>
    </div>
  );
};

export default Navbar;
