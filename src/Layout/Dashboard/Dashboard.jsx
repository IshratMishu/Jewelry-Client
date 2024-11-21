
import { FaHome } from "react-icons/fa";
import { FaUsersRectangle } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";
import { RiAdvertisementLine } from "react-icons/ri";
import { SiContactlesspayment, SiGooglecampaignmanager360 } from "react-icons/si";
import { TbReport } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { TfiMenuAlt } from "react-icons/tfi";



const Dashboard = () => {
    const [openNav, setOpenNav] = useState(false);
    const linkStyle = ({ isActive }) => {
        return {
            color: isActive ? "#B18B22" : "",
            borderBottom: isActive ? "2px solid #B18B22" : "",
            backgroundColor: isActive ? "#FAFAF4" : " ",
        };
    };
    const [isAdmin] = useAdmin();

    return (
        <div className="flex">

            <div onClick={() => setOpenNav(!openNav)} className="text-3xl z-50 md:hidden block justify-end mt-3">
                {
                    openNav ? <IoMdClose className="text-white" /> : <TfiMenuAlt />
                }
            </div>

            <div className="md:block w-[25%] min-h-screen bg-[--secondary-color] border border-[--secondary-color] hidden">
                <ul className="font-semibold space-y-2 py-6">
                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink to='/dashboard/adminHome' className="text-white flex items-center gap-2 px-4 py-2" style={linkStyle}><FaHome />Admin Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/manageUsers' className="text-white flex items-center gap-2  px-4 py-2" style={linkStyle}><FaUsersRectangle />Manage Users</NavLink>
                                </li>

                                <li><NavLink to='/dashboard/manageProducts' className='text-white flex items-center gap-2 px-4 py-2' style={linkStyle}><MdCategory />Manage Products</NavLink></li>

                                <li>
                                    <NavLink to='/dashboard/managePayment' className="text-white flex items-center gap-2 px-4 py-2" style={linkStyle}>
                                        <RiAdvertisementLine />
                                        Payment management
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/salesReport' className="text-white flex items-center gap-2 px-4 py-2" style={linkStyle}>
                                        <TbReport />
                                        Sales Report
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/bannerAd' className="text-white flex items-center gap-2 px-4 py-2" style={linkStyle}>
                                        <RiAdvertisementLine />
                                        Manage banner Advertise
                                    </NavLink>
                                </li>
                            </>
                            :
                            <>
                                <li>
                                    <NavLink style={linkStyle} to='/dashboard/sellerHome' className="text-white flex items-center gap-2 px-4 py-2"><FaHome />Seller Home</NavLink>
                                </li>
                                <li>
                                    <NavLink style={linkStyle} to='/dashboard/manageJewelries' className="text-white flex items-center gap-2 px-4 py-2"><SiGooglecampaignmanager360 />Manage Products</NavLink>
                                </li>

                                <li><NavLink style={linkStyle} to='/dashboard/sellerPaymentHistory' className='text-white flex items-center gap-2 px-4 py-2'><SiContactlesspayment />Payment History</NavLink></li>

                                <li>
                                    <NavLink style={linkStyle} to='/dashboard/ads' className="text-white flex items-center gap-2 px-4 py-2">
                                        <RiAdvertisementLine />Ask For Advertisement
                                    </NavLink>
                                </li>
                            </>
                    }
                    <hr />
                    <li>
                        <NavLink style={linkStyle} className="text-white flex items-center gap-2 px-4 py-2" to={"/"}>
                            <FaHome> </FaHome>
                            Home
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* mobile */}
            <div className={`bg-[--secondary-color] fixed top-0 z-30 w-4/5 h-full py-20 px-6 duration-300 md:hidden block ${openNav ? 'left-0' : '-left-full'}`}>
                <ul className="font-semibold space-y-2 py-6">
                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink to='/dashboard/adminHome' className="text-white flex items-center gap-2 px-4 py-2" style={linkStyle}><FaHome />Admin Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/manageUsers' className="text-white flex items-center gap-2  px-4 py-2" style={linkStyle}><FaUsersRectangle />Manage Users</NavLink>
                                </li>

                                <li><NavLink to='/dashboard/manageProducts' className='text-white flex items-center gap-2 px-4 py-2' style={linkStyle}><MdCategory />Manage Products</NavLink></li>

                                <li>
                                    <NavLink to='/dashboard/managePayment' className="text-white flex items-center gap-2 px-4 py-2" style={linkStyle}>
                                        <RiAdvertisementLine />
                                        Payment management
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/salesReport' className="text-white flex items-center gap-2 px-4 py-2" style={linkStyle}>
                                        <TbReport />
                                        Sales Report
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/bannerAd' className="text-white flex items-center gap-2 px-4 py-2" style={linkStyle}>
                                        <RiAdvertisementLine />
                                        Manage banner Advertise
                                    </NavLink>
                                </li>
                            </>
                            :
                            <>
                                <li>
                                    <NavLink style={linkStyle} to='/dashboard/sellerHome' className="text-white flex items-center gap-2 px-4 py-2"><FaHome />Seller Home</NavLink>
                                </li>
                                <li>
                                    <NavLink style={linkStyle} to='/dashboard/manageJewelries' className="text-white flex items-center gap-2 px-4 py-2"><SiGooglecampaignmanager360 />Manage Products</NavLink>
                                </li>

                                <li><NavLink style={linkStyle} to='/dashboard/sellerPaymentHistory' className='text-white flex items-center gap-2 px-4 py-2'><SiContactlesspayment />Payment History</NavLink></li>

                                <li>
                                    <NavLink style={linkStyle} to='/dashboard/ads' className="text-white flex items-center gap-2 px-4 py-2">
                                        <RiAdvertisementLine />Ask For Advertisement
                                    </NavLink>
                                </li>
                            </>
                    }
                    <hr />
                    <li>
                        <NavLink style={linkStyle} className="text-white flex items-center gap-2 px-4 py-2" to={"/"}>
                            <FaHome> </FaHome>
                            Home
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* dashboard content */}
            <div className="flex-1 md:p-8 pt-16 md:mx-auto md:w-[75%] w-full">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;