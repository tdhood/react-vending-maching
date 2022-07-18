import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <span>
        <span><Link to="/coke">Coke! </Link></span>
        <Link to="/milkyway">  Milky Way! </Link>
        <Link to="/popcorn"> Kettle Corn!</Link>
      </span>
    </nav>
  );
}

export default Nav;
