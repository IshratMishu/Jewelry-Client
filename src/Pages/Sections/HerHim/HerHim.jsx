import img1 from '../../../assets/her.png';
import img2 from '../../../assets/him.png';
import Button from '../../../Components/Button/Button';

const HerHim = () => {
    return (
        <div className='md:mt-28 mt-[400px]'>
            <div className='flex flex-col-reverse pb-5 md:pb-0 md:flex-row items-center justify-center gap-10'>
                <img src={img1} alt="" className='h-80 w-72 object-cover bg-[--primary-color]' />
                <div>
                    <p className='text-xs tracking-widest mb-1'>Elegance</p>
                    <h1 className='font-medium text-xl'>FOR HER</h1>
                    <p className='text-sm mt-2 mb-3'>Discover the epitome of sophistication <br /> with our luxury jewelry collection.</p>
                    <Button title='Discover More'></Button>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
                <div className='text-end'>
                    <p className='text-xs tracking-widest mb-1'>Excellence</p>
                    <h1 className='font-medium text-xl'>FOR HIM</h1>
                    <p className='text-sm mt-2 mb-3'>Experience the pinnacle of luxury with <br /> our exclusive jewelry for him.</p>
                    <div className='flex justify-end'>
                        <Button title='Discover More'></Button>
                    </div>
                </div>
                <img src={img2} alt="" className='h-80 w-72 object-cover bg-[--primary-color]' />
            </div>
        </div>
    );
};

export default HerHim;