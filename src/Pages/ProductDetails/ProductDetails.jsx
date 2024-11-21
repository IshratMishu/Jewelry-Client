import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineArrowRightAlt, MdOutlineShoppingCart } from "react-icons/md";
import { useParams } from "react-router-dom";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { IoMdHeartEmpty } from "react-icons/io";
import QuantityBox from "../../Components/QuantityBox/QuantityBox";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import ReviewForm from "../../Components/ReviewForm/ReviewForm";
import { Helmet } from "react-helmet-async";
import useShoppingCart from "../../Hooks/useShoppingCart";
import useWishlistSend from "../../Hooks/useWishlistSend";


const ProductDetails = () => {
    const { handleCart } = useShoppingCart();
    const { handleWishlist } = useWishlistSend();
    const { id } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch(`https://jewelry-shop-server-five.vercel.app/jewelries/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [id]);

    const handleBuyNow = () => {
        handleCart(details, true);
    };

    return (
        <div className="mt-28">
            <Helmet>
                <title>{`${details.name} - Moice Jewelry`}</title>
            </Helmet>
            <div className="flex lg:flex-row flex-col">
                <div className="lg:w-[40%] w-full">
                    <InnerImageZoom src={details.image}
                        zoomSrc={details.image}
                        alt="Product Image"
                        zoomType="hover"
                        zoomScale={1.1}
                        className="md:h-96 h-80 border w-96 object-cover" />
                </div>
                <div className="lg:w-[30%] w-full pl-5">
                    <h1 className="font-medium text-2xl">{details.name}</h1>
                    <p className="text-sm">Category: <span className="text-[--secondary-color]">{details.category}</span></p>
                    <div className='flex items-center text-sm text-[--secondary-color]'>
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> <span className="p-1">1 Review</span>
                    </div>
                    <div className="flex items-center w-52 pb-2 pt-1">
                        <span className="border w-full"></span>
                    </div>
                    <div className="space-y-4">
                        <p className="font-sans font-semibold text-xl">${details.price}</p>
                        <p>Brand: <span className="text-sm">{details.brand}</span></p>
                        <p>Availability: <span className="text-green-700">{details.availability}</span></p>
                        <QuantityBox></QuantityBox>
                        <button onClick={() => handleCart(details)} className="border border-[var(--secondary-color)] w-52 py-1 bg-[var(--secondary-color)] text-white hover:bg-[--third-color] hover:text-[var(--secondary-color)] flex items-center gap-1 font-medium justify-center"><MdOutlineShoppingCart />Add to cart<MdOutlineArrowRightAlt /></button>

                        <button onClick={handleBuyNow} className="border border-[var(--secondary-color)] py-1 bg-[var(--secondary-color)] text-white hover:bg-[--third-color] hover:text-[var(--secondary-color)] flex items-center gap-1 font-medium w-52 justify-center mt-2"><BiSolidPurchaseTag />Buy now<MdOutlineArrowRightAlt /></button>


                        <p onClick={() => handleWishlist(details)} className="hover:text-[--secondary-color] flex items-center gap-1 underline cursor-pointer"><IoMdHeartEmpty className="text-[--secondary-color]" />Add to wishlist</p>
                    </div>
                </div>
                <div className="lg:w-[30%] w-full space-y-4 lg:mt-0 mt-10">
                    <div className="border">
                        <p className="bg-[--primary-color] w-full h-8 font-medium py-1 px-4">Return Policy</p>
                        <p className="px-5 text-sm h-16 py-2 overflow-y-scroll">{details.return_policy}</p>
                    </div>
                    <div className="border">
                        <p className="bg-[--primary-color] w-full h-8 font-medium py-1 px-4">Shipping</p>
                        <p className="px-5 text-sm h-16 py-2 overflow-y-scroll">{details.shipping}</p>
                    </div>
                    <div className="border">
                        <p className="bg-[--primary-color] w-full h-8 font-medium py-1 px-4">Description</p>
                        <p className="px-5 text-sm h-32 overflow-y-scroll py-2">{details.description}</p>
                    </div>
                </div>
            </div>

            <hr className="mt-16 mb-10" />

            <div>
                <h1 className="font-medium uppercase text-xl pb-2">Add a review</h1>
                <p>Your email address will not be published. Required fields are marked *</p>
                <div className="flex items-center gap-5 pt-2 pb-2">
                    <p>Your rating * </p>
                    <div className='flex items-center text-sm text-[--secondary-color]'>
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                </div>

                <ReviewForm></ReviewForm>
            </div>
        </div>
    );
};

export default ProductDetails; 
