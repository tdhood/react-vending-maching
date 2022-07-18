import React from "react";
import { Link } from "react-router-dom";

function VendingMaching() {
    return (
        <ul>
            <li><Link to="/">Vending Maching</Link></li>
            <li><Link to="/milkyway">Milky Way!</Link></li>
            <li><Link to="/coke">Coca-Cola!</Link></li>
            <li><Link to="/popcorn">Kettle Corn!</Link></li>
        </ul>
    );
}

export default VendingMaching;
