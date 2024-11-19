import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";
import PropTypes from 'prop-types';


const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return (
            <div className="relative w-20 h-20 flex items-center justify-center mx-auto mt-36">
                <div className="w-10 h-10 animate-[ping_2s_linear_infinite] border-2 rounded-full border-[--secondary-color]"></div>
                <div className="w-10 h-10 animate-[ping_2s_linear_3s_infinite] border-2 rounded-full border-[--secondary-color] absolute"></div>
            </div>
        );
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>

};

export default AdminRoute;

AdminRoute.propTypes = {
    children: PropTypes.node
}