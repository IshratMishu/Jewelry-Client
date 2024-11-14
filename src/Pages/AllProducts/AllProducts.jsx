import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";


const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/public/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="mt-20 grid grid-cols-3 gap-5">
            {
                products.map(product => <SingleProduct key={product} product={product}></SingleProduct>)
            }
        </div>
    );
};

export default AllProducts;