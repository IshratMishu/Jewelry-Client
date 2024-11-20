import img1 from '../../../assets/mirror.png'
import img2 from '../../../assets/jewelry3.png'
import { Link } from 'react-router-dom';

const FooterLast = () => {
    return (
        <div className="bg-[--primary-color] h-72 mt-28">
            <div className="flex items-center justify-between">
                <div>
                    <img src={img1} alt="" className="h-72" />
                </div>
                <div className="text-center ">
                    <h1 className="text-2xl font-semibold pb-2">Become a Seller</h1>
                    <p>Do you want to sell your products?</p>
                   <Link to='/signUp'><button className="bg-[--secondary-color] px-6 py-1 text-white font-medium hover:bg-transparent hover:text-black border border-[--secondary-color] mt-6">Join Us</button></Link>
                </div>

                <div>
                    <img src={img2} alt="" className="h-72" />
                </div>
            </div>
        </div>
    );
};

export default FooterLast;