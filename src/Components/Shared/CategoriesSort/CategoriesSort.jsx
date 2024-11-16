import { Link } from "react-router-dom";


const CategoriesSort = () => {
    return (
        <div className="border">
            <h1 className="bg-[--secondary-color] w-full h-8 font-medium py-1 px-2 text-white">Sort By Categories</h1>
            <div className='p-4'>
                <Link to="/product-category/Rings">
                    <p className="hover:underline hover:text-[--secondary-color] pb-1">Rings</p>
                </Link>

                <Link to="/product-category/Necklace">
                    <p className="hover:underline hover:text-[--secondary-color] pb-1">Necklace</p>
                </Link>

                <Link to="/product-category/Earrings">
                    <p className="hover:underline hover:text-[--secondary-color] pb-1">Earrings</p>
                </Link>

                <Link to="/product-category/Pendant">
                    <p className="hover:underline hover:text-[--secondary-color] pb-1">Pendant</p>
                </Link>

                <Link to="/product-category/Bracelet">
                    <p className="hover:underline hover:text-[--secondary-color] pb-1">Bracelet</p>
                </Link>

                <Link to="/product-category/Choker">
                    <p className="hover:underline hover:text-[--secondary-color] pb-1">Choker</p>
                </Link>

                <Link to="/product-category/Brooches">
                    <p className="hover:underline hover:text-[--secondary-color] pb-1">Brooches</p>
                </Link>

                <Link to="/product-category/watch">
                    <p className="hover:underline hover:text-[--secondary-color] pb-1">Watch</p>
                </Link>
            </div>
        </div>
    );
};

export default CategoriesSort;