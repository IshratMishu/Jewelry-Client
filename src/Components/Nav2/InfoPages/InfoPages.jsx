import { Link } from "react-router-dom";


const InfoPages = () => {
    return (
        <ul className="absolute top-[150%] -left-6 bg-[--third-color] text-black invisible group-hover:visible transition-all min-w-40 p-4 shadow-md">
            <Link><li className="px-4 py-2 hover:text-[--secondary-color]">Contact Us</li> </Link>
            <Link><li className="px-4 py-2 hover:text-[--secondary-color]">About Us</li> </Link>
            <Link><li className="px-4 py-2 hover:text-[--secondary-color]">Get In Touch</li> </Link>
            <Link><li className="px-4 py-2 hover:text-[--secondary-color]">404 Error</li> </Link>
        </ul>
    );
};

export default InfoPages;