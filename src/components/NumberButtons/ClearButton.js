import React from "react";

function ClearButton({num, onClick, butt}) {
    return(
        <button className="number" onClick={onClick}>{butt}</button>
    )
}

export default ClearButton; 