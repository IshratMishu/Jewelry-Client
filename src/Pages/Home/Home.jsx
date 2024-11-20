import Banner from "../../Components/Banner/Banner";
import Nav1 from "../../Components/Nav1/Nav1";
import { Helmet } from "react-helmet-async";
import Cards from "../Sections/Cards/Cards";
import HerHim from "../Sections/HerHim/HerHim";
import Blog from "../Sections/Blog/Blog";
import Reviews from "../../Components/Reviews/Reviews";
import TabProducts from "../Sections/TabProducts/TabProducts";
import ShopByCategories from "../Sections/ShopByCategories/ShopByCategories";
import FooterLast from "../Sections/FooterLast/FooterLast";


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
            <Reviews></Reviews>
            <Blog></Blog>
            <FooterLast></FooterLast>
        </div>
    );
};

export default Home;