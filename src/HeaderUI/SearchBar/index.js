import React from "react";
import "./SearchBar.css"
import { IoIosSearch } from "react-icons/io";

function SearchBar(){
    return(
        <div className="searchBarContainer">
            <div className="barContainer">
                <button type="button" className="iconContainer">
                    <IoIosSearch/>
                </button>
                <input type="text" placeholder="Search for items"></input>
            </div>
        </div>
    );
}

export { SearchBar };