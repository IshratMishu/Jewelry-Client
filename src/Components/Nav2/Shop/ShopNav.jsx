import { Link } from "react-router-dom";


const ShopNav = () => {
    return (
        <ul className="absolute top-[150%] -left-6 bg-[--third-color] text-black invisible group-hover:visible transition-all min-w-72 p-4 shadow-md">
            <Link to='/products'><li className="px-4 py-2 hover:text-[--secondary-color]">All Jewelries</li> </Link>
            <Link><li className="px-4 py-2 hover:text-[--secondary-color]">Hoops</li> </Link>
            <Link><li className="px-4 py-2 hover:text-[--secondary-color]">Earings</li> </Link>
            <Link><li className="px-4 py-2 hover:text-[--secondary-color]">Necklaces & Chokers</li> </Link>
            <Link><li className="px-4 py-2 hover:text-[--secondary-color]">Cuffs,Bracelets & Anklets</li> </Link>
            <Link><li className="px-4 py-2 hover:text-[--secondary-color]">Accessories</li> </Link>
        </ul>
    );
};

export default ShopNav;