import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./component/Home";
import About from "./component/About";
import Service from "./component/Service";
import Contact from "./component/Contact";
import Gallary from "./component/Gallary";





const App = () => {
    return(
        <>
         <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home/>} />
                    <Route path="home"  element={<Home/>} />
                    <Route path="about" element={<About/>} />
                    <Route path="service" element={<Service/>} />
                    <Route path="gallery" element={<Gallary/>} />
                    <Route path="contact" element={<Contact/>} />

                </Route>
            </Routes>
            </BrowserRouter>
         </div>
        
        </>
    );
}
export default App;