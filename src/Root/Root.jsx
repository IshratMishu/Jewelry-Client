import { Outlet, ScrollRestoration } from "react-router-dom";
import Nav2 from "../Components/Nav2/Nav2";
import Footer from "../Components/Footer/Footer";



const Root = () => {
    return (
        <div>
           <Nav2></Nav2>
            <Outlet></Outlet>
            <ScrollRestoration></ScrollRestoration>
            <Footer></Footer>
        </div>
    );
};

export default Root;