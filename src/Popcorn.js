import React, {useState} from "react";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

function Popcorn() {
    return (
        <div>
            <p> something about popcorns </p>
            <Link to={"/"}>Go back to vending maching</Link>
        </div>
    );
}

export default Popcorn;