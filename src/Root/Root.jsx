import { Outlet, ScrollRestoration } from "react-router-dom";
import Nav2 from "../Components/Nav2/Nav2";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";



const Root = () => {


    return (
        <div>
           <Nav2></Nav2>
            <Outlet></Outlet>
            <ScrollRestoration></ScrollRestoration>
            <Toaster />
            <Footer></Footer>
        </div>
    );
};

export default Root;