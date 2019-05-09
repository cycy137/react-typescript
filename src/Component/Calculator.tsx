import React from 'react';

const pControl=()=>{
  return{
    fontSize: '150%',
    display: 'inline-block' as'inline-block'
  }
}
const pControlResult=()=>{
  return Object.assign(pControl(),{marginLeft: '30px',fontSize:'35px',color: 'rgb(240, 66, 95)'})
}
const inputControl=()=>{
  return{
    marginLeft: '30px',
    backgroundColor: '#4CAF50',
    fontSize: '40px'
  }
}
const Calculator=(props:any)=>(

      <div className="Calculator">
            
        <p style={pControl()}>increment:</p><input style={inputControl()} type="button" value="+" onClick={props.increment}/>
        <br/>
        <p style={pControl()}>decrement:</p><input style={inputControl()} type="button" value="-"onClick={props.decrement}/>
        <br/>
        <p style={pControl()}>current number:</p><p style={pControlResult()}>{props.totalNumber}</p>
      </div>
);

export default Calculator;