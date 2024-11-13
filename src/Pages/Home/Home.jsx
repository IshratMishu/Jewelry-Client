import Banner from "../../Components/Banner/Banner";
import BubbleAnimation from "../../Components/BubbleAnimation/BubbleAnimation";
import Nav1 from "../../Components/Nav1/Nav1";
import { Helmet } from "react-helmet-async";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - Moice Jewelry</title>
            </Helmet>
            <Nav1></Nav1>
            <Banner></Banner>
            <BubbleAnimation></BubbleAnimation>
        </div>
    );
};

export default Home;