import { BiSolidUserDetail } from "react-icons/bi";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdHistory, MdOutlineManageAccounts } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaFileInvoice } from "react-icons/fa";

const Sidebar = () => {
    return (
        <div className="w-56">
            <ul className="space-y-4">
                <li>
                    <NavLink to='/my-account/welcome' className='text-white flex items-center gap-2 bg-[--secondary-color] px-4 py-2'><MdOutlineManageAccounts />Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to='/my-account/wishlist' className='text-white flex items-center gap-2 bg-[--secondary-color] px-4 py-2'><IoMdHeartEmpty />Wishlist </NavLink>
                </li>

                <li>
                    <NavLink to='/my-account/paymentHistory' className='text-white flex items-center gap-2 bg-[--secondary-color] px-4 py-2'><MdHistory />Payment History</NavLink>
                </li>

                <li>
                    <NavLink to='/my-account/invoice' className='text-white flex items-center gap-2 bg-[--secondary-color] px-4 py-2'><FaFileInvoice />Invoice</NavLink>
                </li>

                <li>
                    <NavLink to='/my-account/editAccount' className='text-white flex items-center gap-2 bg-[--secondary-color] px-4 py-2'><BiSolidUserDetail />Acoount Details</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;