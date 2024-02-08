import { useState, useEffect } from "react";
import axios from "axios";



const Service=()=>{
    const [mydata, setmyData]=useState([])

    const loadData=()=>{
        let url ="http://localhost:3000/Employee";
        axios.get(url).then((res)=>{
            setmyData(res.data)
            alert("Data save successfull")
        })
    }
    useEffect(()=>{
        loadData();
    },[])

    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.empno}</td>
                <td>{key.name}</td>
                <td>{key.department}</td>
                <td>{key.sallary}</td>
            </tr>
            </>

        );
    })
    return(

        <>
        <h1> this is service page</h1>
  {ans}
    <div>

    </div>
        </>
    );
}
export default Service;