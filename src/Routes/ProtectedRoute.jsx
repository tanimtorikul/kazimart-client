import { Navigate } from "react-router-dom";
import useCart from "../hooks/useCart";

const ProtectedRoute = ({ children }) => {
  const [cart] = useCart();
  if (cart.length === 0) {
    return <Navigate to="/cart" replace />;
  }

  return children;
};

export default ProtectedRoute;
