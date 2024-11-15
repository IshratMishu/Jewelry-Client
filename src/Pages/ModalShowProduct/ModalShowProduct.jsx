// import { useEffect, useState } from "react";
// import { RxCross2 } from "react-icons/rx";
// import QuantityBox from "../../Components/QuantityBox/QuantityBox";
// import { FaStar } from "react-icons/fa";
// import { MdOutlineArrowRightAlt, MdOutlineShoppingCart } from "react-icons/md";
// import { BiSolidPurchaseTag } from "react-icons/bi";
// import { IoMdHeartEmpty } from "react-icons/io";
// import InnerImageZoom from "react-inner-image-zoom";
// import { PiEyes } from "react-icons/pi";
// import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
// import { useParams } from "react-router-dom";

// const ModalShowProduct = () => {
//     const [openModal, setOpenModal] = useState(false);
//     const [detaills, setDetaills] = useState([]);
//     const { id } = useParams();

//     useEffect(() => {
//         fetch(`http://localhost:5000/jewelries/${id}`)
//             .then(res => res.json())
//             .then(data => setDetaills(data))
//     }, [id]);

//     return (
//         <div className="mx-auto w-fit">

//             <PiEyes onClick={() => setOpenModal(true)} className="bg-[--primary-color] hover:bg-[--secondary-color] hover:text-white rounded-full text-3xl p-1 transition-all duration-300 cursor-pointer shadow shadow-[--secondary-color]" />

//             <div onClick={() => setOpenModal(false)} className={`fixed z-[100] w-screen ${openModal ? 'visible opacity-100' : 'invisible opacity-0'} inset-0 grid place-items-center bg-black/20 backdrop-blur-sm duration-100`}>
//                 <div onClick={(e_) => e_.stopPropagation()} className={`absolute bg-[--third-color] p-6 drop-shadow-lg ${openModal ? 'opacity-1 duration-300' : 'scale-110 opacity-0 duration-150'}`}>

//                     <RxCross2 onClick={() => setOpenModal(false)} className="absolute right-3 top-3 w-6 cursor-pointer" />

//                     <div className="flex gap-16 p-4">
//                         <div>
//                             <InnerImageZoom src={detaills.image}
//                                 alt="Product Image"
//                                 zoomType="hover"
//                                 zoomScale={1.1} className="h-80 border w-80 object-cover" />
//                         </div>

//                         <div>

//                             <h1 className="font-medium text-2xl">{detaills.name}</h1>
//                             <p className="text-sm">Category: <span className="text-[--secondary-color]">{detaills.category}</span></p>
//                             <div className='flex items-center text-sm text-[--secondary-color]'>
//                                 <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> <span className="p-1">1 Review</span>
//                             </div>
//                             <div className="flex items-center w-52 pb-2 pt-1">
//                                 <span className="border w-full"></span>
//                             </div>
//                             <div className="space-y-4">
//                                 <p className="font-sans font-semibold text-xl">${detaills.price}</p>
//                                 <p>Availability: <span className="text-green-700">{detaills.availability}</span></p>
//                                 <QuantityBox></QuantityBox>
//                                 <button className="border border-[var(--secondary-color)] w-52 py-1 bg-[var(--secondary-color)] text-white hover:bg-[--third-color] hover:text-[var(--secondary-color)] flex items-center gap-1 font-medium justify-center"><MdOutlineShoppingCart />Add to cart<MdOutlineArrowRightAlt /></button>
//                                 <button className="border border-[var(--secondary-color)] py-1 bg-[var(--secondary-color)] text-white hover:bg-[--third-color] hover:text-[var(--secondary-color)] flex items-center gap-1 font-medium w-52 justify-center"><BiSolidPurchaseTag />Buy now<MdOutlineArrowRightAlt /></button>

//                                 <p className="hover:text-[--secondary-color] flex items-center gap-1 underline cursor-pointer"><IoMdHeartEmpty className="text-[--secondary-color]" />Add to wishlist</p>
//                             </div>
//                         </div>

//                     </div>


//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ModalShowProduct;

