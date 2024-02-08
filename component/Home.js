import { useState } from "react";
import axios from "axios";


const Home = () => {
    const [input, setInput] = useState([])
    const inputhandle = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput((values) => ({ ...values, [name]: value }))
    }
    console.log(input)

    const Handlesubmit = () => {
        let url = "http://localhost:3000/Employee";
        axios.post(url, input).then((res) => {
            alert("Data save successfull")
        });

    }
    return (

        <>
            <h1> this is Home page</h1>

            <div style={{ width: "600px", height: "500px", border: "1px solid black", backgroundColor: "blueviolet", borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ width: "450px", height: "400px", border: "1px solid black", backgroundColor: "yellow", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ width: "300px", height: "250px", border: "1px solid black", backgroundColor: "brown", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <h1 style={{ color: "red" }}>Cybrom</h1>
                    </div>
                </div>
            </div>
            <br /><br />
            <div>
                empno :<input type="text" value={input.empno} name="empno" onChange={inputhandle} /><br /><br />
                name: <input type="text" value={input.name} name="name" onChange={inputhandle} /><br /><br />
                department:<input type="text" value={input.department} name="department" onChange={inputhandle} /><br /><br />
                sallary:<input type="text" value={input.sallary} name="sallary" onChange={inputhandle} /><br /><br />
                <button onClick={Handlesubmit}>submit</button>

            </div>
        </>
    );
}
export default Home;