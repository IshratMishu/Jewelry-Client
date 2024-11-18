import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { MdOutlineManageAccounts } from "react-icons/md";
import { TfiAngleDown } from "react-icons/tfi";
import { Link, useLocation } from "react-router-dom";
import InfoPages from "./InfoPages/InfoPages";
import ShopNav from "./Shop/ShopNav";
import { useEffect } from "react";
import './nav2.css'
import Dropdown from "./Dropdown";
import useAuth from "../../Hooks/useAuth";
import { IoMdHeartEmpty } from "react-icons/io";
import useWishlist from "../../Hooks/useWishlist";


const Nav2 = () => {
    const { user } = useAuth();
    const location = useLocation();
    const [wishlist] = useWishlist();

    useEffect(() => {
        const navbar = document.querySelector('.navbar');

        const scrollBehavior = () => {
            if (window.scrollY > 0) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        if (location.pathname === '/') {
            navbar.classList.remove('scrolled');
            document.addEventListener('scroll', scrollBehavior);
        } else {
            navbar.classList.add('scrolled');
        }

        return () => {
            document.removeEventListener('scroll', scrollBehavior);
        }

    }, [location]);

    return (
        <div className="navbar w-full mx-auto z-50 fixed left-0 top-24 bg-[var(--secondary-color)] text-white h-16 pt-2">
            <div className="max-w-screen-xl mx-auto px-8 py-3 flex justify-between">
                <div>
                    <ul className="flex items-center gap-16 font-medium">
                        <Link>
                            <li className="group flex cursor-pointer flex-col hover:text-[--primary-color]">
                                Home<span className="mt-[2px] h-[3px] w-[0px] bg-[--primary-color] transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        </Link>

                        <li className="group flex cursor-pointer flex-col hover:text-[--primary-color] relative">
                            <span className="flex items-center gap-1">Shop<TfiAngleDown /></span> <span className="mt-[2px] h-[3px] w-[0px] bg-[--primary-color] transition-all duration-300 group-hover:w-full"></span>
                            <ShopNav></ShopNav>
                        </li>

                        <Link to='/blog'>
                            <li className="group flex cursor-pointer flex-col hover:text-[--primary-color]">
                                Blog<span className="mt-[2px] h-[3px] w-[0px] bg-[--primary-color] transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        </Link>

                        <li className="group flex cursor-pointer flex-col hover:text-[--primary-color] relative">
                            <span className="flex items-center gap-1">InfoPages<TfiAngleDown /></span> <span className="mt-[2px] h-[3px] w-[0px] bg-[--primary-color] transition-all duration-300 group-hover:w-full"></span>
                            <InfoPages></InfoPages>
                        </li>

                    </ul>
                </div>
                <div className="flex items-center gap-10">
                    <div className="relative">
                        <Link to='/my-account/wishlist'>
                            <IoMdHeartEmpty className="text-2xl cursor-pointer hover:text-[--primary-color]" /> <p className={`${wishlist.length === 0 ? 'hidden' : 'visible bg-[--primary-color] text-black rounded-full px-1 text-xs absolute bottom-4 left-4 font-sans'}`}>{wishlist.length}</p>
                        </Link>
                    </div>

                    <ShoppingCart></ShoppingCart>
                    {
                        user ?
                            <Dropdown></Dropdown>
                            :
                            <Link to='/signIn'>
                                <MdOutlineManageAccounts className="text-2xl cursor-pointer hover:text-[--primary-color]" />
                            </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Nav2;