import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export async function verifyJWT (req,res,next) {

    try {
        const authHeader = req.headers.authorization;

        
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ error: "Access denied. No token provided." });
        }
        
        

        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_secret_key);
        
        req.user = decoded;
        next();

    } catch (error) {
        return res.status(403).json({ error: "Invalid or expired token." });
    }
}