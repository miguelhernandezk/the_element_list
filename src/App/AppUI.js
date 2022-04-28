import React from "react";
import { HeaderUI } from "../HeaderUI";
import { ItemProduct } from "../ItemProduct";

function AppUI(){
    return(
        <React.Fragment>
            <HeaderUI/>
            <ItemProduct/>
        </React.Fragment>
    );
}

export { AppUI };