import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth";
import Sidebar from "../DashboardPage/Sidebar";


const WelcomeMessage = () => {
    const {user} = useAuth();
    return (
        <div className="mt-20">
        <Helmet>
            <title>My Account - Moice Jewelry</title>
        </Helmet>
        <h1 className="text-2xl font-medium">MY ACCOUNT</h1>
        <div className="flex mt-8 gap-10">
            <Sidebar></Sidebar>
        <div className=" pl-10 ">
             <Helmet>
                <title>My Account - Moice Jewelry</title>
            </Helmet>
        <h1 className="font-medium pb-2">Hello {user?.displayName} 👋,</h1>
        <p>From your account dashboard you can view your <span className="text-[--secondary-color]">invoice</span>, see your <span className="text-[--secondary-color]">wishlist</span> , <span className="text-[--secondary-color]">payment <br /> history</span>, and edit your <span className="text-[--secondary-color]">account details</span>.</p>
    </div>
    </div>
    </div>
    );
};

export default WelcomeMessage;