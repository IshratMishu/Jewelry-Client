import { Helmet } from "react-helmet-async";

import Sidebar from "./Sidebar";
import useAuth from "../../../Hooks/useAuth";


const DashboardPage = () => {
    const { user } = useAuth();
    return (
        <div className="mt-20">
            <Helmet>
                <title>My Account - Moice Jewelry</title>
            </Helmet>
            <h1 className="text-2xl font-medium">MY ACCOUNT</h1>
            <div className="flex mt-8 gap-10">
                {/* <div className="w-56">
                    <ul className="space-y-4">
                        <li className="text-white flex items-center gap-2 bg-[--secondary-color] px-4 py-2"><MdOutlineManageAccounts />Dashboard</li>

                        <li>
                            <NavLink to='/dashboard/wishlist' className='text-white flex items-center gap-2 bg-[--secondary-color] px-4 py-2'><IoMdHeartEmpty />Wishlist </NavLink>
                        </li>

                        <li>
                            <NavLink to='/my-account/paymentHistory' className='text-white flex items-center gap-2 bg-[--secondary-color] px-4 py-2'><MdHistory />Payment History</NavLink>
                        </li>

                        <li>
                            <NavLink to='/dashboard/wishlist' className='text-white flex items-center gap-2 bg-[--secondary-color] px-4 py-2'><BiSolidUserDetail />Acoount Details</NavLink>
                        </li>
                    </ul>
                </div> */}
                <Sidebar></Sidebar>

                {/* dashboard content */}
                <div className=" pl-10 ">
                    <h1 className="font-medium pb-2">Hello {user?.displayName} 👋,</h1>
                    <p>From your account dashboard you can view your <span className="text-[--secondary-color]">invoice</span>, see your <span className="text-[--secondary-color]">wishlist</span> , <span className="text-[--secondary-color]">payment <br /> history</span>, and edit your <span className="text-[--secondary-color]">account details</span>.</p>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;