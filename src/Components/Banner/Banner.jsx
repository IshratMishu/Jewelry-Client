import CategoriesMenu from "../Categories Menu/CategoriesMenu";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import img1 from '../../assets/jewelry4.png';
import img2 from '../../assets/jewelry2.png';
import img3 from '../../assets/jewelry3.png';
import './swiper-slide.css';


const Banner = () => {
    return (
        <div className="lg:flex items-center justify-between lg:mt-24 mt-5">
            <div className="lg:w-1/4">
                <CategoriesMenu></CategoriesMenu>
            </div>
            <div className="lg:w-3/4 w-full">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    effect={'fade'}
                    autoplay={{
                        delay: 5500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[EffectFade, Pagination, Autoplay]}
                    className="mySwiper lg:h-[26rem] h-64"
                >
                    <SwiperSlide>
                        <div className="flex items-center justify-between md:pl-10 pl-4 h-full gradient">
                            <div className="md:space-y-4 space-y-2">
                                <p className="text-xs md:tracking-widest">MODERN CHARM</p>
                                <h1 className="md:font-semibold md:text-2xl text-sm font-medium md:tracking-wider">ELEGANT COLLECTION <br />FOR YOUR LADY</h1>
                                <p className="text-xs md:tracking-wider">More than just an accessory, it’s reflection of your individuality</p>
                                <button className="border border-[--secondary-color] py-1 px-2 text-sm">SHOP NOW</button>
                            </div>
                            <img src={img3} className="object-cover h-full md:w-auto w-44" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-between md:pl-10 pl-4 h-full gradient">
                            <div className="md:space-y-4 space-y-2">
                                <p className="text-xs md:tracking-widest">TIMELESS BEAUTY</p>
                                <h1 className="md:font-semibold md:text-2xl text-sm font-medium md:tracking-wider">JEWELRY SETS <br />GET UP TO 10% OFF</h1>
                                <p className="text-xs md:tracking-wider">Sparkle and Save: Enjoy your stunning jewelry collection at discounted prices</p>
                                <button className="border border-[--secondary-color] py-1 px-2 text-sm">SHOP NOW</button>
                            </div>
                            <img src={img1} className="h-full md:object-cover md:w-auto w-44" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-between md:pl-10 pl-4 h-full gradient">
                            <div className="md:space-y-4 space-y-2">
                                <p className="text-xs md:tracking-widest">NEW COLLECTION</p>
                                <h1 className="md:font-semibold md:text-2xl text-sm font-medium md:tracking-wider">FANCY JEWELRY</h1>
                                <p className="text-xs md:tracking-wider">Jewelry Moice is a fresh and conceptual in the world of jewelry. You’ll get a unique, one-of-a-kind decoration that will suit you better than any other.</p>
                                <button className="border border-[--secondary-color] py-1 px-2 text-sm">SHOP NOW</button>
                            </div>
                            <img src={img2} className="h-full object-cover md:w-full w-32" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </div>
    );
};

export default Banner;