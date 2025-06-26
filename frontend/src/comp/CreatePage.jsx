// src/comp/CreatePage.jsx
import React, { useState } from "react";
import { useProductStore } from "../store/product";

const CreatePage = ({ theme }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const { createProduct } = useProductStore();
  const [toast, setToast] = useState(null);

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    setToast({ message, status: success ? "success" : "error" });
    setTimeout(() => setToast(null), 2500);
    if (success) {
      setNewProduct({ name: "", price: "", image: "" });
    }
  };

  return (
    <div className="container" style={{ maxWidth: 500, margin: "0 auto", padding: "32px 0" }}>
      {toast && (
        <div
          style={{
            position: "fixed",
            top: "24px",
            right: "24px",
            padding: "16px 24px",
            borderRadius: "8px",
            background: toast.status === "error" ? "#fee2e2" : "#bbf7d0",
            color: toast.status === "error" ? "#b91c1c" : "#166534",
            fontWeight: "bold",
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            zIndex: 9999,
            minWidth: "200px",
          }}
        >
          {toast.message}
        </div>
      )}
      <h1 style={{
        fontSize: "2.2rem",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 24,
      }}>
        Create New Product
      </h1>
      <div style={{
        background: theme.cardBg,
        color: theme.cardText,
        padding: 28,
        borderRadius: 14,
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        gap: 18,
        border: `1px solid ${theme.inputBorder}`,
      }}>
        <input
          placeholder="Product Name"
          name="name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: `1px solid ${theme.inputBorder}`,
            fontSize: 16,
            width: "100%",
            background: theme.inputBg,
            color: theme.inputText,
          }}
        />
        <input
          placeholder="Price"
          name="price"
          type="number"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: `1px solid ${theme.inputBorder}`,
            fontSize: 16,
            width: "100%",
            background: theme.inputBg,
            color: theme.inputText,
          }}
        />
        <input
          placeholder="Image URL"
          name="image"
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: `1px solid ${theme.inputBorder}`,
            fontSize: 16,
            width: "100%",
            background: theme.inputBg,
            color: theme.inputText,
          }}
        />
        <button
          onClick={handleAddProduct}
          style={{
            background: theme.buttonBg,
            color: theme.buttonText,
            fontWeight: "bold",
            border: "none",
            borderRadius: 8,
            padding: "14px 0",
            fontSize: 18,
            cursor: "pointer",
            width: "100%",
            marginTop: 10,
            transition: "background 0.2s",
          }}
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default CreatePage;
