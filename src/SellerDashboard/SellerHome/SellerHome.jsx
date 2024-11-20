import useAuth from "../../Hooks/useAuth";


const SellerHome = () => {
    const {user} = useAuth();
    return (
        <div className="p-8">
            <h1 className="text-2xl font-semibold">Hello - {user.displayName}
            👋</h1>
            <p>Good to see you here! Lets Start Selling.....</p>
        </div>
    );
};

export default SellerHome;