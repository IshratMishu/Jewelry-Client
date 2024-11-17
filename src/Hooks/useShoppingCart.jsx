import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useCart from "./useCart";


const useShoppingCart = () => {
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const navigate = useNavigate();
const [, refetch] = useCart();

    const handleCart = (product) => {
        const { _id, name, image, price } = product;
        if (user && user.email) {
            const cartsItem = { jewelryId: _id, name, image, price, email: user.email }
            axiosSecure.post('/carts', cartsItem)
                .then(res => {
                    if (res.data.insertedId) {
                        toast.success('Successfully Added to Cart')
                    }
                    //refetch cart to update the cart count
                    refetch();
                })
        }
        else {
            Swal.fire({
                text: "You have to login before Add to Cart!",
                confirmButtonColor: "#B18B22",
                confirmButtonText: "Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/signIn', { state: { from: location } })
                }
            })
        }
    }




    return { handleCart }
};

export default useShoppingCart;