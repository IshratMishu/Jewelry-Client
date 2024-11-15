import { useState } from 'react';

const TabProducts = () => {
    const [activeTab, setActiveTab] = useState("Rings");

    const handleTab = (tab) => {
        setActiveTab(tab);
    }

    return (
        <div className='mt-28'>
             <p className='text-center font-medium text-2xl'>Top Products</p>
             <p className='text-center pb-5 text-[--secondary-color]'>──────</p>
            <div>
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
                        <div>
                            <h2 className="text-xl font-bold">Ring </h2>
                           
                        </div>
                    )}


                    {activeTab === "Earrings" && (
                        <div>
                            <h2 className="text-xl font-bold">earing</h2>
                            
                        </div>
                    )}


                    {activeTab === "Necklace" && (
                        <div>
                            <h2 className="text-xl font-bold">necklace</h2>
                            
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default TabProducts;