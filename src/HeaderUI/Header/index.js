import React from "react";
import { IoIosMenu } from "react-icons/io";
import "./Header.css";

function Header(){
    return(
        <nav>
            <ul>
                <li><IoIosMenu/></li>
                <li>About me</li>
            </ul>
        </nav>
    );
}

export { Header };