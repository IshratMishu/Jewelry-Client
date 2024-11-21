import { Helmet } from "react-helmet-async";
import Sidebar from "../DashboardPage/Sidebar";
import useWishlist from "../../../Hooks/useWishlist";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import useShoppingCart from "../../../Hooks/useShoppingCart";
import { RxCross2 } from "react-icons/rx";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../../../Components/Button/Button";


const Wishlist = () => {
    const { handleCart } = useShoppingCart();
    const [wishlist, refetch] = useWishlist();
    const axiosSecure = useAxiosSecure();

    const handleDelete = id => {
        axiosSecure.delete(`/wishlist/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    toast.success(`Successfully removed the item from your wishlist`)
                    refetch();
                }
            })
    }

    return (
        <div className="mt-20">
            <Helmet>
                <title>My Account - Moice Jewelry</title>
            </Helmet>
            <h1 className="text-2xl font-medium">MY ACCOUNT</h1>
            <div className="flex mt-8 gap-10">
                <div className="hidden md:block">
                    <Sidebar></Sidebar>
                </div>
                {
                    wishlist.length === 0 ?
                        <div className="md:p-5">
                            <h1 className="mb-3">You have not add any products on your wishlist yet!</h1>
                            <Link to='/products'><Button title="Browse Here">
                            </Button></Link>
                        </div>
                        :
                        <div className="grid lg:grid-cols-3 grid-cols-2 gap-5 md:w-[70%] w-full text-sm">
                            {
                                wishlist.map(item => <div key={item._id} className='flex border items-center hover:border-[--secondary-color] transition-all duration-300 relative lg:h-32 h-44'>
                                    <Link to={`/productDetail/${item.jewelryId}`}><img src={item.image} alt="" className='md:w-32 md:h-28 h-24 w-24 md:object-cover transition-transform hover:scale-110 md:p-3 p-1' />
                                    </Link>
                                    <RxCross2 onClick={() => handleDelete(item._id)} className="absolute top-0 right-0 hover:text-[--secondary-color]" />
                                    <div className='space-y-1 p-2'>
                                        <p className='font-medium'>{item.name}</p>
                                        <div className='flex items-center text-sm text-[--secondary-color]'>
                                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                        </div>
                                        <p className="font-sans text-[--secondary-color]">${item.price}</p>
                                        <p onClick={() => handleCart(item)} className="hover:text-[--secondary-color] cursor-pointer flex items-center gap-2">Add to Cart <FaArrowRightLong /></p>
                                    </div>
                                </div>
                                )
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default Wishlist;