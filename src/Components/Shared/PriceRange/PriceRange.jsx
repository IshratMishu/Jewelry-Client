import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { useState } from "react";
import './range.css'

const PriceRange = () => {
    const [value, setValue] = useState([100, 1000]);

    return (
        <div className="border h-28">
            <h1 className="bg-[--secondary-color] w-full h-8 font-medium py-1 px-2 text-white mb-2">Sort By Price</h1>
            <div className='p-4 space-y-2'>
                <RangeSlider value={value} onInput={setValue} min={100} max={1000} step={5}
                />
                <div className="flex justify-between font-sans text-sm">
                    <span>${value[0]}</span>
                    <span>${value[1]}</span>
                </div>
            </div>
        </div>
    );
};

export default PriceRange;