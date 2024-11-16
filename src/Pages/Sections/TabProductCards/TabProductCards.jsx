import { MdOutlineArrowRightAlt, MdOutlineShoppingCart } from "react-icons/md";
import QuantityBox from "../../../Components/QuantityBox/QuantityBox";
import { FaStar } from "react-icons/fa";
import InnerImageZoom from "react-inner-image-zoom";
import { RxCross2 } from "react-icons/rx";
import { PiEyes } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BiSolidPurchaseTag } from "react-icons/bi";
import PropTypes from 'prop-types';

const TabProductCards = ({product}) => {
    const { _id, name, image, price, availability, category } = product;
    const [openModal, setOpenModal] = useState(false);

    return (
        <div>
        <div className='flex border items-center hover:border-[--secondary-color] transition-all duration-300 relative h-32 group'>
            <Link to={`/productDetail/${_id}`}><img src={image} alt="" className='w-32 h-28 object-cover transition-transform hover:scale-110 p-3' />
            </Link>
            <div className='space-y-1'>
                <p className='font-medium'>{name}</p>
                <p className='text-xs text-green-700'>{availability}</p>
                <div className='flex items-center text-sm text-[--secondary-color]'>
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className="font-sans text-[--secondary-color]">${price}</p>
            </div>

            <div className="absolute flex flex-row items-center opacity-0 group-hover:opacity-100 transition-all duration-200 delay-100 gap-2 bottom-2 right-2">

                <IoMdHeartEmpty className="hover:bg-[--secondary-color] hover:text-white rounded-full text-2xl p-1 cursor-pointer"/>

                <div className="mx-auto w-fit">
                    <PiEyes onClick={() => setOpenModal(true)} className="hover:bg-[--secondary-color] hover:text-white rounded-full text-2xl p-1 cursor-pointer" />

                    <div onClick={() => setOpenModal(false)} className={`fixed z-50 ${openModal ? 'visible opacity-100' : 'invisible opacity-0'} inset-0 grid place-items-center bg-black/20 backdrop-blur-sm duration-100`}>
                        <div onClick={(e_) => e_.stopPropagation()} className={`absolute bg-[--third-color] p-6 drop-shadow-lg ${openModal ? 'opacity-1 duration-300' : 'scale-110 opacity-0 duration-150'}`}>
                            <RxCross2 onClick={() => setOpenModal(false)} className="absolute right-3 top-3 w-6 cursor-pointer" />
                            <div className="flex gap-16 p-4">
                                <div>
                                    <InnerImageZoom src={image}
                                        alt="Product Image"
                                        zoomType="hover"
                                        zoomScale={1.1} className="h-80 border w-80 object-cover" />
                                </div>
                                <div>
                                    <h1 className="font-medium text-2xl">{name}</h1>
                                    <p className="text-sm">Category: <span className="text-[--secondary-color]">{category}</span></p>
                                    <div className='flex items-center text-sm text-[--secondary-color]'>
                                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> <span className="p-1">1 Review</span>
                                    </div>
                                    <div className="flex items-center w-52 pb-2 pt-1">
                                        <span className="border w-full"></span>
                                    </div>
                                    <div className="space-y-4">
                                        <p className="font-sans font-semibold text-xl">${price}</p>
                                        <p>Availability: <span className="text-green-700">{availability}</span></p>
                                        <QuantityBox></QuantityBox>
                                        <button className="border border-[var(--secondary-color)] w-52 py-1 bg-[var(--secondary-color)] text-white hover:bg-[--third-color] hover:text-[var(--secondary-color)] flex items-center gap-1 font-medium justify-center"><MdOutlineShoppingCart />Add to cart<MdOutlineArrowRightAlt /></button>
                                        <button className="border border-[var(--secondary-color)] py-1 bg-[var(--secondary-color)] text-white hover:bg-[--third-color] hover:text-[var(--secondary-color)] flex items-center gap-1 font-medium w-52 justify-center"><BiSolidPurchaseTag />Buy now<MdOutlineArrowRightAlt /></button>
                                        <p className="hover:text-[--secondary-color] flex items-center gap-1 underline cursor-pointer"><IoMdHeartEmpty className="text-[--secondary-color]" />Add to wishlist</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <MdOutlineShoppingCart className="hover:bg-[--secondary-color] hover:text-white rounded-full text-2xl p-1 cursor-pointer" />
            </div>
        </div>
    </div>
    );
};

export default TabProductCards;

TabProductCards.propTypes = {
    product: PropTypes.object
}