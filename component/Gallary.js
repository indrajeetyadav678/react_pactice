import { useState } from "react";

const Gallary=()=>{
    const [val,setVal]=useState(0);
    console.log(val);
    return(

        <>
        <h1> this is Gallary page</h1>
        <button  onClick={()=>{setVal(val+10)}}>Increment</button><br/><br/>
          Value : {val}
          <br/><br/>
        <button onClick={()=>{setVal(val-10)}}>decrement</button>
        </>
    );
}
export default Gallary;