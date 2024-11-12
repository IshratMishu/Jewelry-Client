import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { MdOutlineManageAccounts } from "react-icons/md";
import { TfiAngleDown } from "react-icons/tfi";

const Nav2 = () => {
    return (
        <div className="w-full bg-[var(--primary-color)] fixed mx-auto left-0 top-24">
            <div className="max-w-screen-xl mx-auto px-8 py-4 flex justify-between">
                <div>
                    <ul className="flex items-center gap-16 font-medium">
                        <li className="group flex cursor-pointer flex-col hover:text-[--secondary-color]">
                            Home<span className="mt-[2px] h-[3px] w-[0px] bg-[--secondary-color] transition-all duration-300 group-hover:w-full"></span>
                        </li>

                        <li className="group flex cursor-pointer flex-col hover:text-[--secondary-color]">
                            <span className="flex items-center gap-1">Shop<TfiAngleDown/></span> <span className="mt-[2px] h-[3px] w-[0px] bg-[--secondary-color] transition-all duration-300 group-hover:w-full"></span>
                        </li>

                        <li className="group flex cursor-pointer flex-col hover:text-[--secondary-color]">
                            Blog<span className="mt-[2px] h-[3px] w-[0px] bg-[--secondary-color] transition-all duration-300 group-hover:w-full"></span>
                        </li>

                        <li className="group flex cursor-pointer flex-col hover:text-[--secondary-color]">
                        <span className="flex items-center gap-1">Contact<TfiAngleDown/></span> <span className="mt-[2px] h-[3px] w-[0px] bg-[--secondary-color] transition-all duration-300 group-hover:w-full"></span>
                        </li>
                      
                    </ul>
                </div>
                <div className="flex items-center gap-10">
                    <ShoppingCart></ShoppingCart>
                    <MdOutlineManageAccounts className="text-2xl cursor-pointer hover:text-[--secondary-color]" />
                </div>
            </div>
        </div>
    );
};

export default Nav2;