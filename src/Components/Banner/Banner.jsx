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
import Button from "../Button/Button";

const Banner = () => {
    return (
        <div className="flex items-center justify-between mt-24">
            <div className="w-1/4">
                <CategoriesMenu></CategoriesMenu>
            </div>
            <div className="w-3/4">
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
                    className="mySwiper h-[26rem]"
                >
                    <SwiperSlide>
                        <div className="flex items-center justify-between pl-10 h-full gradient">
                            <div className="space-y-4">
                                <p className="text-xs tracking-widest">MODERN CHARM</p>
                                <h1 className="font-semibold text-2xl tracking-wider">ELEGANT COLLECTION <br />FOR YOUR LADY</h1>
                                <p className="text-sm tracking-wider">More than just an accessory, it’s reflection of your individuality</p>
                                <Button title="SHOP NOW"></Button>
                            </div>
                            <img src={img3} className="object-cover h-full" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-between pl-10 h-full gradient">
                            <div className="space-y-4">
                                <p className="text-xs tracking-widest">TIMELESS BEAUTY</p>
                                <h1 className="font-semibold text-2xl tracking-wider">JEWELRY SETS <br />GET UP TO 10% OFF</h1>
                                <p className="text-sm tracking-wider">Sparkle and Save: Enjoy your stunning jewelry collection at discounted prices</p>
                                <Button title="SHOP NOW"></Button>
                            </div>
                            <img src={img1} className="h-full object-cover" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-between pl-10 h-full gradient">
                            <div className="space-y-4">
                                <p className="text-xs tracking-widest">NEW COLLECTION</p>
                                <h1 className="font-semibold text-2xl tracking-wider">FANCY JEWELRY</h1>
                                <p className="text-sm tracking-wider">Jewelry Moice is a fresh and conceptual in the world of jewelry. You’ll get a unique, one-of-a-kind decoration that will suit you better than any other.</p>
                                <Button title="SHOP NOW"></Button>
                            </div>
                            <img src={img2} className="h-full object-cover w-full" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </div>
    );
};

export default Banner;