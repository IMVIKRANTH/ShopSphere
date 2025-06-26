// src/comp/ProductCard.jsx
import React, { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { useProductStore } from "../store/product";

const ProductCard = ({ product, theme }) => {
  const [updatedProduct, setUpdatedProduct] = useState({ ...product });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { deleteProduct, updateProduct } = useProductStore();

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    alert(`${success ? "✅ Success" : "❌ Error"}: ${message}`);
  };

  const handleUpdateProduct = async (pid, updatedProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct);
    setIsModalOpen(false);
    alert(`${success ? "✅ Success" : "❌ Error"}: ${message}`);
  };

  return (
    <div className="product-card" style={{
      background: theme.cardBg,
      color: theme.cardText,
      border: `1px solid ${theme.inputBorder}`,
      boxShadow: "0 2px 16px rgba(0,0,0,0.10)",
    }}>
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <span className="product-price" style={{
          background: theme.priceBg,
          color: theme.priceText,
        }}>
          ₹{product.price}
        </span>
        <div className="product-actions">
          <button
            onClick={() => setIsModalOpen(true)}
            className="edit-btn"
            style={{
              background: theme.buttonBg,
              color: theme.buttonText,
            }}
          >
            <MdEdit size={20} />
            <span>Edit</span>
          </button>
          <button
            onClick={() => handleDeleteProduct(product._id)}
            className="delete-btn"
          >
            <MdDelete size={20} />
            <span>Delete</span>
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content" style={{
            background: theme.modalBg,
            color: theme.cardText,
          }}>
            <div className="modal-header">
              <h3>Update Product</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="modal-close-btn"
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <input
                placeholder="Product Name"
                name="name"
                value={updatedProduct.name}
                onChange={(e) =>
                  setUpdatedProduct({ ...updatedProduct, name: e.target.value })
                }
                className="modal-input"
                style={{
                  background: theme.inputBg,
                  color: theme.inputText,
                  border: `1px solid ${theme.inputBorder}`,
                }}
              />
              <input
                placeholder="Price"
                name="price"
                type="number"
                value={updatedProduct.price}
                onChange={(e) =>
                  setUpdatedProduct({ ...updatedProduct, price: e.target.value })
                }
                className="modal-input"
                style={{
                  background: theme.inputBg,
                  color: theme.inputText,
                  border: `1px solid ${theme.inputBorder}`,
                }}
              />
              <input
                placeholder="Image URL"
                name="image"
                value={updatedProduct.image}
                onChange={(e) =>
                  setUpdatedProduct({ ...updatedProduct, image: e.target.value })
                }
                className="modal-input"
                style={{
                  background: theme.inputBg,
                  color: theme.inputText,
                  border: `1px solid ${theme.inputBorder}`,
                }}
              />
            </div>
            <div className="modal-footer">
              <button
                onClick={() =>
                  handleUpdateProduct(product._id, updatedProduct)
                }
                className="modal-update-btn"
                style={{
                  background: theme.buttonBg,
                  color: theme.buttonText,
                }}
              >
                Update
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="modal-cancel-btn"
                style={{
                  color: theme.cardText,
                  border: `1px solid ${theme.inputBorder}`,
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
