import { MdOutlineArrowRightAlt } from 'react-icons/md';
import error from '../../assets/404.png';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const ErrorPage = () => {
    return (
        <div className='text-center'>
             <Helmet>
                <title>Error - Moice Jewelry</title>
            </Helmet>
            <div className='flex items-center justify-center'>
                <h1 className='md:text-[10rem] text-9xl font-bold text-[--secondary-color]'>4</h1>
                <img src={error} alt="ring" className='md:w-36 w-24' />
                <h1 className='md:text-[10rem] text-9xl font-bold text-[--secondary-color]'>4</h1>
            </div>
            <h1 className='text-4xl font-medium'>Oops! That page can’t be found.</h1>
            <p className='text-[--secondary-color]'>────────</p>
            <p className='text-xs'>We’re really sorry but we can’t seem to find the page  <br /> you were looking for.</p>
            <Link to='/'><button className="border border-[var(--secondary-color)] md:px-8 px-4 py-2 bg-[var(--secondary-color)] text-white hover:bg-[--third-color] hover:text-[var(--secondary-color)] flex items-center gap-2 mx-auto mt-5">BACK TO THE HOMEPAGE<MdOutlineArrowRightAlt /></button></Link>
        </div>
    );
};

export default ErrorPage;