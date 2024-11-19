
import { useEffect, useRef, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';

const Dropdown = () => {
    const { logOut, user } = useAuth();
    const [open, setOpen] = useState(false);
    const dropDownRef = useRef(null);


    useEffect(() => {
        const close = (e) => {
            if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
                setOpen(false)
            }
        };
        document.addEventListener('mousedown', close);
        return () => {
            document.removeEventListener('mousedown', close)
        }
    }, []);


    return (
        <div ref={dropDownRef} className="relative text-black cursor-pointer">
            <button onClick={() => setOpen((prev) => !prev)}>
                <img className="w-7 h-7 border border-white rounded-full object-cover duration-300 hover:scale-x-[98%] hover:opacity-80" src={user?.photoURL ? user.photoURL : 'https://i.ibb.co/31dsFpW/icon-7797704-640.webp'} alt="Photo" />
            </button>
            <ul className={`${open ? 'visible duration-300' : 'invisible'} absolute -right-5 top-12 w-48 bg-[--third-color] shadow-xl space-y-2 p-4 font-medium`}>
                <li className='hover:text-[--secondary-color]'>{user?.displayName || 'User'}</li>
                <li className='hover:text-[--secondary-color]'><Link to='/my-account'>My Account</Link></li>
                <li className='hover:text-[--secondary-color]'><Link to='/my-account'>Dashboard</Link></li>
   
                <li onClick={logOut} className='hover:text-[--secondary-color]'>Logout</li>
            </ul>
        </div>
    );
};

export default Dropdown;