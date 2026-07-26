import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../context/CartContext";
import { Lock, Undo2, Van } from "lucide-react";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [relatedLoading, setRelatedLoading] = useState(false);

  const getProduct = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios(`https://fakestoreapi.com/products/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.log("single product fetch for product detail", error);
      setError("Product not found");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  useEffect(() => {
    if (!product?.category) return;

    const getRelatedProducts = async () => {
      try {
        setRelatedLoading(true);

        const res = await axios(
          `https://fakestoreapi.com/products/category/${product.category}`,
        );

        const filtered = res.data
          .filter((item) => item.id !== product.id)
          .slice(0, 4);

        setRelatedProducts(filtered);
      } catch (error) {
        console.log("related products fetch", error);
        setRelatedProducts([]);
      } finally {
        setRelatedLoading(false);
      }
    };

    getRelatedProducts();
  }, [product?.category, product?.id]);

  if (loading) {
    return <Loader />;
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-[#03045E] text-white flex flex-col items-center justify-center gap-4">
        <p className="text-xl text-red-400">{error || "Product not found"}</p>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2.5 bg-white text-[#03045E] rounded-full font-medium hover:bg-gray-200 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  const renderStars = (rate = 0) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={
            i <= Math.round(rate) ? "text-yellow-400" : "text-[#0077B6]/40"
          }
        >
          ★
        </span>,
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-[#03045E] text-white">
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-[#90E0EF]/60 hover:text-white transition flex items-center gap-1"
        >
          ← Back to products
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className=" lg:top-10">
            <div className="bg-gradient-to-br from-[#0077B6]/20 to-[#020340] border border-[#0077B6]/30 rounded-3xl flex items-center justify-center p-12 aspect-square">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-96 object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <span className="w-fit px-3 py-1 text-xs font-medium tracking-wide uppercase bg-[#020340] border border-[#0077B6]/30 rounded-full text-[#90E0EF]/70">
              {product.category}
            </span>

            <h1 className="text-4xl font-bold leading-tight tracking-tight">
              {product.title}
            </h1>

            <div className="flex items-center gap-2">
              <div className="flex text-lg">
                {renderStars(product.rating?.rate)}
              </div>
              <span className="text-sm text-[#90E0EF]/60">
                {product.rating?.rate} · {product.rating?.count} reviews
              </span>
            </div>

            <div className="h-px bg-[#0077B6]/30" />

            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold">${product.price}</span>
              <span className="text-sm text-[#90E0EF]/40 line-through">
                ${(product.price * 1.2).toFixed(2)}
              </span>
              <span className="text-sm font-medium text-emerald-400">
                20% off
              </span>
            </div>

            <p className="text-[#90E0EF]/70 leading-relaxed text-[15px]">
              {product.description}
            </p>

            <div className="h-px bg-[#0077B6]/30" />

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product.id);
                }}
                className="flex-1 px-6 py-4 bg-[#00B4D8] text-[#03045E] font-semibold rounded-full hover:brightness-110 transition"
              >
                Add to Cart
              </button>
              <button className="flex-1 px-6 py-4 border border-[#0077B6]/40 text-white font-semibold rounded-full hover:bg-[#0077B6]/10 transition">
                Buy Now
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-[#0077B6]/30 text-xs text-[#90E0EF]/60">
              <div className="flex flex-col items-center text-center gap-1">
                <span className="text-[#00B4D8]">
                  <Van />
                </span>
                Free delivery
              </div>
              <div className="flex flex-col items-center text-center gap-1">
                <span className="text-[#00B4D8]">
                  <Undo2 />
                </span>
                Easy returns
              </div>
              <div className="flex flex-col items-center text-center gap-1">
                <span className="text-[#00B4D8]">
                  <Lock />
                </span>
                Secure payment
              </div>
            </div>
          </div>
        </div>

        {(relatedLoading || relatedProducts.length > 0) && (
          <div className="mt-20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">You might also like</h2>
              <span className="text-sm text-[#90E0EF]/50 capitalize">
                {product.category}
              </span>
            </div>

            {relatedLoading ? (
              <Loader />
            ) : (
              <div className=" grid grid-cols-5 max-[769px]:grid-cols-2 max-[1024px]:grid-cols-4 max-[426px]:grid-cols-1 max-[426px]:p-0.5 gap-2.5 p-5scrollbar-thin">
                {relatedProducts.map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}