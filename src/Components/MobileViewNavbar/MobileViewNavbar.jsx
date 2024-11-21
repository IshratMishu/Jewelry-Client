import { useState } from "react";
import Logo from "../Logo/Logo";
import { IoMdClose, IoMdHeartEmpty } from "react-icons/io";
import { TfiMenuAlt } from "react-icons/tfi";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
import { MdHistory, MdOutlineManageAccounts } from "react-icons/md";
import useSeller from "../../Hooks/useSeller";
import { FaFileInvoice } from "react-icons/fa";
import { BiSolidUserDetail } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";


const MobileViewNavbar = () => {
    const { logOut } = useAuth();
    const { user } = useAuth();
    const [openNav, setOpenNav] = useState(false);
    const [activeTab, setActiveTab] = useState("Menu");
    const [isSeller] = useSeller();

    const handleTab = (tab) => {
        setActiveTab(tab);
    }

    return (
        <div>
            <div className="flex items-center justify-between">
                <div>
                    <Logo></Logo>
                </div>

                <div onClick={() => setOpenNav(!openNav)} className="text-3xl z-50 ">
                    {
                        openNav ? <IoMdClose className="text-white" /> : <TfiMenuAlt />
                    }
                </div>
            </div>

            {/* mobile view */}
            <div className={`bg-[--secondary-color] fixed top-0 z-30 md:w-1/2 w-4/5 h-full py-20 px-6 duration-300 ${openNav ? 'right-0' : '-right-full'}`}>

                <div>
                    {/* Tab Buttons */}
                    <div className='flex justify-center gap-5'>
                        {
                            ['Menu', 'Account'].map((tab) =>
                                <button key={tab} onClick={() => handleTab(tab)} className={`py-1 w-40 border font-semibold bg-[--primary-color] ${activeTab === tab ? 'border border-[--primary-color] text-white bg-transparent' : ''}`}>
                                    {tab}
                                </button>
                            )
                        }
                    </div>


                    {/* Tab Content */}
                    <div className='mt-10 text-white font-semibold text-lg'>
                        {activeTab === "Menu" && (
                            <ul className="space-y-3 px-4 md:px-8">
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/products'>Shop</Link></li>
                                <li><Link to='/my-account/wishlist'>Wishlist</Link></li>
                                <li><Link to='/cart'>Cart</Link></li>
                                <li><Link to='/blog'>Blog</Link></li>
                                <li><Link to='/contact'>Contact Us</Link></li>
                                <li><Link to='/about'>About Us</Link></li>
                                <li><Link to='/error'>404 Error</Link></li>
                            </ul>
                        )}


                        {activeTab === "Account" && (
                            <div>
                                {
                                    user ?
                                        <ul className="space-y-3 px-2 md:px-8">
                                            <img className="w-10 h-10 border border-white rounded-full object-cover" src={user?.photoURL ? user.photoURL : 'https://i.ibb.co/31dsFpW/icon-7797704-640.webp'} alt="Photo" />
                                            <li>{user?.displayName || 'User'}</li>
                                            <li><Link to='/my-account'>My Account</Link>
                                                <ul className="space-y-2 pl-5">
                                                    <li>
                                                        <Link to='/my-account/welcome' className='flex items-center gap-1'><MdOutlineManageAccounts />Dashboard</Link>
                                                    </li>
                                                    <li>
                                                        <Link to='/my-account/wishlist' className='flex items-center gap-1'><IoMdHeartEmpty />Wishlist </Link>
                                                    </li>

                                                    <li>
                                                        <Link to='/my-account/paymentHistory' className='flex items-center gap-1'><MdHistory />Payment History</Link>
                                                    </li>

                                                    <li>
                                                        <Link to='/my-account/invoice' className='flex items-center gap-1'><FaFileInvoice />Invoice</Link>
                                                    </li>

                                                    <li>
                                                        <Link to='/my-account/editAccount' className='flex items-center gap-1'><BiSolidUserDetail />Acoount Details</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                {
                                                    isSeller ? <Link to='/dashboard/sellerHome'>Seller Dashboard</Link>
                                                        :
                                                        <Link to='/signup'>Become a Seller</Link>
                                                }</li>
                                            <li>
                                                <Link onClick={logOut} className='flex items-center gap-2'><CiLogout />Logout</Link>
                                            </li>
                                        </ul>
                                        :
                                        <Link to='/signIn' className="flex items-center gap-2 px-4 md:px-8">
                                            <MdOutlineManageAccounts />Sign In
                                        </Link>
                                }
                            </div>
                        )}
                    </div>

                </div>









                {/* <div className="">
               <div className="pl-5">
               {
                        user ?
                            <Dropdown></Dropdown>
                            :
                            <Link to='/signIn'>
                                <MdOutlineManageAccounts className="text-2xl cursor-pointer hover:text-[--primary-color]" />
                            </Link>
                    }
               </div>

                        <ul className="font-medium">
                            <Link><li className="px-4 py-2 hover:text-[--secondary-color]">Home</li></Link>
                            <Link to='/products'><li className="px-4 py-2 hover:text-[--secondary-color]">Shop</li></Link>
                            <Link to='/my-account/wishlist'><li className="px-4 py-2 hover:text-[--secondary-color]">Wishlist</li> </Link>
                            <Link to='/cart'><li className="px-4 py-2 hover:text-[--secondary-color]">Cart</li> </Link>
                            <Link to='/contact'><li className="px-4 py-2 hover:text-[--secondary-color]">Blog</li> </Link>
                            <Link to='/contact'><li className="px-4 py-2 hover:text-[--secondary-color]">Contact Us</li> </Link>
                            <Link to='/about'><li className="px-4 py-2 hover:text-[--secondary-color]">About Us</li> </Link>
                            <Link to='/error'><li className="px-4 py-2 hover:text-[--secondary-color]">404 Error</li> </Link>      
                        </ul>
                </div> */}
            </div>
        </div>
    );
};

export default MobileViewNavbar;