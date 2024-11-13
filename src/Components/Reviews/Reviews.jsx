import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../assets/jewelry3.png';
import img2 from '../../assets/jewelry1.png';
import img3 from '../../assets/rev.png';
import img4 from '../../assets/rev1.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

// import required modules
import { Grid, Pagination, Navigation } from 'swiper/modules';
import { FaStar } from "react-icons/fa";

const Reviews = () => {
    return (
        <div className='mt-20 bg-[--primary-color] p-10'>
            <h1 className='text-3xl font-medium text-center'>Clients Testimonials</h1>
            <p className='text-center pb-10'>──────</p>
            <Swiper
                slidesPerView={3}
                navigation={{
                    clickable: true,
                }}
                grid={{
                    rows: 1,  
                }}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Grid, Navigation, Pagination]}
                className="mySwiper h-64"
            >
                <SwiperSlide>
                    <div className='bg-[--third-color] px-6 py-4 space-y-3 flex flex-col'>
                       <p className='flex-grow'>The necklace I purchased is absolutely stunning! The craftsmanship is impeccable!</p>
                        <div className='flex items-center gap-4'>
                            <img src={img1} alt="" className='w-12 h-12 object-cover rounded-full' />
                            <div>
                                <p>Emily R.</p>
                                <div className='flex items-center text-sm text-[--secondary-color]'>
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </div>
                            </div>
                       </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='bg-[--third-color] px-6 py-4 space-y-3 flex flex-col'>
                       <p className='flex-grow'>My custom engagement ring exceeded all my expectations. My fiancée couldn’t be happier.</p>
                        <div className='flex items-center gap-4'>
                            <img src={img2} alt="" className='w-12 h-12 object-cover rounded-full' />
                            <div>
                                <p>Risan L.</p>
                                <div className='flex items-center text-sm text-[--secondary-color]'>
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </div>
                        </div>
                       </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='bg-[--third-color] px-6 py-4 space-y-3 flex flex-col'>
                    <p className='flex-grow'>I adore the vintage bracelet I got from this shop. It’s beautifully designed and feels like a unique piece of history.</p>
                        <div className='flex items-center gap-4'>
                            <img src={img3} alt="" className='w-12 h-12 object-cover rounded-full' />
                            <div>
                                <p>Sarah M.</p>
                                <div className='flex items-center text-sm text-[--secondary-color]'>
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                            </div>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='bg-[--third-color] px-6 py-4 space-y-3'>
                        <p>These diamond stud earrings are perfect! They sparkle brilliantly and are just the right size.</p>
                        <div className='flex items-center gap-4'>
                            <img src={img4} alt="" className='w-12 h-12 object-cover rounded-full' />
                            <div>
                                <p>Lisa</p>
                                <div className='flex items-center text-sm text-[--secondary-color]'>
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='bg-[--third-color] px-6 py-4 space-y-3'>
                        <p>The watch I bought is both stylish and functional. It has a classic design that suits any occasion. Excellent quality!</p>
                        <div className='flex items-center gap-4'>
                            <img src={img2} alt="" className='w-12 h-12 object-cover rounded-full' />
                            <div>
                                <p>Milan</p>
                                <div className='flex items-center text-sm text-[--secondary-color]'>
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Reviews;