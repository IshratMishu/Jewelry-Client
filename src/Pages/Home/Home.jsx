import Banner from "../../Components/Banner/Banner";
import Nav1 from "../../Components/Nav1/Nav1";
import { Helmet } from "react-helmet-async";
import Cards from "../Sections/Cards/Cards";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - Moice Jewelry</title>
            </Helmet>
            <Nav1></Nav1>
            <Banner></Banner>
            <Cards></Cards>
        </div>
    );
};

export default Home;