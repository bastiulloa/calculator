import React from 'react';


function Number({num, onClick}) {
    
    return(
        <button className="number" onClick={onClick}>{num}</button>
    )
}

export default Number;