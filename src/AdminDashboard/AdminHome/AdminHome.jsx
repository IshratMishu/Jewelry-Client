import useAuth from "../../Hooks/useAuth";


const AdminHome = () => {
    const {user} = useAuth();
    return (
        <div className="p-8">
            <h1 className="text-2xl font-semibold">Hello Admin- {user.displayName}
            👋</h1>
            <p>Good to see you here again!</p>
        </div>
    );
};

export default AdminHome;