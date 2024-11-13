import { Helmet } from 'react-helmet-async';
import about1 from '../../assets/about1.jpg';
import about2 from '../../assets/about2.jpg';
import about3 from '../../assets/about3.jpg';
import about4 from '../../assets/about4.jpg';
import about5 from '../../assets/about5.png';
import about6 from '../../assets/about6.png';
import Reviews from '../../Components/Reviews/Reviews';


const AboutUs = () => {
    return (
        <div className='mt-16'>
            <Helmet>
                <title>About us - Moice Jewelry</title>
            </Helmet>
            <h1 className='text-xl font-medium pb-5'>ABOUT US</h1>
            <p>Welcome to our online jewelry store! We are a team of passionate jewelers who strive to bring the best and most exquisite pieces to our customers. Our journey began with a simple idea: to create a space where everyone can find something special to cherish and wear every day.We believe that jewelry is not just an accessory, but an extension of one’s personality and individuality. Our collection is carefully curated to reflect this belief, with each piece being handpicked for its timeless elegance and unparalleled quality.</p>
            <div className="flex items-center gap-5 justify-center pt-10 pb-10">
                <div>
                    <img src={about1} alt="" className='w-[450px] h-[500px] object-cover' />
                </div>
                <div className='grid grid-cols-2 gap-5'>
                    <img src={about2} alt="" className='w-64 h-56 object-cover' />
                    <img src={about3} alt="" className='w-72 h-56 object-cover' />
                    <img src={about4} alt="" className='w-64 h-56 object-cover' />
                    <img src={about5} alt="" className='w-72 h-56 object-cover' />
                </div>
            </div>
            <h1 className='text-xl font-medium pb-5'>OUR STORY</h1>
            <p>At Moice Jewelry, our journey began with a simple yet profound passion for creating timeless beauty through exquisite jewelry. Founded in the heart of a vibrant artisan community, our brand was born from a love for intricate craftsmanship and the desire to bring unique, high-quality pieces to discerning customers around the world. Each piece in our collection is meticulously designed and handcrafted, reflecting our commitment to excellence and our deep appreciation for the art of jewelry making.
                <br />
                <br />
                Our founder, Moice, has always been inspired by the elegance and allure of fine jewelry. With a background in design and a keen eye for detail, Moice set out to create a brand that would stand apart in an industry filled with mass-produced pieces. By collaborating with skilled artisans and sourcing the finest materials, we ensure that every item in our collection tells a story of dedication, artistry, and love. From classic styles to contemporary designs, Moice Jewelry offers something special for every occasion, making each moment memorable and extraordinary.
                <br />
                <br />
                At Moice Jewelry, we believe that jewelry is more than just an accessory; it’s a form of self-expression and a way to celebrate life’s precious moments. Our mission is to provide our customers with beautiful, high-quality pieces that they can cherish for a lifetime. We are proud to be a part of your journey, offering not only stunning jewelry but also exceptional service and a personalized shopping experience. Join us in celebrating the art of fine jewelry and discover the perfect piece that resonates with your unique style and story.</p>


            <div className='flex items-center justify-center gap-5 mt-20'>
                <div className='text-end'>
                    <p className='tracking-widest text-xs'>Excellence</p>
                    <h4 className='text-xl font-medium'>WHY CHOOSE US?</h4>
                    <p className='text-sm '>Choose our jewelry store for exceptional quality <br /> and customer service. With a stunning collection <br /> of fine jewelry, fast and free shipping, and expert <br />customer support, you can shop with confidence. <br /> Experience the beauty and elegance of fine <br /> jewelry with unmatched quality and service.</p>
                </div>
                <img src={about6} alt="" className='w-80 mr-5' />
            </div>

<Reviews></Reviews>
        </div>
    );
};

export default AboutUs;