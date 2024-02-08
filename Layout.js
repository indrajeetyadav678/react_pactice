import {Link, Outlet} from "react-router-dom";




const Layout=()=>{
    return(
        <>
        <Link to="home" style={{marginLeft:"50px"}}>Home</Link>
        <Link to="about" style={{marginLeft:"50px"}} >About company</Link>
        <Link to="service" style={{marginLeft:"50px"}}>Our Service</Link>
        <Link to="gallery" style={{marginLeft:"50px"}}>Gallary</Link>
        <Link to="contact" style={{marginLeft:"50px"}}>Contact us</Link>
        <hr size="1" color="black"/>
        <Outlet />
        <hr size="1" color="black"/>
          company footer

        </>
    );
}
export default Layout;