import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Map, Marker } from "pigeon-maps"
import { Helmet } from "react-helmet-async";


const Contact = () => {
    const locationCoordinates = [51.5074, -0.1278];

    return (
        <div className="mt-16">
            <Helmet>
                <title>Contact us - Moice Jewelry</title>
            </Helmet>
            <div className="h-72 px-10">
                <Map height={288} defaultCenter={locationCoordinates} defaultZoom={11}>
                    <Marker width={50} anchor={locationCoordinates} />
                </Map>
            </div>

            <div className="flex items-center mt-10">
                <div className="w-2/5 px-10">
                    <h1 className="text-2xl font-medium pb-4">Contact</h1>
                    <p>Our one-to-one support is a big part <br /> of Moice company. Contact us by<br /> phone or email to get help from our <br /> qualified team.</p>
                    <div className="pt-6">
                        <p className="text-xl font-medium">Address:</p>
                        <p>25 Wyle Cop, Shrewsbury, <br />SY1 1XD</p>
                    </div>
                    <div className="pt-6">
                        <p className="text-xl font-medium">Email:</p>
                        <p>contact@moice.com</p>
                    </div>
                </div>
                <div className="w-3/5 px-10">
                    <h2 className="text-2xl font-medium pb-4">Write to us</h2>
                    <form className="w-full space-y-6">
                        <input
                            className="h-10 w-full border px-3 py-2 text-sm focus:outline-none bg-[--third-color]"
                            placeholder="Your Name"
                            type="text"
                        />

                        <input
                            className="h-10 w-full border px-3 py-2 text-sm focus:outline-none bg-[--third-color]"
                            placeholder="Your Email"
                            type="email"
                        />

                        <textarea
                            className="min-h-[80px] w-full border px-3 py-2 focus:outline-none bg-[--third-color]"
                            placeholder="what's in your mind"
                        />

                        <button className="border border-[var(--secondary-color)] px-4 py-2 bg-[var(--secondary-color)] text-white hover:bg-[--third-color] hover:text-[var(--secondary-color)] flex items-center gap-2">SEND MESSAGE<MdOutlineArrowRightAlt /></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;