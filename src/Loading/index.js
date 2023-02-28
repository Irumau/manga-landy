import React from "react";

import './loading.css'



function Loading({brand}) {
    return(
        <div className="loading__container">
            <div className="loading__logo"></div>
            <h3 className="loading__paragraph">{brand} is loading...</h3>
        </div>
    )
}


export {Loading}