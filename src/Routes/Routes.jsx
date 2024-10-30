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
import PrivateRoute from "../Routes/PrivateRoute";
import AllUser from "../DashboardPages/AllUser";
import Banners from "../DashboardPages/Banners";
import Overview from "../DashboardPages/Overview";
import AddCategories from "../DashboardPages/AddCategories";
import AddProduct from "../DashboardPages/AddProduct";
import ManageProducts from "../DashboardPages/ManageProducts";
import ProtectedRoute from "./ProtectedRoute";
import Promo from "../DashboardPages/Promo";
import UpdateProduct from "../DashboardPages/UpdateProduct";
import UpdateCategory from "../DashboardPages/UpdateCategory";
import OrderSuccessful from "../pages/CheckoutPage/OrderSuccessful";
import About from "../pages/About/About";
import AddBlog from '../components/AdminBlog/AddBlog'
import ManageBlogs from "../components/AdminBlog/ManageBlogs";
import Blogs from "../pages/Blogs/Blogs";
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
        path: "/about",
        element: <About />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },

      {
        path: "/checkout",
        element: (
          <ProtectedRoute>
            <CheckoutPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/order-successful",
        element: <PrivateRoute>
          <OrderSuccessful />
        </PrivateRoute>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "update-product/:productId",
        element: <UpdateProduct />,
      },

      {
        path: "manage-products",
        element: <ManageProducts />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "main-banner",
        element: <Banners />,
      },
      {
        path: "promo",
        element: <Promo />,
      },
      {
        path: "categories",
        element: <AddCategories />,
      },
      {
        path: "update-category/:categoryId",
        element: <UpdateCategory />,
      },
      {
        path: "users",
        element: <AllUser />,
      },
      {
        path: "add-blog",
        element: <AddBlog />,
      },
      {
        path: "manage-blogs",
        element: <ManageBlogs />,
      },
    ],
  },
]);
