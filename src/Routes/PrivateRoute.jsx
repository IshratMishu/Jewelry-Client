import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import useAuth from "../Hooks/useAuth";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className="relative w-20 h-20 flex items-center justify-center mx-auto mt-36">
                <div className="w-10 h-10 animate-[ping_2s_linear_infinite] border-2 rounded-full border-[--secondary-color]"></div>
                <div className="w-10 h-10 animate-[ping_2s_linear_3s_infinite] border-2 rounded-full border-[--secondary-color] absolute"></div>
            </div>
        );
    }

    if (user) {
        return children;
    }

    return <Navigate state={location?.pathname || '/'} to='/login' ></Navigate>;

}

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}