import { CgProfile } from "react-icons/cg";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";



const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-[--secondary-color] p-5">
                <ul>
                    <li>
                        <NavLink className="text-white flex items-center gap-2"><CgProfile/>Profile</NavLink>
                    </li>

                    <li><NavLink to='/dashboard/cart' className='text-white flex items-center gap-2'><FaShoppingCart></FaShoppingCart>My Cart</NavLink></li>

                    <li className="">
                        <NavLink className="text-white flex items-center gap-2" to={"/"}>
                            <FaHome> </FaHome>
                            Home
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* dashboard content */}
            <div className="flex-1 p-8 mx-auto w-[98%]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;