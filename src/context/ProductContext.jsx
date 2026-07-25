import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Product = createContext();

export const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  let getProductData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://fakestoreapi.com/products");
      setProductData(res.data);
    } catch (error) {
      console.log("product Fetch Error ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <Product.Provider
      value={{
        productData,
        loading,
      }}
    >
      {children}
    </Product.Provider>
  );
};
