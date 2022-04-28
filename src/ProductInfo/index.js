import React from "react";
import "./ProductInfo.css";

function ProductInfo(){
    return(
        <React.Fragment>
            <div className="infoContainer">
                <div className="mainInfoContainer">
                    <h2 className="elementName">Round cylinder</h2>
                    <h3 className="elementID">13342 DSNU-20-20-P-A</h3>
                    <span className="elementPosition">Item 00001</span>
                </div>
                <div className="secondaryInfo">
                    <p><b>Line:</b> FCA</p>
                    <p><b>Location:</b> Gantry C03</p>
                    <p><b>Replace of:</b> Does not apply</p>
                </div>
                <div className="comments">
                    <b>Comments:</b> <br/>
                    <p className="commentContent">Different hole pattern but what happens whenthis is a really long text, Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolore, neque facere earum dolorum eum, vel consequuntur ex, aut laudantium doloribus? Iure placeat harum unde atque maiores quis debitis quas.</p>    
                </div>
            </div>
        </React.Fragment>
    );
}

export { ProductInfo };