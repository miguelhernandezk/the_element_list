import React from "react";
import "./ProductImage.css";
import { IoIosBook } from "react-icons/io";
import { IoMdListBox } from "react-icons/io";
import { IoIosLink } from "react-icons/io";

function ProductImage(){
    return (
        <figure>
            <img src="https://www.festo.com/media/pim/418/D15000100157418_162x121.jpg"/>
            <ul>
                <li><a href="https://www.festo.com/media/pim/525/D15000100161525.PDF" target="_blank"><IoIosBook/> Documentation</a></li>
                <li><a href="https://www.festo.com/es/es/a/download-document/datasheet/1908283" target="_blank"><IoMdListBox/> Datasheet</a></li>
                <li><a href="https://www.festo.com/es/es/a/1908283/" target="_blank"><IoIosLink/> See on Festo Website</a></li>
            </ul>
        </figure>
    );
}

export { ProductImage };