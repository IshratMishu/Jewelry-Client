import PropTypes from 'prop-types';
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Button = ({ title }) => {

    return <button className="relative overflow-hidden border border-[var(--secondary-color)] px-8 py-2 before:absolute before:inset-0 before:z-10 before:block before:translate-x-full before:rounded-s-full before:bg-[var(--secondary-color)] before:duration-300 after:absolute after:inset-0 after:z-10 after:block after:-translate-x-full after:rounded-e-full after:bg-[var(--secondary-color)] after:duration-300 hover:text-white before:hover:translate-x-0 after:hover:translate-x-0 group flex items-center">
        <span className='translate-x-2 transition-all duration-300 group-hover:translate-x-0 z-20'>{title}</span>
        <MdOutlineArrowRightAlt className='opacity-0 translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2 text-2xl z-20' />
    </button>
};

export default Button;

Button.propTypes = {
    title: PropTypes.string.isRequired
}
