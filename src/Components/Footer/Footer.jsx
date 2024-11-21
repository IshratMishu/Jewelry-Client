import Logo from "../Logo/Logo";
import { TfiFacebook } from "react-icons/tfi";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { MdWifiCalling3 } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import bkash from '../../assets/bkash.png';
import visa from '../../assets/visa.png';
import amazon from '../../assets/amazon.png';
import { GrSend } from "react-icons/gr";


const Footer = () => {
    return (
        <div className="lg:mt-28 mt-16">
            <hr className="py-6" />
            <div className="flex lg:flex-row flex-col items-center">
                <div className="space-y-4">
                    <div className="lg:justify-start flex justify-center">
                        <Logo></Logo>
                    </div>
                    <p className="text-sm text-balance lg:text-start text-center">Unleash the radiance of your inner beauty with our premium jewelry brand - a perfect blend of sophistication and style.</p>
                    <div className="flex items-center gap-2 lg:justify-start justify-center">
                        <TfiFacebook className="bg-[--secondary-color] text-white text-3xl p-2" />
                        <AiFillInstagram className="bg-[--secondary-color] text-white text-3xl p-2" />
                        <FaYoutube className="bg-[--secondary-color] text-white text-3xl p-2" />
                        <FaTelegramPlane className="bg-[--secondary-color] text-white text-3xl p-2" />
                    </div>
                </div>
                <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-0 gap-5 lg:mt-0 mt-6 md:px-0 px-4">
                    <div className="space-y-1 cursor-pointer">
                        <h4 className="font-medium text-xl mb-3">Account</h4>
                        <p className="hover:underline hover:text-[--secondary-color]">Dashboard</p>
                        <p className="hover:underline hover:text-[--secondary-color]">Orders</p>
                        <p className="hover:underline hover:text-[--secondary-color]">Wishlist</p>
                        <p className="hover:underline hover:text-[--secondary-color]">Addresses</p>
                    </div>


                    <div className="space-y-1 cursor-pointer">
                        <h4 className="font-medium text-xl mb-3">Catalog</h4>
                        <p className="hover:underline hover:text-[--secondary-color]">Shop by category</p>
                        <p className="hover:underline hover:text-[--secondary-color]">Shop by brand</p>
                        <p className="hover:underline hover:text-[--secondary-color]">Promotions</p>
                        <p className="hover:underline hover:text-[--secondary-color]">Sitemap</p>
                    </div>


                    <div className="space-y-1 cursor-pointer">
                        <h4 className="font-medium text-xl mb-3">Help</h4>
                        <p className="hover:underline hover:text-[--secondary-color]">FAQ</p>
                        <p className="hover:underline hover:text-[--secondary-color]">Shop by brand</p>
                        <p className="hover:underline hover:text-[--secondary-color]">About us</p>
                        <p className="hover:underline hover:text-[--secondary-color]">Contact us</p>
                    </div>


                    <div className="space-y-2">
                        <h4 className="font-medium text-xl mb-3">Contact us</h4>
                        <div className="flex items-center gap-2">
                            <ImLocation2 className="text-2xl text-[--secondary-color]" />
                            <div className="hover:underline hover:text-[--secondary-color]">
                                <p><span className="font-sans">25</span> Wyle Cop, Shrewsbury, </p>
                                <p>SY1 1XD</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <MdWifiCalling3 className="text-2xl text-[--secondary-color]" />
                            <div className="hover:underline hover:text-[--secondary-color]">
                                <p>Call us <span className="font-sans">8</span>AM - <span className="font-sans">10</span>PM</p>
                                <p className="font-sans">8573 8244 43437</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <hr className="lg:mt-8 lg:mb-8" />

            <div className="flex lg:flex-row flex-col lg:justify-between items-center">
                <div>
                    <div className="flex items-center gap-2 mt-10 mb-6">
                        <img src={bkash} alt="bkash" className="w-20 h-10 px-1 py-2 bg-[--secondary-color] object-cover" />
                        <img src={visa} alt="visa" className="w-20 h-10 px-1 py-2 object-cover bg-[--secondary-color]" />
                        <img src={amazon} alt="visa" className="w-20 h-10 px-1 py-2 bg-[--secondary-color] object-cover" />
                    </div>
                    <p className="text-lg">Copyright <span className="text-[--secondary-color]">©</span> <span className="font-sans">2024</span> Moice. All Rights Reserved</p>
                </div>
                <div className="">
                    <h3 className="text-lg font-medium mb-1 lg:text-end text-center">Subscribe to our newsletter</h3>
                    <div className="relative flex items-center cursor-pointer md:justify-end mx-auto">
                        <input type="search" className="px-6 w-64 md:w-96 py-2 border border-[--secondary-color] focus:outline-none bg-[#FAFAF4]" placeholder="Your email address" />
                        <GrSend className="absolute right-1 text-[var(--secondary-color)] text-4xl p-2" />
                    </div>
                    <div className="flex gap-5 mt-6 cursor-pointer">
                        <p className="text-[--secondary-color] underline">Terms of use</p>
                        <p className="text-[--secondary-color] underline">Privacy Policy</p>
                        <p className="text-[--secondary-color] underline">Interest Based Ads</p>
                        <p className="text-[--secondary-color] underline">Accessibility</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;