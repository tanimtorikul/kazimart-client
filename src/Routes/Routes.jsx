import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import CategoryPage from "../pages/CategoryPage/CategoryPage";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";

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
        path: "/categories/:categoryName",
        element: <CategoryPage />,
      },
    
    ],
  },
]);
