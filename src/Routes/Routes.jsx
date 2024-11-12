import {
  createBrowserRouter
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    //   errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // {
      //   path: "/menu",
      //   element: <Menu></Menu>
      // },
      // {
      //   path: "/order/:category",
      //   element: <Order></Order>
      // },
      // {
      //   path: "/login",
      //   element: <Login></Login>
      // },
      // {
      //   path: "/signUp",
      //   element: <SignUp></SignUp>
      // },
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