import { GiDiamondRing } from "react-icons/gi";
import { GiHeartEarrings } from "react-icons/gi";
import { GiDoubleNecklace } from "react-icons/gi";
import { GiTribalPendant } from "react-icons/gi";
import { GiButterflyFlower } from "react-icons/gi";
import { TbVectorBezierCircle } from "react-icons/tb";
import { GiIntricateNecklace } from "react-icons/gi";
import { PiWatchLight } from "react-icons/pi";

const ShopByCategories = () => {
    return (
        <div className="mt-28">
            <p className='text-center font-medium text-2xl'>Shop by Categories</p>
            <p className='text-center pb-2 text-[--secondary-color]'>──────</p>
            <div className="flex justify-around mt-5 cursor-pointer">
                <div className="flex flex-col items-center group">
                    <div className="bg-[--primary-color] h-32 w-28 group-hover:border group-hover:border-[--secondary-color] group-hover:bg-transparent transition-all duration-300">
                        <GiDiamondRing className="mx-auto text-7xl mt-6 text-[--secondary-color]" />
                    </div>
                    <p className="pt-2 underline text-[--secondary-color]">RINGS</p>
                </div>

                <div className="flex flex-col items-center group">
                    <div className="bg-[--primary-color] h-32 w-28 group-hover:border group-hover:border-[--secondary-color] group-hover:bg-transparent transition-all duration-300">
                        <GiDoubleNecklace className="mx-auto text-7xl mt-6 text-[--secondary-color]" />
                    </div>
                    <p className="pt-2 underline text-[--secondary-color]">NECKLACE</p>
                </div>

                <div className="flex flex-col items-center group">
                    <div className="bg-[--primary-color] h-32 w-28 group-hover:border group-hover:border-[--secondary-color] group-hover:bg-transparent transition-all duration-300">
                        <GiHeartEarrings className="mx-auto text-7xl mt-6 text-[--secondary-color]" />
                    </div>
                    <p className="pt-2 underline text-[--secondary-color]">EARRINGS</p>
                </div>

                <div className="flex flex-col items-center group">
                    <div className="bg-[--primary-color] h-32 w-28 group-hover:border group-hover:border-[--secondary-color] hover:bg-transparent transition-all duration-300">
                        <GiTribalPendant className="mx-auto text-7xl mt-6 text-[--secondary-color]" />
                    </div>
                    <p className="pt-2 underline text-[--secondary-color]">PENDANT</p>
                </div>

                <div className="flex flex-col items-center group">
                    <div className="bg-[--primary-color] h-32 w-28 group-hover:border group-hover:border-[--secondary-color] group-hover:bg-transparent transition-all duration-300">
                        <TbVectorBezierCircle className="mx-auto text-7xl mt-6 text-[--secondary-color]" />
                    </div>
                    <p className="pt-2 underline text-[--secondary-color]">BRACELETS</p>
                </div>

                <div className="flex flex-col items-center group">
                    <div className="bg-[--primary-color] h-32 w-28 group-hover:border group-hover:border-[--secondary-color] group-hover:bg-transparent transition-all duration-300">
                        <GiIntricateNecklace className="mx-auto text-7xl mt-6 text-[--secondary-color]" />
                    </div>
                    <p className="pt-2 underline text-[--secondary-color]">CHOKER</p>
                </div>

                <div className="flex flex-col items-center group">
                    <div className="bg-[--primary-color] h-32 w-28 group-hover:border group-hover:border-[--secondary-color] group-hover:bg-transparent transition-all duration-300">
                        <GiButterflyFlower className="mx-auto text-7xl mt-6 text-[--secondary-color]" />
                    </div>
                    <p className="pt-2 underline text-[--secondary-color]">BROOCHES</p>
                </div>

                <div className="flex flex-col items-center group">
                    <div className="bg-[--primary-color] h-32 w-28 group-hover:border group-hover:border-[--secondary-color] group-hover:bg-transparent transition-all duration-300">
                        <PiWatchLight className="mx-auto text-7xl mt-6 text-[--secondary-color]" />
                    </div>
                    <p className="pt-2 underline text-[--secondary-color]">WATCH</p>
                </div>
            </div>
        </div>
    );
};

export default ShopByCategories;