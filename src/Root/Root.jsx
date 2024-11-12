import { Outlet, ScrollRestoration } from "react-router-dom";
import Nav2 from "../Components/Nav2/Nav2";



const Root = () => {
    return (
        <div>
           <Nav2></Nav2>
            <Outlet></Outlet>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Root;