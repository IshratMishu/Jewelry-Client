import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const QuantityBox = () => {
    const [inputValue, setInputValue] = useState(1);

    const handlePlus = () => {
        setInputValue(inputValue + 1);
    }

    const handleMinus = () => {
        if (inputValue > 1) {
            setInputValue(inputValue - 1);
        }
    }

    return (
        <div className="flex items-center">
            <button onClick={handleMinus} className="text-[--secondary-color] border border-[--secondary-color] h-8 px-3 w-10"><FaMinus /></button>
            <input value={inputValue} onChange={setInputValue} type="text" name="" className="focus:outline-none text-center border-b border-t border-[--secondary-color] h-8 w-32 bg-transparent text-black font-sans" />
            <button onClick={handlePlus} className="text-[--secondary-color] border border-[--secondary-color] h-8 w-10 px-3"><FaPlus /></button>
        </div>
    );
};

export default QuantityBox;