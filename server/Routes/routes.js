import { Router } from "express";
import { addProduct, index, show, deleteOne, searchProductAPI, getCatagories } from "../controller/product.js";
import { complaints, getcomplaints } from "../controller/complaints.js";
import { addCategory, getCategories } from "../controller/category.js";
import { Login, signup } from "../controller/Auth.js";
import { getusers, profile } from "../controller/users.js";
import multer from "multer";
import { verifyToken, verifyTokenAndAdmin } from "../Midleware/verifyToken.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads");
    },
    filename: function (req, file, cb) {
        const ext=file.mimetype.split('/')[1]
        const uniqueSuffix = `user${Date.now()}.${ext}`;
        cb(null, file.fieldname + "-" + uniqueSuffix);
    },
});
const upload = multer({ storage: storage });

const route = new Router();

route.post("/dashboard/addProduct", upload.single('productImg'), addProduct);
route.post("/dashboard/addcategory", addCategory);
route.post("/contact", complaints);

route.get('/products', index);
route.get("/products/:_id", show);
route.get("/dashboard/products",verifyTokenAndAdmin ,index);
route.get("/dashboard/categories", getCategories);
route.get("/dashboard/complaints", getcomplaints);
route.get("/dashboard/users",verifyTokenAndAdmin ,getusers);

route.delete("/dashboard/products/:_id", deleteOne);
//  Auth Operation
route.post("/signup", signup);
route.post("/signin", Login);

// get user profile
route.get('/profile', verifyToken, profile);
route.get('/search', searchProductAPI);
route.get('/getCatagories', getCatagories)
export default route;
