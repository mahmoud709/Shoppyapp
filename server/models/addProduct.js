import { Schema, model } from "mongoose";

const Products = new Schema(
  {
    productName: {
      type: String,
      required: [true, "You must write a Product Name"],
    },
    description: {
      type: String,
      required: [true, "You must write a description "],
    },
    productImg: {
      type: Object,
      default: {
        url: "",
        publicId: null
      }
    },
    productPrice: {
      type: Number,
      required: [true, "You must write a price "],
    },
    qty: {
      type: Number,
      required: false,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "category",
      required: [false, "Write Category Name"],
    },
    brand: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export const productDetails = model("product", Products);