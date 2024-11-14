import { useState } from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";


const SignUp = () => {
    const [showName, setShowName] = useState({});

    return (
        <div className="mt-10">
            <div className="flex w-full flex-col justify-center py-10">
                <h2 className="pb-6 text-center text-2xl font-medium">Sign Up</h2>
                <p className="text-center pb-6">Please fill in the information below:</p>
                <form className="flex w-full flex-col items-center justify-center gap-4">
                    <input
                        className="border border-[--secondary-color] bg-transparent py-2 pl-4 focus:outline-none w-2/5"
                        type="name"
                        placeholder="Username"
                        name="name"
                    />
                    <input
                        className="border border-[--secondary-color] bg-transparent py-2 pl-4 focus:outline-none w-2/5"
                        type="email"
                        placeholder="Email"
                        name="email"
                    />

                    <div className="w-2/5">
                        <label htmlFor="choose" className="flex">
                            <div className="w-fit whitespace-nowrap bg-[--secondary-color] px-4 py-2 text-white">Upload Your Photo</div>
                            <div className="flex w-full items-center border border-[--secondary-color] px-2 ">{showName.name ? showName.name : 'No File Chosen'}</div>
                        </label>
                        <input
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    const imageFile = e.target.files[0];
                                    setShowName(imageFile);
                                }
                            }} className="hidden" type="file" name="" id="choose" />
                    </div>

                    <div className="w-2/5 border border-[--secondary-color] py-2 pl-4 flex justify-between">
                        <span>Select Your Roll</span>
                        <div className="flex gap-5 pr-4">
                            <label className="cursor-pointer flex">
                                <input type="radio" name="roll" id="" />
                                <span>User</span>
                            </label>
                            <label className="cursor-pointer flex">
                                <input type="radio" name="roll" id="" />
                                <span>Seller</span>
                            </label>
                        </div>
                    </div>

                    <input
                        className="w-2/5 border border-[--secondary-color] bg-transparent py-2 pl-4 focus:outline-none"
                        type="password"
                        placeholder="Password"
                        name="password"
                    />
                    <button className="border border-[--secondary-color] md:px-8 px-4 py-2 bg-[--secondary-color] text-white hover:bg-transparent hover:text-[var(--secondary-color)] w-2/5 mt-3"><span className="flex items-center gap-2 justify-center">SIGN UP<MdOutlineArrowRightAlt /></span></button>
                    <p className="text-[14px] text-gray-400 flex gap-1">
                        Already have an account ? <Link to='/signIn'><p className="text-[--secondary-color] hover:underline">Sign in here</p></Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;