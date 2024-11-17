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

const ProductDetails = () => {
    const {handleCart} = useShoppingCart();
    const { id } = useParams();
    const [details, setDetails] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/jewelries/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [id]);


    return (
        <div className="mt-28">
                 <Helmet>
                <title>{`${details.name} - Moice Jewelry`}</title>
            </Helmet>
            <div className="flex">
                <div className="w-[40%]">
                    <InnerImageZoom src={details.image}
                    zoomSrc={details.image}
                        alt="Product Image"
                        zoomType="hover"
                        zoomScale={1.1}
                         className="h-96 border w-96 object-cover" />
                </div>
                <div className="w-[30%]">
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
                        <button onClick={()=>handleCart(details)} className="border border-[var(--secondary-color)] w-52 py-1 bg-[var(--secondary-color)] text-white hover:bg-[--third-color] hover:text-[var(--secondary-color)] flex items-center gap-1 font-medium justify-center"><MdOutlineShoppingCart />Add to cart<MdOutlineArrowRightAlt /></button>
                        <button className="border border-[var(--secondary-color)] py-1 bg-[var(--secondary-color)] text-white hover:bg-[--third-color] hover:text-[var(--secondary-color)] flex items-center gap-1 font-medium w-52 justify-center"><BiSolidPurchaseTag />Buy now<MdOutlineArrowRightAlt /></button>

                        <p className="hover:text-[--secondary-color] flex items-center gap-1 underline cursor-pointer"><IoMdHeartEmpty className="text-[--secondary-color]" />Add to wishlist</p>
                    </div>
                </div>
                <div className="w-[30%] space-y-4">
                    <div className="border">
                        <p className="bg-[--primary-color] w-full h-8 font-medium py-1 px-4">Return Policy</p>
                        <p className="px-5 text-sm h-16 pt-2">{details.return_policy}</p>
                    </div>
                    <div className="border">
                        <p className="bg-[--primary-color] w-full h-8 font-medium py-1 px-4">Shipping</p>
                        <p className="px-5 text-sm h-16 pt-2">{details.shipping}</p>
                    </div>
                    <div className="border">
                        <p className="bg-[--primary-color] w-full h-8 font-medium py-1 px-4">Description</p>
                        <p className="px-5 text-sm h-32 overflow-y-scroll pt-2">{details.description}</p>
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
