import { MdDeleteForever } from "react-icons/md";
import useProducts from "../../Hooks/useProducts";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { GrUpdate } from "react-icons/gr";
import { Link } from "react-router-dom";



const ManageCategory = () => {
    const [products, , refetch] = useProducts();
    const axiosSecure = useAxiosSecure();

    const handleDeleteProduct = item => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#B18B22",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/jewelries/${item._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "This user has been deleted.",
                                icon: "success",
                                confirmButtonColor: "#B18B22"
                            });
                        }
                    })
            }
        });
    }


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="bg-[--primary-color]">
                            <th className="px-6 py-2 text-start text-sm"></th>
                            <th className="px-6 py-2 text-start text-sm">Product Name</th>
                            <th className="px-6 py-2 text-start text-sm">Image</th>
                            <th className="px-6 py-2 text-start text-sm">Category</th>
                            <th className="px-6 py-2 text-start text-sm">Price</th>
                            <th className="px-6 py-2 text-start text-sm">Update</th>
                            <th className="px-6 py-2 text-start text-sm">Delete</th>
                        </tr>
                    </thead>
                    <tbody className="w-full">
                        {
                            products.map((item, index) => <tr key={item._id} className="border-b">
                                <th className="px-6 py-4 text-start text-sm">{index + 1}</th>
                                <td className="px-6 py-4 text-start text-sm">{item.name}</td>
                                <td className="px-6 py-4 text-start text-sm">
                                    <img src={item.image} alt="" className="h-10 w-10"/>
                                </td>
                                <td className="px-6 py-4 text-start text-sm">{item.category}</td>
                                <td className="px-6 py-4 text-start text-sm font-sans">${item.price}</td>
                                <td className="px-6 py-4 text-center text-sm">
                                        <Link to={`/dashboard/updateProduct/${item._id}`}><GrUpdate  className="text-xl text-[--secondary-color]" /></Link>
                                </td>
                                <td className="px-6 py-4 text-start text-sm"><MdDeleteForever className="text-xl text-[--secondary-color]" onClick={() => handleDeleteProduct(item)} /></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageCategory;
