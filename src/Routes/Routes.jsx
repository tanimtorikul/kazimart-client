import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import CategoryPage from "../pages/CategoryPage/CategoryPage";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import CartPage from "../pages/CartPage/CartPage";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Orders from "../DashboardPages/Orders";
import PrivateRoute from '../Routes/PrivateRoute'
import AllUser from "../DashboardPages/AllUser";
import Banners from "../DashboardPages/Banners";
import Overview from "../DashboardPages/Overview";
import AddCategories from "../DashboardPages/AddCategories";
import AddProduct from "../DashboardPages/AddProduct";
import ManageProducts from "../DashboardPages/ManageProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/categories/:category",
        element: <CategoryPage />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
    
    ],
  },
  {
    path:'dashboard',
    element: <PrivateRoute>
      <Dashboard/>
    </PrivateRoute>,
    children: [
      {
        path: 'overview',
        element: <Overview/>
      },
      {
        path: 'add-product',
        element: <AddProduct/>
      },
      {
        path: 'manage-products',
        element: <ManageProducts/>
      },
      {
        path: 'orders',
        element: <Orders/>
      },
      {
        path: 'main-banner',
        element: <Banners/>
      },
      {
        path: 'categories',
        element: <AddCategories/>
      },
      {
        path: 'users',
        element: <AllUser/>
      }
    ]
  }
]);
