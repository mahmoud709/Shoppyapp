import asyncHandler from 'express-async-handler';
import { productDetails } from '../models/addProduct.js';
import appError from '../utils/appError.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
import { cloudinaryUploadImage } from '../utils/clouninary.js';
const __dirname = dirname(fileURLToPath(import.meta.url));
import fs from 'fs';

export const addProduct = asyncHandler(async (req, res) => {
  // Check if a file is uploaded
  if (!req.file) {
    return res.status(400).json({ success: 'failed', message: 'Please, upload an image' });
  }

  const {
    productName,
    description,
    productPrice,
    qty,
    category,
    brand,
  } = req.body;

  // Upload photo
  const imagePath = path.join(__dirname, `../uploads/${req.file.filename}`);
  const result = await cloudinaryUploadImage(imagePath);

  if (result) {
    // Check if the uploaded image exceeds 8MB 
    if (req.file.size > 8 * 1024 * 1024) {
      return res.status(400).json({ success: 'failed', message: 'Please, upload an image smaller than 8MB' });
    }

    await productDetails.create({
      productName,
      description,
      productPrice,
      qty,
      productImg: {
        url: result.secure_url,
        publicId: result.public_id
      },
      brand,
    });

    // Delete the local image file after upload
    fs.unlinkSync(imagePath);

    return res.status(200).json({
      status: 'success',
      message: 'Product added successfully',
    });
  } else {
    return res.status(400).json({ status: 'failed', message: 'Failed to upload the image to Cloudinary' });
  }
});

export const index = async (req, res) => {
  const myQuery = req.query;
  const limit = myQuery.limit || 3;
  const page = myQuery.page || 1;
  const skip = (page - 1) * limit;
  // .limit(limit).skip(skip);
  let query = productDetails.find();

  const allProducts = await query.populate("category");
  res.status(200).json({
    status: "success",
    message: "All Products",
    result: allProducts.length,
    allProducts,
  });
};

export const show = asyncHandler(
  async (req, res, next) => {
    const singleProduct = await productDetails
      .findById(req.params._id)
      .populate("category");
    res.status(200).json({
      status: "success",
      message: "single product",
      singleProduct,
    })
    if (!singleProduct) {
      const err = appError.create(401, "Product Not found", "failed");
      return next(err);
    }
  })

export const deleteOne = asyncHandler(async (req, res) => {
  let deletedProduct = await productDetails.findByIdAndDelete(req.params._id);
  if (deletedProduct) {
    res.status(200).json({
      status: "success",
      message: "Product Deleted",
      deletedProduct,
    });
  } else {
    res.status(404).json({
      status: "fail",
      message: "Product not found",
    });
  }
});
