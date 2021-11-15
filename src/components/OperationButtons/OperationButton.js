import React from 'react';

function OperationButton({operation, onClick}) {
    return(
        <button className="operation" onClick={onClick}>{operation}</button>
    )
}

export default OperationButton;