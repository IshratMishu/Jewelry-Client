import { useState } from "react";
import { useForm } from "react-hook-form";


const ImageUp = () => {
    const [showName, setShowName] = useState({});
    const {
        register,
    
    } = useForm();
    return (
        <div>
            <label htmlFor="type2-2" className="flex ">
                <div className="w-fit whitespace-nowrap bg-[--secondary-color] px-4 py-2 text-white">Choose File</div>
                <div className="flex w-full items-center border border-[--secondary-color] px-2 ">{showName.name ? showName.name : 'No File Chosen'}</div>
            </label>
            <input
                onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                        const imageFile = e.target.files[0];
                        setShowName(imageFile);
                    }
                }} className="hidden" type="file" name="" id="type2-2" {...register("photo", { required: true })}/>
        </div>
    );
};

export default ImageUp;