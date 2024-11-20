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
import Cart from "../Pages/Dashboard/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import Payment from "../Payments/Payment/Payment";
import PaymentHistory from "../Payments/PaymentHistory/PaymentHistory";
import DashboardPage from "../Pages/Dashboard/DashboardPage/DashboardPage";
import EditAccount from "../Pages/Dashboard/EditAccount/EditAccount";
import Wishlist from "../Pages/Dashboard/Wishlist/Wishlist";
import Invoice from "../Pages/Dashboard/InvoicePage/Invoice";
import WelcomeMessage from "../Pages/Dashboard/WelcomeMessage/WelcomeMessage";
import AdminHome from "../AdminDashboard/AdminHome/AdminHome";
import ManageUsers from "../AdminDashboard/ManageUsers/ManageUsers";
import ManageCategory from "../AdminDashboard/ManageCategory/ManageCategory";
import ManagePayment from "../AdminDashboard/ManagePayment/ManagePayment";
import SellerHome from "../SellerDashboard/SellerHome/SellerHome";
import AdminRoute from "./AdminRoute";
import UpdateProduct from "../AdminDashboard/UpdateProduct/UpdateProduct";
import SalesReport from "../AdminDashboard/SalesReport/SalesReport";
import Dashboard from "../Layout/Dashboard/Dashboard";
import ManageJewelries from "../SellerDashboard/ManageJewelries/ManageJewelries";
import SellerRoute from "./SellerRoute";
import SellerPaymentHistory from "../SellerDashboard/SellerPaymentHistory/SellerPaymentHistory";

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
      {
        path: "/cart",
        element: <PrivateRoute><Cart></Cart></PrivateRoute>
      },
      {
        path: "/checkout",
        element: <PrivateRoute><Payment></Payment></PrivateRoute>
      },
      {
        path: "/my-account",
        element: <PrivateRoute><DashboardPage></DashboardPage></PrivateRoute>
      },
      {
        path: "/my-account/welcome",
        element: <PrivateRoute><WelcomeMessage></WelcomeMessage></PrivateRoute>
      },
      {
        path: "/my-account/paymentHistory",
        element: <PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
      },
      {
        path: "/my-account/editAccount",
        element: <PrivateRoute><EditAccount></EditAccount></PrivateRoute>
      },
      {
        path: "/my-account/wishlist",
        element: <PrivateRoute><Wishlist></Wishlist></PrivateRoute>
      },
      {
        path: "/my-account/invoice",
        element: <PrivateRoute><Invoice></Invoice></PrivateRoute>
      },
    ],
  },

  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      // admin dashboard
      {
        path: "adminHome",
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: "manageUsers",
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      },
      {
        path: "manageProducts",
        element: <AdminRoute><ManageCategory></ManageCategory></AdminRoute>
      },
      {
        path: "updateProduct/:id",
        element: <AdminRoute><UpdateProduct></UpdateProduct></AdminRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/jewelries/${params.id}`)
      },
      {
        path: "managePayment",
        element: <AdminRoute><ManagePayment></ManagePayment></AdminRoute>
      },
      {
        path: "salesReport",
        element: <AdminRoute><SalesReport></SalesReport></AdminRoute>
      },

      // seller dashboard
      {
        path: "sellerHome",
        element: <SellerRoute><SellerHome></SellerHome></SellerRoute>
      },
      {
        path: "manageJewelries",
        element: <SellerRoute><ManageJewelries></ManageJewelries></SellerRoute>
      },
      {
        path: "sellerPaymentHistory",
        element: <SellerRoute><SellerPaymentHistory></SellerPaymentHistory></SellerRoute>
      },
    ]
  }
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