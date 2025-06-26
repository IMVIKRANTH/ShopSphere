// src/comp/HomePage.jsx
import React, { useEffect } from "react";
import { useProductStore } from "../store/product";
import ProductCard from "./ProductCard";

const HomePage = ({ theme }) => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="container">
      <h2 className="page-title" style={{
        fontSize: 32,
        fontWeight: 700,
        margin: "32px 0 24px 0",
        textAlign: "center",
        letterSpacing: 1,
      }}>
        Current Products 🚀
      </h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} theme={theme} />
        ))}
      </div>
      {products.length === 0 && (
        <div style={{ textAlign: "center", color: theme.text, margin: "40px 0" }}>
          No products found 😢
        </div>
      )}
    </div>
  );
};

export default HomePage;
