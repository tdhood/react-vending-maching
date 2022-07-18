import React, {useState} from "react";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

function Coke() {
    return (
        <div>
            <p> something about cokes </p>
            <Link to={"/"}>Go back to vending maching</Link>
        </div>
    );
}

export default Coke;