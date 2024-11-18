import useCart from "../../../Hooks/useCart";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const axiosSecure = useAxiosSecure();
    const handleDelete = id => {
        axiosSecure.delete(`/carts/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    toast.success(`Successfully removed the item from you cart`)
                    refetch();
                }
            })
    }

    const [inputValue, setInputValue] = useState(1);

    const handlePlus = () => {
        setInputValue(inputValue + 1);
    }

    const handleMinus = () => {
        if (inputValue > 1) {
            setInputValue(inputValue - 1);
        }
    }


    return (
        <div className="mt-20">
            <Helmet>
                <title>Cart - Moice Jewelry</title>
            </Helmet>
            <h1 className="text-2xl font-semibold">CART</h1>
            {
                cart.length < 1 ?
                    <div className="mt-20 text-center min-h-screen">
                        <h1>Your Cart is currently empty!</h1>
                        <Link to='/products'><button className="border border-[var(--secondary-color)] md:px-8 px-4 py-2 hover:bg-[var(--secondary-color)] hover:text-white bg-transparent text-[var(--secondary-color)] mt-2 mx-auto">Return to Shop</button></Link>
                    </div>
                    :
                    <div className="flex gap-5 mt-5">
                        {/* table products */}
                        <div className="overflow-x-auto w-[75%] ">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th className="w-[50px] px-6 py-4 text-start">
                                        </th>
                                        <th className="px-4 py-4 text-start"></th>
                                        <th className="px-1 py-4 text-start">Product</th>
                                        <th className="px-6 py-4 text-start">Quantity</th>
                                        <th className="px-6 py-4 text-start">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart.map(item => <tr key={item._id} className=" border ">
                                            <th className="px-6 py-4 text-start">
                                                <RxCross2 onClick={() => handleDelete(item._id)} />
                                            </th>
                                            <th className="px-4 py-4 text-start">
                                                <img className="h-[44px] w-[44px] bg-slate-500 object-cover" src={item.image} />
                                            </th>
                                            <th className="px-1 py-4 text-start ">{item.name}</th>
                                            <th className="px-6 py-4 text-start">
                                                <div className="flex items-center font-sans">
                                                    <button className="text-xl" onClick={handleMinus}>-</button>
                                                    <input type="text" className="w-8 h-6 border text-center bg-transparent text-xs" onChange={setInputValue} value={inputValue}/>
                                                    <button className="text-lg" onClick={handlePlus}>+</button>
                                                </div>
                                            </th>
                                            <th className="px-6 py-4 text-start font-sans">
                                                ${item.price}
                                            </th>
                                        </tr>)
                                    }

                                </tbody>
                            </table>
                        </div>


                        {/* price total */}
                        <div className="w-[25%] h-56 mt-6">
                            <h1 className="font-medium uppercase px-4">Cart Totals</h1>
                            <div className="border mt-2 space-y-2 px-4 py-2">
                                <h2 className="flex justify-between">Items: <span className="font-sans">{cart.length}</span></h2>
                                <hr />
                                <h2 className="flex justify-between">Total: <span className="font-sans">${totalPrice}</span></h2>
                                <hr />
                                <Link to='/checkout'><button className="border border-[var(--secondary-color)] md:px-8 px-4 py-2 bg-[var(--secondary-color)] text-white hover:bg-[--third-color] hover:text-[var(--secondary-color)] w-full mt-2">Proceed to checkout</button></Link>

                                <Link to='/products'><button className="border border-[var(--secondary-color)] md:px-8 px-4 py-2 hover:bg-[var(--secondary-color)] hover:text-white bg-transparent text-[var(--secondary-color)] w-full mt-2">Continue shopping</button></Link>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Cart;