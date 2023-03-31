import React from "react"
import { useState } from "react";

export const example= ()=>{
    const [count,setCount]=useState(2);
    
    return(
<div>
    <button onClick={()=>
       count.setState({ count:
        state.count=+7})}> 
        </button>
</div>
    )
};
