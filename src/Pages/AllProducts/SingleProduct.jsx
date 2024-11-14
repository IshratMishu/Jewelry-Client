import PropTypes from 'prop-types';
import { IoMdHeartEmpty } from "react-icons/io";
import { PiEyes } from "react-icons/pi";
import { MdOutlineShoppingCart } from "react-icons/md";

const SingleProduct = ({ product }) => {
    const { name, image, price } = product;
    return (
        <div className='flex flex-col border items-center justify-between hover:border-[--secondary-color] transition-all duration-300 relative h-72 w-52'>
            <img src={image} alt="" className='w-52 h-48 object-cover' />

            <div className='py-4 space-y-2 text-center'>
                <p className='font-medium'>{name}</p>
                <p className="font-sans text-[--secondary-color]">${price}</p>
            </div>

                <div className="absolute inset-0 flex items-center justify-center bg-[#F5DFCE] bg-opacity-35 opacity-0 hover:opacity-100 transition-all duration-300 gap-3">
                    <IoMdHeartEmpty className="hover:bg-[--secondary-color] hover:text-white rounded-full text-3xl p-1 transition-all duration-300 cursor-pointer" />
                    <PiEyes className="hover:bg-[--secondary-color] hover:text-white rounded-full text-3xl p-1 transition-all duration-300 cursor-pointer" />
                    <MdOutlineShoppingCart className="hover:bg-[--secondary-color] hover:text-white rounded-full text-3xl p-1 transition-all duration-300 cursor-pointer" />
                </div>
        

        </div>
    );
};


export default SingleProduct;

SingleProduct.propTypes = {
    product: PropTypes.object
}