import { RiCoupon3Line } from "react-icons/ri";
import { TfiGift } from "react-icons/tfi";
import { GiDrippingStone } from "react-icons/gi";
import { MdOutlinePayment } from "react-icons/md";
const Cards = () => {
    return (
        <div className="flex justify-between items-center mt-5 gap-5 cursor-pointer">
            <div className="flex flex-col justify-center text-center bg-[--primary-color] p-5 h-36 w-1/4 gap-4 group">
                <MdOutlinePayment className="text-5xl text-[--secondary-color] mx-auto group-hover:text-[#000000BF]" />
                <p className="font-medium text-sm">EASY  PAYMENTS</p>
            </div>
            <div className="flex flex-col justify-center text-center bg-[--primary-color] p-5 h-36 w-1/4 gap-4 group">
                <GiDrippingStone className="text-5xl text-[--secondary-color] mx-auto group-hover:text-[#000000BF]" />
                <p className="font-medium text-sm">ORIGINAL STONES</p>
            </div>
            <div className="flex flex-col justify-center text-center bg-[--primary-color] p-5 h-36 w-1/4 gap-4 group">
                <RiCoupon3Line className="text-5xl text-[--secondary-color] mx-auto group-hover:text-[#000000BF]" />
                <p className="font-medium text-sm">COUPONS & OFFERS</p>
            </div>
            <div className="flex flex-col justify-center text-center bg-[--primary-color] p-5 h-36 w-1/4 gap-4 group">
                <TfiGift className="text-5xl text-[--secondary-color] mx-auto group-hover:text-[#000000BF]" />
                <p className="font-medium text-sm">GIFT CARDS</p>
            </div>
        </div>
    );
};

export default Cards;