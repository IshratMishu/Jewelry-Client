import { Outlet, ScrollRestoration } from "react-router-dom";
import Nav2 from "../Components/Nav2/Nav2";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { useMediaQuery } from "react-responsive";
import MobileViewNavbar from "../Components/MobileViewNavbar/MobileViewNavbar";


const Root = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    return (
        <div>
            {isMobile ? <MobileViewNavbar /> : <Nav2 />}
            <Toaster />
            <Outlet></Outlet>
            <ScrollRestoration></ScrollRestoration>
            <Footer></Footer>
        </div>
    );
};

export default Root;