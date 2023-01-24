import React from "react";
import "./Input.css"
type InputProps={value: string;
handleChange: (event:any)=>void;}
export const Input=(Props:InputProps)=>{
    const handleInputChange =()=>{console.log()}
    return <input type='email' id="email" placeholder="YOUR EMAIL" value={Props.value} onChange={handleInputChange}/>
}
export default Input;