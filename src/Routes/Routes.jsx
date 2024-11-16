import {
  createBrowserRouter
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from '../Pages/ContactUs/Contact'
import Blog from "../Pages/Sections/Blog/Blog";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import AllProducts from "../Pages/AllProducts/AllProducts";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import ShopByCategoryFilter from "../Pages/Sections/ShopByCategoryFilter/ShopByCategoryFilter";
import ListSortCategoriesShop from "../Pages/ListSortCategoriesShop/ListSortCategoriesShop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <AllProducts></AllProducts>
      },
      {
        path: "/list",
        element: <ListSortCategoriesShop></ListSortCategoriesShop>
      },
      {
        path: "/productDetail/:id",
        element: <ProductDetails></ProductDetails>
      },
      {
        path: "/product-category/:category", 
        element: <ShopByCategoryFilter />,
        loader: ({ params }) => fetch(`http://localhost:5000/jewelry/${params.category}`)
    },
    
      {
        path: "/signIn",
        element: <SignIn></SignIn>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
    ],
  },
],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
      v7_startTransition: true,
    },
  }
);