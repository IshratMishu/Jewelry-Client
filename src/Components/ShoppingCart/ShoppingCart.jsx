import { MdOutlineShoppingCart } from "react-icons/md";
import useCart from "../../Hooks/useCart";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
    const [cart] = useCart();
    return (
        <div className="flex items-center cursor-pointer relative">
            <Link to='/cart'> <MdOutlineShoppingCart className="text-2xl hover:text-[--primary-color]" />
                <p className="bg-[--primary-color] text-black rounded-full px-1 text-xs absolute -right-2 bottom-4 font-sans">{cart.length}</p></Link>
        </div>
    );
};

export default ShoppingCart;