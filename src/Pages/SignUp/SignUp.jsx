import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { IoEye, IoEyeOff } from "react-icons/io5";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { imgbb_api } from "../../Utilities/config";
import toast from "react-hot-toast";



const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { createUser, updateUserProfile } = useAuth();
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const onSubmit = async (data) => {
        // upload image  in imgbb
        const imageFile = { image: data.photo[0] };
        const imageRes = await axiosPublic.post(imgbb_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            },
        });

        if (!/(?=.*[A-Z])(?=.*[a-z]).{6,}/.test(data.password)) {
            setPasswordError('Password must contain at least one uppercase letter (A-Z), one lowercase letter (a-z), and be at least 6 characters long.');
            return;
        } else {
            toast.success("Sign Up Success");
        }


        //create user and update profile
        createUser(data.email, data.password)
            .then(() => {
                updateUserProfile(data.name, imageRes.data.data.display_url)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            photo: imageRes.data.data.display_url,
                            role: data.role,
                        };

                        axiosPublic.post("/users", userInfo).then((res) => {
                            if (res.data?.insertedId) {
                                toast.success("Sign Up Success");
                                navigate(from);
                            }
                        });
                    });
            });
    };



    return (
        <div className="mt-10">
            <Helmet>
                <title>Sign Up - Moice Jewelry</title>
            </Helmet>
            <div className="flex w-full flex-col justify-center py-10">
                <h2 className="pb-6 text-center text-2xl font-medium">Sign Up</h2>
                <p className="text-center pb-6">Please fill in the information below:</p>
                <form className="flex w-full flex-col items-center justify-center gap-4" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="border border-[--secondary-color] bg-transparent py-2 pl-4 focus:outline-none w-2/5"
                        type="name"
                        placeholder="Username"
                        name="name"
                        {...register("name", { required: true })}
                    />
                    {errors.name && <span className="text-red-700">This field is required</span>}

                    <input
                        className="border border-[--secondary-color] bg-transparent py-2 pl-4 focus:outline-none w-2/5"
                        type="email"
                        placeholder="Email"
                        name="email"
                        {...register("email", { required: true })}
                    />
                    {errors.email && <span className="text-red-700">This field is required</span>}

                    <div className="w-2/5">
                        <input type="file" name="" {...register("photo", { required: true })} className="border border-[--secondary-color] w-full py-2 pl-4" />
                    </div>
                    {errors.photo && <span className="text-red-700">This field is required</span>}


                    <div className="w-2/5 border border-[--secondary-color] py-2 pl-4 flex justify-between">
                        <span>Select Your Role</span>
                        <div className="flex gap-5 pr-4">
                            <label className="cursor-pointer flex">
                                <input type="radio" name="role" value="User" {...register("role", { required: true })} />
                                <span>User</span>
                            </label>

                            <label className="cursor-pointer flex">
                                <input type="radio" name="role" value="Seller" {...register("role", { required: true })} />
                                <span>Seller</span>
                            </label>
                        </div>
                    </div>
                    {errors.roll && <span className="text-red-700">This field is required</span>}

                    <div className="relative w-2/5 border border-[--secondary-color]">
                        <input
                            className="bg-transparent py-2 pl-4 focus:outline-none"
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            name="password"
                            {...register("password", { required: true })}
                        />
                        <span className="absolute right-5 top-3" onClick={() => { setShowPassword(!showPassword) }}>
                            {
                                showPassword ? <IoEye /> : <IoEyeOff />
                            }
                        </span>
                        {errors.password && <span className="text-red-700">This field is required</span>}
                        {
                            passwordError && <small className="text-red-700">{passwordError}</small>
                        }
                    </div>


                    <button className="border border-[--secondary-color] md:px-8 px-4 py-2 bg-[--secondary-color] text-white hover:bg-transparent hover:text-[var(--secondary-color)] w-2/5 mt-3"><span className="flex items-center gap-2 justify-center">SIGN UP<MdOutlineArrowRightAlt /></span></button>
                    <h1 className="text-[14px] text-gray-400 flex gap-1">
                        Already have an account ? <Link to='/signIn'><p className="text-[--secondary-color] hover:underline">Sign in here</p></Link>
                    </h1>
                </form>
            </div>
        </div>
    );
};

export default SignUp;