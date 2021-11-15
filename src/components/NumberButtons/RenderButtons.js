import React from 'react';
import ClearButton from './ClearButton';
import Number from './Number';



function RenderButtons({value, setValue}) {
   
    const updateValue = (val) => {
      // console.log(value);
      // let currVal = value == undefined ? "" : value;
      // console.log(value);
      setValue(value + val);
    }
    return(
        <div className="number-buttons-area">
          <Number num="1" onClick={() => updateValue("1")} />
          <Number num="2" onClick={() => updateValue("2")}/>
          <Number num="3" onClick={() => updateValue("3")}/>
          <Number num="4" onClick={() => updateValue("4")}/>
          <Number num="5" onClick={() => updateValue("5")}/>
          <Number num="6" onClick={() => updateValue("6")}/>
          <Number num="7" onClick={() => updateValue("7")}/>
          <Number num="8" onClick={() => updateValue("8")}/>
          <Number num="9" onClick={() => updateValue("9")}/>
          <Number num="0" onClick={() => updateValue("0")}/>
          <ClearButton num="" butt="CE" onClick={() => setValue("")}/>
        </div>
    )
}

export default RenderButtons;