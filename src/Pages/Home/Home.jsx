import Banner from "../../Components/Banner/Banner";
import Nav1 from "../../Components/Nav1/Nav1";
import { Helmet } from "react-helmet-async";
import Cards from "../Sections/Cards/Cards";
import HerHim from "../Sections/HerHim/HerHim";
import Blog from "../Sections/Blog/Blog";
import Reviews from "../../Components/Reviews/Reviews";
import ShopByCategories from "../Sections/ShopByCategories/ShopByCategories";
import TabProducts from "../Sections/TabProducts/TabProducts";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - Moice Jewelry</title>
            </Helmet>
            <Nav1></Nav1>
            <Banner></Banner>
            <Cards></Cards>
            <TabProducts></TabProducts>
            <HerHim></HerHim>
            <ShopByCategories></ShopByCategories>
            <Blog></Blog>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;