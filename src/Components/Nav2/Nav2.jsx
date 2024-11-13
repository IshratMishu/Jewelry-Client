import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { MdOutlineManageAccounts } from "react-icons/md";
import { TfiAngleDown } from "react-icons/tfi";
import { Link } from "react-router-dom";
import InfoPages from "./InfoPages/InfoPages";
import ShopNav from "./Shop/ShopNav";



const Nav2 = () => {
    return (
        <div className="w-full bg-[var(--secondary-color)] fixed mx-auto left-0 top-24 z-10 text-white">
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

                        <Link>
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
                    <ShoppingCart></ShoppingCart>
                    <Link>
                        <MdOutlineManageAccounts className="text-2xl cursor-pointer hover:text-[--primary-color]" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Nav2;