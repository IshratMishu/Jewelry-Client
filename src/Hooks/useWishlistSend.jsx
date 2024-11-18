import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import useWishlist from "./useWishlist";
import toast from "react-hot-toast";
import Swal from "sweetalert2";


const useWishlistSend = () => {
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [, refetch] = useWishlist();
    const navigate = useNavigate();

    const handleWishlist = (product) => {
        const { _id, name, image, price } = product;
        if (user && user.email) {
            const wishlistItem = { jewelryId: _id, name, image, price, email: user.email }
            axiosSecure.post('/wishlist', wishlistItem)
                .then(res => {
                    if (res.data.insertedId) {
                        toast.success('Successfully Added to wishlist')
                    }
                    //refetch wishlist to update the wishlist count
                    refetch();
                })
        }
        else {
            Swal.fire({
                text: "You have to login before Add to Wishlist!",
                confirmButtonColor: "#B18B22",
                confirmButtonText: "Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/signIn', { state: { from: location } })
                }
            })
        }
    }

    return { handleWishlist}
};

export default useWishlistSend;