import { useState } from "react";



const About=()=>{

    const [cube, setCube]= useState(0)
    // const cubehandle =()=>{
    //     const Cubes=cube*cube*cube
    // }
    return(

        <>
        <h1> this is About page</h1>
          <input type="text" value={cube} onChange={(e)=>{setCube(e.target.value)}} />
          <button onClick={()=>{setCube(cube*cube*cube)}}>cube</button>
          <div >
           cubes: {cube}
          </div>

        </>
    );
}
export default About;