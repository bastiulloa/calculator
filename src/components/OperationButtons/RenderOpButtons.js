import React from 'react';
import OperationButton from './OperationButton';

function RenderOpButtons({value, setValue}) {


    // let endNum = 0;
    const setOperation = (operation) => {

        

        if(operation === "*"){
            console.log("multiply");
        } else if(operation === "/"){
            console.log("divide");
        } else if(operation === "+"){
            console.log("add");
        } else if(operation === "-"){
            console.log("subtract");
        } else if(operation === "="){
            console.log("equals");
        }

    }

    
    return(
        
        <div className="operation-buttons-area">
            <OperationButton operation="*" onClick={() => setOperation("*")}/>
            <OperationButton operation="/" onClick={() => setOperation("/")}/>
            <OperationButton operation="+" onClick={() => setOperation("+")}/>
            <OperationButton operation="-" onClick={() => setOperation("-")}/>
            <OperationButton operation="=" onClick={() => setOperation("=")}/>
        </div>
    )
}

export default RenderOpButtons;