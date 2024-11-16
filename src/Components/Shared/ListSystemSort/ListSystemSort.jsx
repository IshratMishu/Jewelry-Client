import { SlGrid } from "react-icons/sl";
import { TfiViewList } from "react-icons/tfi";
import { Link } from "react-router-dom";

const ListSystemSort = () => {
    return (
        <div className="flex items-center gap-8 mb-2">
        <SlGrid className="hover:text-[--secondary-color]"/>
        <Link to='/list'><TfiViewList className="hover:text-[--secondary-color]"/></Link>
    </div>
    );
};

export default ListSystemSort;