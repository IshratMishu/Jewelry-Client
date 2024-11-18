import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useWishlist = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    //tanStack query
    const { refetch, data: wishlist = [] } = useQuery({
        queryKey: ['wishlist', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/wishlist?email=${user.email}`)
            return res.data
        }
    })

    return [wishlist, refetch]
};

export default useWishlist;