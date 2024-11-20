import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import PropTypes from "prop-types";
import useSeller from "../Hooks/useSeller";


const SellerRoute = ({children}) => {
    const { user, loading } = useAuth();
    const [isSeller, isSellerLoading] = useSeller();
    const location = useLocation();

    if (loading || isSellerLoading) {
        return (
            <div className="relative w-20 h-20 flex items-center justify-center mx-auto mt-36">
                <div className="w-10 h-10 animate-[ping_2s_linear_infinite] border-2 rounded-full border-[--secondary-color]"></div>
                <div className="w-10 h-10 animate-[ping_2s_linear_3s_infinite] border-2 rounded-full border-[--secondary-color] absolute"></div>
            </div>
        );
    }

    if (user && isSeller) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>

};

export default SellerRoute;

SellerRoute.propTypes = {
    children: PropTypes.node
}