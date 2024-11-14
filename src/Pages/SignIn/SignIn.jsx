import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";


const SignIn = () => {
    return (
        <div className="mt-10">
            <div className="flex w-full flex-col justify-center py-10">
                <h2 className="pb-6 text-center text-2xl font-medium">Sign In</h2>
                <p className="text-center pb-6">Please enter your e-mail and password:</p>
                <form className="flex w-full flex-col items-center justify-center gap-4">
                    <input
                        className="border border-[--secondary-color] bg-transparent py-2 pl-4 focus:outline-none w-2/5"
                        type="email"
                        placeholder="Email"
                        name="email"
                    />
                    <input
                        className="w-2/5 border border-[--secondary-color] bg-transparent py-2 pl-4 focus:outline-none"
                        type="password"
                        placeholder="Password"
                        name="password"
                    />
                    <button className="border border-[--secondary-color] md:px-8 px-4 py-2 bg-[--secondary-color] text-white hover:bg-transparent hover:text-[var(--secondary-color)] w-2/5 mt-3"><span className="flex items-center gap-2 justify-center">SIGN IN<MdOutlineArrowRightAlt /></span></button>
                    <p className="text-[14px] text-gray-400 flex gap-1">
                        Do not have an account ? <Link to='/signUp'><p className="text-[--secondary-color] hover:underline">Create one</p></Link>
                    </p>
                </form>
                {/* divider  */}
                <div className="my-8 flex items-center px-8 w-2/5 mx-auto">
                    <hr className="flex-1 border-[--secondary-color]" />
                    <div className="mx-4 text-[--secondary-color]">OR</div>
                    <hr className="flex-1 border-[--secondary-color]" />
                </div>
                {/* sign with google */}
                <button className="group mx-auto flex h-[50px] w-fit items-center overflow-hidden shadow-md outline-none ring-1 ring-[--secondary-color]">
                    <div className="relative z-20 flex h-full items-center bg-[--secondary-color] px-4 text-lg text-white duration-300 group-hover:bg-transparent group-hover:text-[--secondary-color]">
                        Signin with
                    </div>
                    <span className="flex h-full items-center px-4 text-xl font-bold text-[--secondary-color] duration-300 group-hover:bg-[--secondary-color] group-hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-5 fill-current"><path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path></svg>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default SignIn;