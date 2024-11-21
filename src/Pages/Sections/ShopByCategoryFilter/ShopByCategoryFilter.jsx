import { useLoaderData } from "react-router-dom";
// import { FaStar } from "react-icons/fa";
// import { IoMdHeartEmpty } from "react-icons/io";
// import { MdOutlineArrowRightAlt, MdOutlineShoppingCart } from "react-icons/md";
import { useState } from "react";
// import { RxCross2 } from "react-icons/rx";
// import { PiEyes } from "react-icons/pi";
// import InnerImageZoom from 'react-inner-image-zoom';
// import QuantityBox from "../../../Components/QuantityBox/QuantityBox";
// import { BiSolidPurchaseTag } from "react-icons/bi";
import PriceRange from "../../../Components/Shared/PriceRange/PriceRange";
import CategoriesSort from "../../../Components/Shared/CategoriesSort/CategoriesSort";
import { Helmet } from "react-helmet-async";
import { SlGrid } from "react-icons/sl";
import { TfiViewList } from "react-icons/tfi";
import TabProductCards from "../TabProductCards/TabProductCards";
import SingleProduct from "../../AllProducts/SingleProduct";

const ShopByCategoryFilter = () => {
    const products = useLoaderData();
    const [viewMode, setViewMode] = useState('grid');

    return (
        <div className="mt-20 flex gap-10">
            <Helmet>
                <title>Shop - Moice Jewelry</title>
            </Helmet>

            <div className="md:w-[20%] space-y-5 md:block hidden">
                <PriceRange></PriceRange>
                <CategoriesSort></CategoriesSort>
            </div>
            <div className="lg:w-[80%] w-full">

                <div className="flex items-center gap-8 mb-2">
                    <SlGrid className={` ${viewMode === 'grid' ? 'text-[--secondary-color]' : 'hover:text-[--secondary-color]'}`}
                        onClick={() => setViewMode('grid')}
                    />
                    <TfiViewList className={` ${viewMode === 'list' ? 'text-[--secondary-color]' : 'hover:text-[--secondary-color]'}`}
                        onClick={() => setViewMode('list')}
                    />
                </div>

                <hr />

                <div className="mt-4 grid lg:grid-cols-3 grid-cols-2 gap-5">
                    {viewMode === 'grid' ?
                        // products.map(item => (
                        //     <div key={item._id} className='border items-center hover:border-[--secondary-color] transition-all duration-300 relative h-72 w-52 group'>
                        //         <Link to={`/productDetail/${item._id}`}><img src={item.image} alt="" className='w-52 h-44 object-cover transition-transform hover:scale-110 p-3' />
                        //         </Link>
                        //         <div className='pt-2 space-y-1 pl-3'>
                        //             <p className='font-medium'>{item.name}</p>
                        //             <p className='text-xs text-green-700'>{item.availability}</p>
                        //             <div className='flex items-center text-sm text-[--secondary-color]'>
                        //                 <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        //             </div>
                        //             <p className="font-sans text-[--secondary-color]">${item.price}</p>
                        //         </div>

                        //         <div className="absolute flex flex-col items-center opacity-0 group-hover:opacity-100 transition-all duration-200 delay-100 gap-3 top-16 right-2">

                        //             <IoMdHeartEmpty className="hover:bg-[--secondary-color] hover:text-white rounded-full text-3xl p-1 cursor-pointer" />
                        //             {/* <Link>
                        //     <PiEyes className="bg-[--primary-color] hover:bg-[--secondary-color] hover:text-white rounded-full text-3xl p-1 transition-all duration-300 cursor-pointer shadow shadow-[--secondary-color]" />
                        //     </Link> */}

                        //             <div className="mx-auto w-fit">
                        //                 <PiEyes onClick={() => setOpenModal(true)} className="hover:bg-[--secondary-color] hover:text-white rounded-full text-3xl p-1 cursor-pointer" />

                        //                 <div onClick={() => setOpenModal(false)} className={`fixed z-50 ${openModal ? 'visible opacity-100' : 'invisible opacity-0'} inset-0 grid place-items-center bg-black/20 backdrop-blur-sm duration-100`}>
                        //                     <div onClick={(e_) => e_.stopPropagation()} className={`absolute bg-[--third-color] p-6 drop-shadow-lg ${openModal ? 'opacity-1 duration-300' : 'scale-110 opacity-0 duration-150'}`}>
                        //                         <RxCross2 onClick={() => setOpenModal(false)} className="absolute right-3 top-3 w-6 cursor-pointer" />
                        //                         <div className="flex gap-16 p-4">
                        //                             <div>
                        //                                 <InnerImageZoom src={item.image}
                        //                                     alt="Product Image"
                        //                                     zoomType="hover"
                        //                                     zoomScale={1.1} className="h-80 border w-80 object-cover" />
                        //                             </div>
                        //                             <div>
                        //                                 <h1 className="font-medium text-2xl">{item.name}</h1>
                        //                                 <p className="text-sm">Category: <span className="text-[--secondary-color]">{item.category}</span></p>
                        //                                 <div className='flex items-center text-sm text-[--secondary-color]'>
                        //                                     <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> <span className="p-1">1 Review</span>
                        //                                 </div>
                        //                                 <div className="flex items-center w-52 pb-2 pt-1">
                        //                                     <span className="border w-full"></span>
                        //                                 </div>
                        //                                 <div className="space-y-4">
                        //                                     <p className="font-sans font-semibold text-xl">${item.price}</p>
                        //                                     <p>Availability: <span className="text-green-700">{item.availability}</span></p>
                        //                                     <QuantityBox></QuantityBox>
                        //                                     <button className="border border-[var(--secondary-color)] w-52 py-1 bg-[var(--secondary-color)] text-white hover:bg-[--third-color] hover:text-[var(--secondary-color)] flex items-center gap-1 font-medium justify-center"><MdOutlineShoppingCart />Add to cart<MdOutlineArrowRightAlt /></button>
                        //                                     <button className="border border-[var(--secondary-color)] py-1 bg-[var(--secondary-color)] text-white hover:bg-[--third-color] hover:text-[var(--secondary-color)] flex items-center gap-1 font-medium w-52 justify-center"><BiSolidPurchaseTag />Buy now<MdOutlineArrowRightAlt /></button>
                        //                                     <p className="hover:text-[--secondary-color] flex items-center gap-1 underline cursor-pointer"><IoMdHeartEmpty className="text-[--secondary-color]" />Add to wishlist</p>
                        //                                 </div>
                        //                             </div>
                        //                         </div>
                        //                     </div>
                        //                 </div>
                        //             </div>



                        //             <MdOutlineShoppingCart className="hover:bg-[--secondary-color] hover:text-white rounded-full text-3xl p-1 cursor-pointer" />
                        //         </div>
                        //     </div>
                        // ))
                        products.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>
                        )
                        :
                        products.map(product => <TabProductCards key={product._id} product={product}></TabProductCards>)
                    }
                </div>
            </div>
        </div>



    );
};

export default ShopByCategoryFilter;
