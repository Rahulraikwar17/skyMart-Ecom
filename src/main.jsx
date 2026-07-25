import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./routes/AppRouter.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

import { ToastContainer } from "react-toastify";
import { ProductProvider } from "./context/ProductContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import CartSideBar from "./components/CardSideBar.jsx";
createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <CartProvider>

      <ProductProvider>
        <AppRouter />
        <ToastContainer />
        <CartSideBar/>
      </ProductProvider>
    </CartProvider>
  </AuthProvider>,
);
