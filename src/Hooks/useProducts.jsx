import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useProducts = () => {
    const axiosPublic = useAxiosPublic();
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     fetch(`https://jewelry-shop-server-five.vercel.app/jewelries`)
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])

    // return [products]

    const {data: products = [], isPending: loading, refetch} = useQuery({
        queryKey: ['products'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/jewelries');
            return res.data;
        }
    })


    return [products, loading, refetch]
};

export default useProducts;