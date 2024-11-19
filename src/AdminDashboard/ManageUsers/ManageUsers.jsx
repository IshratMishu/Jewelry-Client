import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";


const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data
        }
    });

    //make admin
    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-center",
                        title: `${user.name} is an Admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    // Make user a Seller
    const handleMakeSeller = user => {
        axiosSecure.patch(`/users/make-seller/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-center",
                        title: `${user.name} is a Seller now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    };

    // Downgrade user to normal
    const handleDowngradeToUser = user => {
        axiosSecure.patch(`/users/downgrade-to-user/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-center",
                        title: `${user.name} has been downgraded to a normal user`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    };


    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#B18B22",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "This user has been deleted.",
                                icon: "success",
                                confirmButtonColor: "#B18B22"
                            });
                            refetch();
                        }
                    })
            }
        });

    }


    return (
        <div>
            <h1 className="font-sans pb-5">Total Users: {users.length}</h1>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="bg-[--primary-color]">
                            <th className="px-6 py-2 text-start text-sm"></th>
                            <th className="px-6 py-2 text-start text-sm">Name</th>
                            <th className="px-6 py-2 text-start text-sm">Email</th>
                            <th className="px-6 py-2 text-start text-sm">Role</th>
                            <th className="px-6 py-2 text-start text-sm">Change Role</th>
                            <th className="px-6 py-2 text-start text-sm">Action</th>
                        </tr>
                    </thead>
                    <tbody className="w-full">
                        {
                            users.map((user, index) => <tr key={user._id} className="border-b">
                                <th className="px-6 py-4 text-start text-sm">{index + 1}</th>
                                <td className="px-6 py-4 text-start text-sm">{user.name}</td>
                                <td className="px-6 py-4 text-start text-sm">{user.email}</td>
                                <td className="px-6 py-4 text-start text-sm">{user.role}</td>
                                <td className="px-6 py-4 text-center text-xs font-semibold flex flex-col gap-2">
                                    <span onClick={() => handleMakeAdmin(user)} className="bg-[--primary-color] cursor-pointer">Make Admin</span>
                                    <span onClick={() => handleMakeSeller(user)} className="bg-[--primary-color] cursor-pointer px-1">Make Seller</span>
                                    <span onClick={() => handleDowngradeToUser(user)} className="bg-[--primary-color] cursor-pointer px-1">Make User</span>
                                </td>



                                <td className="px-6 py-4 text-start text-sm"><MdDeleteForever className="text-xl text-[--secondary-color]" onClick={() => handleDeleteUser(user)} /></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;