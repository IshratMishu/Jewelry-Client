import SingleProduct from "./SingleProduct";
import useProducts from "../../Hooks/useProducts";



const AllProducts = () => {
    const [products] = useProducts();

    return (
        <div className="mt-20 grid grid-cols-4 gap-5 px-8">
            {
                products.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>
                )
            }
        </div>
    );
};

export default AllProducts;