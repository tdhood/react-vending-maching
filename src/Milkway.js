import React, {useState} from "react";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

function Milkyway() {
    return (
        <div>
            <p> something about milky ways </p>
            <Link to={"/"}>Go back to vending maching</Link>
        </div>
    );
}

export default Milkyway;