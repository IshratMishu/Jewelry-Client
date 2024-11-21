import { Helmet } from "react-helmet-async";
import Sidebar from "../DashboardPage/Sidebar";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const EditAccount = () => {
    const { user, updateUserProfile, setReload } = useAuth();
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.displayName || "",
                email: user.email || "",
            });
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Update user's profile information
        updateUserProfile(formData.name)
            .then(() => {
                setReload(true);
                toast.success('Profile Updated Successfully!');
            });
    };

    return (
        <div className="mt-20">
            <Helmet>
                <title>My Account - Moice Jewelry</title>
            </Helmet>
            <h1 className="text-2xl font-medium">MY ACCOUNT</h1>
            <div className="flex mt-8 gap-10">
                <div className="hidden md:block">
                    <Sidebar></Sidebar>
                </div>
                <form className="space-y-5 w-full md:w-[70%] md:pl-10" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                        <label className="text-sm">Name</label>
                        <input
                            name="name"
                            className="flex h-10 w-full border border-black px-3 focus:outline-none bg-[--third-color]"
                            onChange={handleChange}
                            value={formData.name}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm">Address</label>
                        <input
                            name="address"
                            className="flex h-10 w-full border border-black px-3 focus:outline-none bg-[--third-color]"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm">Phone Number</label>
                        <input
                            name="phone"
                            className="flex h-10 w-full border border-black px-3 focus:outline-none bg-[--third-color]"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm">Email</label>
                        <input
                            className="flex h-10 w-full border border-black px-3 focus:outline-none bg-[--third-color]"
                            defaultValue={user?.email}
                            disabled
                        />
                    </div>
                    <button
                        className="border border-[var(--secondary-color)] md:px-8 px-4 py-2 hover:bg-[var(--secondary-color)] hover:text-white bg-transparent text-[var(--secondary-color)] w-full mt-10"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditAccount;
