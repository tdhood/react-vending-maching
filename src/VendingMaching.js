import React from "react";
import { Link } from "react-router-dom";

function VendingMaching() {
  return (
    <div>
      <div>
        <h2>You are at the Vending Machine!</h2>
      </div>
      <ul>
        <li>
          <Link to="/milkyway">Milky Way!</Link>
        </li>
        <li>
          <Link to="/coke">Coca-Cola!</Link>
        </li>
        <li>
          <Link to="/popcorn">Kettle Corn!</Link>
        </li>
      </ul>
    </div>
  );
}

export default VendingMaching;
