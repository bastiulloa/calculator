import React from 'react';
import RenderScreen from './Screen/RenderScreen';
import RenderButtons from './NumberButtons/RenderButtons';
import RenderOpButtons from './OperationButtons/RenderOpButtons';
import { useState } from 'react';


function RenderFrame() {

    const [value, setValue] = useState("");
    
    return(
    
        <div className="calcFrame">

            <RenderScreen value={value}/>

            <RenderButtons setValue={setValue} value={value} />

            <RenderOpButtons setValue={setValue} value={value}/>

        </div>
    )
}

export default RenderFrame;