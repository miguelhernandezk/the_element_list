import React from "react";
import { Header } from "./Header";
import { SearchBar } from "./SearchBar";

function HeaderUI(){
    return(
        <React.Fragment>
            <Header/>
            <SearchBar/>
        </React.Fragment>
    );
}

export { HeaderUI };