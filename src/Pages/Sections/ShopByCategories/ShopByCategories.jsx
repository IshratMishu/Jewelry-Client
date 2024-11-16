import { GiDiamondRing } from "react-icons/gi";
import { GiHeartEarrings } from "react-icons/gi";
import { GiDoubleNecklace } from "react-icons/gi";
import { GiTribalPendant } from "react-icons/gi";
import { GiButterflyFlower } from "react-icons/gi";
import { TbVectorBezierCircle } from "react-icons/tb";
import { GiIntricateNecklace } from "react-icons/gi";
import { PiWatchLight } from "react-icons/pi";
import { Link } from "react-router-dom";


const ShopByCategories = () => {

    return (
        <div className="mt-28">
            <p className='text-center font-medium text-2xl'>Shop by Categories</p>
            <p className='text-center pb-2 text-[--secondary-color]'>──────</p>

            <div className="flex justify-around mt-5 cursor-pointer">
                <Link to="/product-category/Rings">
                    <div className="flex flex-col items-center group">
                        <div className="group-hover:bg-[--primary-color] h-32 w-28 border border-[--secondary-color] group-hover:border-transparent bg-transparent transition-all duration-300">
                            <GiDiamondRing className="mx-auto text-7xl mt-6 group-hover:text-black text-[--secondary-color]" />
                        </div>
                        <p className="pt-2 underline group-hover:text-[--secondary-color]">Rings</p>
                    </div>
                </Link>


                {/* <Link to="/product-category/Necklace">
               <div className="flex flex-col items-center group">
                    <div className="bg-[--primary-color] h-32 w-28 group-hover:border group-hover:border-[--secondary-color] group-hover:bg-transparent transition-all duration-300">
                        <GiDoubleNecklace className="mx-auto text-7xl mt-6 text-[--secondary-color]" />
                    </div>
                    <p className="pt-2 underline text-[--secondary-color]">NECKLACE</p>
                </div>
               </Link> */}

                <Link to="/product-category/Necklace">
                    <div className="flex flex-col items-center group">
                        <div className="group-hover:bg-[--primary-color] h-32 w-28 border border-[--secondary-color] group-hover:border-transparent bg-transparent transition-all duration-300">
                            <GiDoubleNecklace className="mx-auto text-7xl mt-6 group-hover:text-black text-[--secondary-color]" />
                        </div>
                        <p className="pt-2 underline group-hover:text-[--secondary-color]">Necklace</p>
                    </div>
                </Link>

                <Link to="/product-category/Earrings">
                    <div className="flex flex-col items-center group">
                        <div className="group-hover:bg-[--primary-color] h-32 w-28 border border-[--secondary-color] group-hover:border-transparent bg-transparent transition-all duration-300">
                            <GiHeartEarrings className="mx-auto text-7xl mt-6 group-hover:text-black text-[--secondary-color]" />
                        </div>
                        <p className="pt-2 underline group-hover:text-[--secondary-color]">Earrings</p>
                    </div>
                </Link>

                <Link to="/product-category/Pendant">
                    <div className="flex flex-col items-center group">
                        <div className="group-hover:bg-[--primary-color] h-32 w-28 border border-[--secondary-color] group-hover:border-transparent bg-transparent transition-all duration-300">
                            <GiTribalPendant className="mx-auto text-7xl mt-6 group-hover:text-black text-[--secondary-color]" />
                        </div>
                        <p className="pt-2 underline group-hover:text-[--secondary-color]">Pendant</p>
                    </div>
                </Link>

                <Link to="/product-category/Bracelet">
                    <div className="flex flex-col items-center group">
                        <div className="group-hover:bg-[--primary-color] h-32 w-28 border border-[--secondary-color] group-hover:border-transparent bg-transparent transition-all duration-300">
                            <TbVectorBezierCircle className="mx-auto text-7xl mt-6 group-hover:text-black text-[--secondary-color]" />
                        </div>
                        <p className="pt-2 underline group-hover:text-[--secondary-color]">Bracelet</p>
                    </div>
                </Link>

                <Link to="/product-category/Choker">
                    <div className="flex flex-col items-center group">
                        <div className="group-hover:bg-[--primary-color] h-32 w-28 border border-[--secondary-color] group-hover:border-transparent bg-transparent transition-all duration-300">
                            <GiIntricateNecklace className="mx-auto text-7xl mt-6 group-hover:text-black text-[--secondary-color]" />
                        </div>
                        <p className="pt-2 underline group-hover:text-[--secondary-color]">Choker</p>
                    </div>
                </Link>

                <Link to="/product-category/Brooches">
                    <div className="flex flex-col items-center group">
                        <div className="group-hover:bg-[--primary-color] h-32 w-28 border border-[--secondary-color] group-hover:border-transparent bg-transparent transition-all duration-300">
                            <GiButterflyFlower className="mx-auto text-7xl mt-6 group-hover:text-black text-[--secondary-color]" />
                        </div>
                        <p className="pt-2 underline group-hover:text-[--secondary-color]">Brooches</p>
                    </div>
                </Link>

                <Link to="/product-category/watch">
                    <div className="flex flex-col items-center group">
                        <div className="group-hover:bg-[--primary-color] h-32 w-28 border border-[--secondary-color] group-hover:border-transparent bg-transparent transition-all duration-300">
                            <PiWatchLight className="mx-auto text-7xl mt-6 group-hover:text-black text-[--secondary-color]" />
                        </div>
                        <p className="pt-2 underline group-hover:text-[--secondary-color]">Watch</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ShopByCategories;