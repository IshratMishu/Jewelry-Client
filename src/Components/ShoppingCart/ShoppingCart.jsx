import { MdOutlineShoppingCart } from "react-icons/md";

const ShoppingCart = () => {
    return (
        <div className="flex items-center cursor-pointer">
            <MdOutlineShoppingCart className="text-2xl hover:text-[--primary-color]"/>
            <p className="bg-[--primary-color] text-black rounded-full px-1 text-xs relative right-2 bottom-2">0</p>
        </div>
    );
};

export default ShoppingCart;