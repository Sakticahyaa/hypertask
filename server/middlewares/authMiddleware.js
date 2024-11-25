import jwt, { decode } from "jsonwebtoken";
import User from "../models/user.js"

const protectRoute = async(req, res, next) => {
    try {
        let token = req.cookie.token;
        if(token) {
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            const resp = await User.findById(decodedToken.userId).select(
                "IsAdmin email"
            );

            req.user = {
                email: resp.email,
                isAdmin: resp.isAdmin,
                userId: decodedToken.userId,
            };

            next();
        }
    } catch (error) {
        console.log(error);
        return res
            .status(401)
            .json({status: false, message: "Not authorized. Try login again."})
    }
};

const isAdminRoute = async(req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        return res
            .status(401)
            .json({status: false, message: "Not authorized. Try login again."})
    }
};

export {isAdminRoute, protectRoute}