import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateProduct = () => {
    const { name, category, availability, price, _id } = useLoaderData();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const jewelryItem = {
                name: data.name,
                category: data.category,
                price: data.price,
                availability: data.availability,
                image: res.data.data.display_url
            }
            // 
            const jewelryRes = await axiosSecure.patch(`/jewelries/${_id}`, jewelryItem);
            if (jewelryRes.data.modifiedCount > 0) {
                navigate('/dashboard/manageProducts');
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: `${data.name} is updated.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    };

    return (
        <div>
            <div>
                <h1 className="font-semibold pb-5 text-lg">Update <span className="text-sm text-[--secondary-color]">{name}</span></h1>
                <form className="w-full space-y-6 border p-8" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex w-full items-center gap-10">
                        <div className="space-y-2 text-sm w-1/2">
                            <label className="block font-medium">
                                Product Name
                            </label>
                            <input
                                className="border border-[--secondary-color] bg-transparent py-2 pl-4 focus:outline-none w-full"
                                type="name"
                                defaultValue={name}
                                {...register("name", { required: true })}
                            />
                        </div>

                        <div className="space-y-2 text-sm w-1/2">
                            <label className="block font-medium">
                                Category
                            </label>
                            <select defaultValue={category} {...register('category', { required: true })}
                                className="focus:outline-none py-2 pl-4 w-full border border-[--secondary-color] bg-transparent">
                                <option disabled value="default">Select a category</option>
                                <option value="Rings">Rings</option>
                                <option value="Necklace">Necklace</option>
                                <option value="Choker">Choker</option>
                                <option value="Earrings">Earrings</option>
                                <option value="Pendant">Pendant</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex w-full items-center gap-10">
                    <div className="space-y-2 text-sm w-1/2">
                        <label className="block font-medium">
                            Price
                        </label>
                        <input
                            className="border border-[--secondary-color] bg-transparent py-2 pl-4 focus:outline-none w-full"
                            type="text"
                            defaultValue={price}
                            {...register("price", { required: true })}
                        />
                    </div>

                    <div className="space-y-2 text-sm w-1/2">
                        <label className="block font-medium">
                            Availability
                        </label>
                        <input
                            className="border border-[--secondary-color] bg-transparent py-2 pl-4 focus:outline-none w-full"
                            type="text"
                            defaultValue={availability}
                            {...register("availability", { required: true })}
                        />
                    </div>
                    </div>


                   <div className="flex justify-center">
                   <div className="space-y-2 text-sm w-1/2">
                        <label className="block font-medium">
                            Upload Image
                        </label>
                        <input {...register('image', { required: true })} type="file" className=" border border-[--secondary-color] bg-transparent py-2 pl-4 focus:outline-none w-full" />
                    </div>
                   </div>

                    <div className="flex justify-center">
                    <button className="bg-[--secondary-color] px-4 py-2 text-white">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;