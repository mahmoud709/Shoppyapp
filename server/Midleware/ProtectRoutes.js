import jwt from "jsonwebtoken";

export const protectRoutes = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        res.status(401).json({
            message: "Please Login",
        });
    } else {
            jwt.verify(token, process.env.JWT_SECRET);
            next();
    }
};

