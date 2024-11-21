import { useState } from 'react';
import useProducts from '../../../Hooks/useProducts';
import TabProductCards from '../TabProductCards/TabProductCards';

const TabProducts = () => {
    const [activeTab, setActiveTab] = useState("Rings");

    const handleTab = (tab) => {
        setActiveTab(tab);
    }

    const [products] = useProducts();

    const rings = products.filter(item => item.category === 'Rings');
    const earrings = products.filter(item => item.category === 'Earrings');
    const necklace = products.filter(item => item.category === 'Necklace');

    return (
        <div className='md:mt-24 mt-10'>
            <p className='text-center font-medium text-2xl'>Top Products</p>
            <p className='text-center pb-5 text-[--secondary-color]'>──────</p>
            <div className='h-96'>
                {/* Tab Buttons */}
                <div className='flex justify-center gap-5'>
                    {
                        ['Rings', 'Earrings', 'Necklace'].map((tab) =>
                            <button key={tab} onClick={() => handleTab(tab)} className={`py-2 w-40 font-medium border bg-[--primary-color] ${activeTab === tab ? 'border border-[--secondary-color] text-[--secondary-color] bg-transparent' : ''}`}>
                                {tab}
                            </button>
                        )
                    }
                </div>


                {/* Tab Content */}
                <div className='mt-10'>
                    {activeTab === "Rings" && (
                        <div className='grid md:grid-cols-3 grid-cols-2 gap-5'>
                            {
                                rings.map(product => <TabProductCards key={product._id} product={product}></TabProductCards>)
                            }

                        </div>
                    )}


                    {activeTab === "Earrings" && (
                        <div className='grid md:grid-cols-3 grid-cols-2 gap-5'>
                            {
                                earrings.map(product => <TabProductCards key={product._id} product={product}></TabProductCards>)
                            }

                        </div>
                    )}


                    {activeTab === "Necklace" && (
                        <div className='grid md:grid-cols-3 grid-cols-2 gap-5'>
                            {
                                necklace.map(product => <TabProductCards key={product._id} product={product}></TabProductCards>)
                            }

                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default TabProducts;