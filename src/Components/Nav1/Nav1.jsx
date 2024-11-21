import Logo from "../../Components/Logo/Logo";
import { useState } from "react";
import { allDistricts } from "../../../public/District";
import { TfiAngleDown} from "react-icons/tfi";
import { IoSearchOutline } from "react-icons/io5";


const Nav1 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenEn, setIsOpenEn] = useState(false);
    const [isOpenUsd, setIsOpenUsd] = useState(false);
    const [selectedValue, setSelectedValue] = useState("Select Location");


    return (
        <div className="lg:flex items-center justify-between hidden">
            <div>
                <Logo></Logo>
            </div>
            <div className="flex items-center gap-2">
                {/* select location */}
                <div className="relative z-50">
                    <div onClick={() => setIsOpen(!isOpen)} className="flex w-56 items-center justify-between px-6 py-2 border">
                        <h1 className="">{selectedValue}</h1>
                        <TfiAngleDown className={`${isOpen ? '-rotate-180' : 'rotate-0'} duration-300`} />
                    </div>
                    <div className={`${isOpen ? 'visible opacity-100' : 'invisible opacity-0'} absolute max-h-48 overflow-y-auto w-56 py-2 border duration-300 z-10 bg-white`}>
                        {allDistricts.map(district => (
                            <div key={district} onClick={(e) => { setSelectedValue(e.target.textContent); setIsOpen(false); }} className="px-6 py-2 hover:text-[var(--secondary-color)]">
                                {district}
                            </div>
                        ))}
                    </div>
                </div>

                {/* search button */}
                <div className="relative flex items-center ">
                    <input type="search" className="px-6 w-96 py-2 border focus:outline-none bg-[#FAFAF4]" placeholder="Product name..." />
                    <IoSearchOutline className="absolute right-1 bg-[var(--secondary-color)] text-white  cursor-pointer text-4xl p-2" />
                </div>
            </div>

            {/* language and currency */}
            <div className="flex items-center text-xs gap-10">
                {/* language */}
                <div className="relative z-50">
                    <div onClick={() => setIsOpenEn(!isOpenEn)} className="flex items-center gap-1 cursor-pointer">
                        <h1 className="underline">EN</h1>
                        <TfiAngleDown />
                    </div>
                    {isOpenEn && (
                        <div className="absolute mt-1 -left-5 border bg-white z-10">
                            <p className="px-4 py-2 hover:text-[var(--secondary-color)] cursor-pointer">English</p>
                            <p className="px-4 py-2 hover:text-[var(--secondary-color)] cursor-pointer">Bangla</p>
                        </div>
                    )}
                </div>

                {/* currency */}
                <div className="relative z-50">
                    <div onClick={() => setIsOpenUsd(!isOpenUsd)} className="flex items-center gap-1 cursor-pointer">
                        <h1 className="underline">$ USD</h1>
                        <TfiAngleDown />
                    </div>
                    {isOpenUsd && (
                        <div className="absolute mt-1 border bg-white z-10">
                            <p className="px-4 py-2 hover:text-[var(--secondary-color)] cursor-pointer">USD</p>
                            <p className="px-4 py-2 hover:text-[var(--secondary-color)] cursor-pointer">BDT</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Nav1;