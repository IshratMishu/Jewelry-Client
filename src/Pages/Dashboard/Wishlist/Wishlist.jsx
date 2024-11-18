import { Helmet } from "react-helmet-async";
import Sidebar from "../DashboardPage/Sidebar";


const Wishlist = () => {
    
    return (
        <div className="mt-20">
            <Helmet>
                <title>My Account - Moice Jewelry</title>
            </Helmet>
            <h1 className="text-2xl font-medium">MY ACCOUNT</h1>
            <div className="flex mt-8 gap-10">
                <Sidebar></Sidebar>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Wishlist;