import react from "react";
import { ProductImage } from "../ProductImage";
import { ProductInfo } from "../ProductInfo";
import "./ItemProduct.css";

function ItemProduct(){
    return(
        <div className="mainContainer">
            <ProductImage/>
            <ProductInfo/>
        </div>
    );
}

export { ItemProduct };