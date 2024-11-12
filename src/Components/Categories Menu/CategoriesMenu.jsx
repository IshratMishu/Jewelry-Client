import { TfiAngleRight } from "react-icons/tfi";

const CategoriesMenu = () => {
    return (
        <div className="w-64 h-full bg-[--primary-color]">
            <ul className="space-y-1 p-2">
                <li className="flex items-center justify-between font-medium hover:text-[--secondary-color] hover:bg-[#FAFAF4] px-4 py-2">Bracelet<TfiAngleRight /></li>
                <li className="flex items-center justify-between font-medium hover:text-[--secondary-color] hover:bg-[#FAFAF4] px-4 py-2">Rings<TfiAngleRight /></li>
                <li className="flex items-center justify-between font-medium hover:text-[--secondary-color] hover:bg-[#FAFAF4] px-4 py-2">Chain<TfiAngleRight /></li>
                <li className="flex items-center justify-between font-medium hover:text-[--secondary-color] hover:bg-[#FAFAF4] px-4 py-2">Choker<TfiAngleRight /></li>
                <li className="flex items-center justify-between font-medium hover:text-[--secondary-color] hover:bg-[#FAFAF4] px-4 py-2">Cufflinks<TfiAngleRight /></li>
                <li className="flex items-center justify-between font-medium hover:text-[--secondary-color] hover:bg-[#FAFAF4] px-4 py-2">Earrings<TfiAngleRight /></li>
                <li className="flex items-center justify-between font-medium hover:text-[--secondary-color] hover:bg-[#FAFAF4] px-4 py-2">Gift Set<TfiAngleRight /></li>
                <li className="flex items-center justify-between font-medium hover:text-[--secondary-color] hover:bg-[#FAFAF4] px-4 py-2">Necklace<TfiAngleRight /></li>
                <li className="flex items-center justify-between font-medium hover:text-[--secondary-color] hover:bg-[#FAFAF4] px-4 py-2">Gemstone<TfiAngleRight /></li>
            </ul>
        </div>
    );
};

export default CategoriesMenu;