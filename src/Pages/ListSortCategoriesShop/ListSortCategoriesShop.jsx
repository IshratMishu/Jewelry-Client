import useProducts from "../../Hooks/useProducts";
import TabProductCards from "../Sections/TabProductCards/TabProductCards";


const ListSortCategoriesShop = () => {

    const [products] = useProducts();

    return (
        <div className="mt-4 grid grid-cols-3 gap-5">
            {
                products.map(product => <TabProductCards key={product._id} product={product}></TabProductCards>
                )
            }
        </div>
    );
};

export default ListSortCategoriesShop;