import SingleProduct from "./SingleProduct";
import useProducts from "../../Hooks/useProducts";
import PriceRange from "../../Components/Shared/PriceRange/PriceRange";
import { Helmet } from "react-helmet-async";
import CategoriesSort from "../../Components/Shared/CategoriesSort/CategoriesSort";
import { SlGrid } from "react-icons/sl";
import { TfiViewList } from "react-icons/tfi";
import { useState } from "react";
import TabProductCards from "../Sections/TabProductCards/TabProductCards";


const AllProducts = () => {
    const [products] = useProducts();
    const [viewMode, setViewMode] = useState('grid');

    return (
        <div className="mt-20 flex gap-10">
            <Helmet>
                <title>Shop - Moice Jewelry</title>
            </Helmet>

            <div className="w-[20%] space-y-5">
                <PriceRange></PriceRange>
                <CategoriesSort></CategoriesSort>
            </div>
            <div className="w-[80%]">

                <div className="flex items-center gap-8 mb-2">
                    <SlGrid className={` ${viewMode === 'grid' ? 'text-[--secondary-color]' : 'hover:text-[--secondary-color]'}`}
                        onClick={() => setViewMode('grid')}
                    />
                    <TfiViewList className={` ${viewMode === 'list' ? 'text-[--secondary-color]' : 'hover:text-[--secondary-color]'}`}
                        onClick={() => setViewMode('list')}
                    />
                </div>

                <hr />

                <div className="mt-4 grid grid-cols-3 gap-5">
                    {viewMode === 'grid'
                        ?
                        products.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>
                        )
                        :
                        products.map(product => <TabProductCards key={product._id} product={product}></TabProductCards>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllProducts;

