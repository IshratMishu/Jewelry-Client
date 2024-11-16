import { MdOutlineShoppingCart } from "react-icons/md";

const ShoppingCart = () => {
    return (
        <div className="flex items-center cursor-pointer pb-2">
            <MdOutlineShoppingCart className="text-2xl hover:text-[--primary-color]"/>
            <p className="bg-[--primary-color] text-black rounded-full px-1 text-xs relative right-2 bottom-2 font-sans">0</p>
        </div>
    );
};

export default ShoppingCart;