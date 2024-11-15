
import img1 from '../../../assets/blog1.png';
import img2 from '../../../assets/blog2.png';
import img3 from '../../../assets/blog3.png';

const Blog = () => {
    return (
        <div className='mt-28'>
            <p className='text-center font-medium text-2xl'>Latest News</p>
            <p className='text-center pb-2 text-[--secondary-color]'>──────</p>
            <div className="flex items-center gap-10 justify-center cursor-pointer">
                <div className='space-y-2'>
                    <div className='group h-44 w-80 relative'>
                        <img src={img1} alt="" className='h-full w-full object-cover' />
                        <div className='bg-[--primary-color] opacity-0 group-hover:opacity-35 transition-all duration-300 absolute top-0 left-0 w-full h-full'></div>
                    </div>
                    <p className='text-xs'>November 2, 2024 - by Ram M - MoiceJewelry</p>
                    <h1 className='text-lg font-medium hover:text-[--secondary-color]'>Diamond for casual wear</h1>
                    <p className='text-sm underline text-[--secondary-color]'>Read More</p>
                </div>
                <div className='space-y-2'>
                    <div className='group h-44 w-80 relative'>
                        <img src={img2} alt="" className='h-full w-full object-cover' />
                        <div className='bg-[--primary-color] opacity-0 group-hover:opacity-35 transition-all duration-300 absolute top-0 left-0 w-full h-full'></div>
                    </div>
                    <p className='text-xs'>April 3, 2024 - by Lio - MoiceJewelry</p>
                    <h1 className='text-lg font-medium hover:text-[--secondary-color]'>Diamond for anniversary</h1>
                    <p className='text-sm underline text-[--secondary-color]'>Read More</p>
                </div>
                <div className='space-y-2'>
                    <div className='group h-44 w-80 relative'>
                        <img src={img3} alt="" className='h-full w-full object-cover' />
                        <div className='bg-[--primary-color] opacity-0 group-hover:opacity-35 transition-all duration-300 absolute top-0 left-0 w-full h-full'></div>
                    </div>
                    <p className='text-xs'>April 2, 2024 - by Misa - MoiceJewelry</p>
                    <h1 className='text-lg font-medium hover:text-[--secondary-color]'>Pendants for girls</h1>
                    <p className='text-sm underline text-[--secondary-color]'>Read More</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;