import { BiSolidUserDetail } from "react-icons/bi";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdHistory, MdOutlineManageAccounts } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaFileInvoice } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import useAuth from "../../../Hooks/useAuth";

const Sidebar = () => {
    const { logOut } = useAuth();
    const linkStyle = ({ isActive }) => {
        return {
            color: isActive ? "#B18B22" : "",
            borderBottom: isActive ? "2px solid #B18B22" : "",
            backgroundColor: isActive? "#FAFAF4" : " "
        };
    };
    return (
        <div className="w-56">
            <ul className="space-y-4">
                <li>
                    <NavLink style={linkStyle} to='/my-account/welcome' className='text-white flex items-center gap-2 bg-[--secondary-color] px-4 py-2'><MdOutlineManageAccounts />Dashboard</NavLink>
                </li>
                <li>
                    <NavLink style={linkStyle} to='/my-account/wishlist' className='text-white flex items-center gap-2 bg-[--secondary-color] px-4 py-2'><IoMdHeartEmpty />Wishlist </NavLink>
                </li>

                <li>
                    <NavLink style={linkStyle} to='/my-account/paymentHistory' className='text-white flex items-center gap-2 bg-[--secondary-color] px-4 py-2'><MdHistory />Payment History</NavLink>
                </li>

                <li>
                    <NavLink style={linkStyle} to='/my-account/invoice' className='text-white flex items-center gap-2 bg-[--secondary-color] px-4 py-2'><FaFileInvoice />Invoice</NavLink>
                </li>

                <li>
                    <NavLink style={linkStyle} to='/my-account/editAccount' className='text-white flex items-center gap-2 bg-[--secondary-color] px-4 py-2'><BiSolidUserDetail />Acoount Details</NavLink>
                </li>

                <li>
                    <NavLink onClick={logOut} className='text-white flex items-center gap-2 bg-[--secondary-color] px-4 py-2'><CiLogout />Logout</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;