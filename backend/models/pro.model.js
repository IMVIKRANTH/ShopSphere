import mongoose from "mongoose";

const proSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    price: {
        type: Number,
        required: true,
    },
},{
    timestamps : true
}
);

const Product = mongoose.model("Product", proSchema);
export default Product;

