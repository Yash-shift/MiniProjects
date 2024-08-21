import React from "react";
import { useState } from "react";


function card({id,name,image,price},removeTour){

    const[readmore,setReadmore]= useState(false);

    function readmoreHandler(){
        setReadmore(!readmore);
    }



    const description = `$info.substring(0,200)}....`
    return (
        <div className="card">

            <img src={image} className="image"></img>


            <div className="tour-details">
                <h4 className="tourprice">{price}</h4>
                <h4 className="tourprice">{name}</h4>
            </div>


            <div className="description">
                {description}
                <span className="readmore" onClick={readmoreHandler}>
                    {readmore? "show less" : "read more"}mmm
                </span>
            </div>

            <button className="btn-red" onClick={() =>removeTour(id)}>
                Not Interested 
            </button>

        </div>
        
    );

}

export default card;