import { Router } from "express";
import { addProduct, index, show, deleteOne } from "../controller/product.js";
import { complaints, getcomplaints } from "../controller/complaints.js";
import { addCategory, getCategories } from "../controller/category.js";
import { login, signup } from "../controller/Auth.js";
import { getusers } from "../controller/users.js";
import { protectRoutes } from "../Midleware/ProtectRoutes.js";
import multer from "multer";

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
route.get("/dashboard/products", index);
route.get("/dashboard/categories", getCategories);
route.get("/dashboard/complaints", getcomplaints);
route.get("/dashboard/users", protectRoutes, getusers);

route.delete("/dashboard/products/:_id", deleteOne);
//  Auth Operation
route.post("/signup", signup);
route.post("/signin", login);
export default route;
