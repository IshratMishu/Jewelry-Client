import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const ManageJewelries = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const onSubmit = async (data) => {

        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const jewelryItem = {
                name: data.name,
                image: res.data.data.display_url,
                price: data.price,
                category: data.category,
                brand: data.brand,
                availability: data.availability,
                description: data.description,
                return_policy: data.return_policy,
                shipping: data.shipping,
                sellerEmail: user?.email
            }

            const menuRes = await axiosSecure.post('/jewelries', jewelryItem);
            if (menuRes.data.insertedId) {
                reset();
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: `${data.name} is added.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    };



    return (
        <div >
            <h1 className="text-xl pb-5">Add your product...</h1>

            <form className="space-y-6 border p-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2 text-sm">
                        <label className="text-sm font-medium">
                            Product Name
                        </label>
                        <input
                            className="flex h-10 w-full border px-3 py-2 bg-transparent focus-visible:outline-none"
                            placeholder="product name"
                            name="name"
                            type="text"
                            {...register('name', { required: true })}
                        />
                    </div>
                    <div className="space-y-2 text-sm">
                        <label className="text-sm font-medium">
                            Category
                        </label>
                        <select
                            className="focus:outline-none h-10 px-3 py-2 w-full border bg-transparent" {...register('category', { required: true })}>
                            <option disabled>Select a category</option>
                            <option value="Rings">Rings</option>
                            <option value="Necklace">Necklace</option>
                            <option value="Earrings">Earrings</option>
                            <option value="Choker">Choker</option>
                            <option value="Bracelet">Bracelet</option>
                            <option value="Pendant">Pendant</option>
                        </select>
                    </div>
                </div>


                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2 text-sm">
                        <label className="text-sm font-medium" >
                            Price
                        </label>
                        <input
                            className="flex bg-transparent h-10 w-full border px-3 py-2 focus-visible:outline-none"
                            placeholder="price"
                            name="price"
                            type="number"
                            {...register('price', { required: true })}
                        />
                    </div>
                    <div className="space-y-2 text-sm">
                        <label className="text-sm font-medium">
                            Image
                        </label>
                        <input type="file" className="border flex bg-transparent h-10 px-3 py-2 focus:outline-none w-full" {...register('image', { required: true })} />
                    </div>
                </div>


                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2 text-sm">
                        <label className="text-sm font-medium">
                            Brand
                        </label>
                        <input
                            className="flex h-10 w-full border px-3 py-2 bg-transparent focus-visible:outline-none"
                            placeholder="brand name"
                            name="brand"
                            type="text"
                            {...register('brand', { required: true })}
                        />
                    </div>
                    <div className="space-y-2 text-sm">
                        <label className="text-sm font-medium">
                            Availability
                        </label>
                        <select
                            className="focus:outline-none h-10 px-3 py-2 w-full border bg-transparent" {...register('availability', { required: true })}>
                            <option value="In stock!">In stock!</option>
                            <option value="Stock out!">Stock out!</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-2 text-sm">
                    <label className="block font-medium" >
                        Description
                    </label>
                    <textarea
                        className="min-h-[80px] w-full border px-3 py-2 focus:outline-none bg-transparent"
                        placeholder="write your product description"
                        name="description"
                        {...register('description', { required: true })}
                    />
                </div>

                <div className="space-y-2 text-sm">
                    <label className="block font-medium" >
                        Return Policy
                    </label>
                    <textarea
                        className="min-h-[80px] w-full border px-3 py-2 focus:outline-none bg-transparent"
                        placeholder="about return policy"
                        name="return_policy"
                        {...register('return_policy', { required: true })}
                    />
                </div>


                <div className="space-y-2 text-sm">
                    <label className="block font-medium" >
                        Shipping
                    </label>
                    <textarea
                        className="min-h-[80px] w-full border px-3 py-2 focus:outline-none bg-transparent"
                        placeholder="shipping details"
                        name="shipping"
                        {...register('shipping', { required: true })}
                    />
                </div>

                <div className="space-y-2 text-sm">
                    <label className="block font-medium" >
                        Your Email
                    </label>
                    <input
                        className="flex bg-transparent h-10 w-full border px-3 py-2 focus-visible:outline-none"
                        defaultValue={user?.email}
                        disabled
                    />
                </div>

                <button className="px-4 py-2 text-white w-full bg-[--secondary-color] hover:bg-transparent hover:text-black border border-[--secondary-color] font-semibold">Add</button>
            </form>

        </div>
    );
};

export default ManageJewelries;