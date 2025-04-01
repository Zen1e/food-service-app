import { Users } from "../../schemas/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

export const loginCheck = async (req, res) => {
  const { name, password } = req.body;

  try {
    const user = await Users.findOne({ name: name });
    if (!user) {
      res.status(200).send({ error: "User not found" });
    }else{
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(200).send({ error: "Wrong password" });
    }else{
      const token = jwt.sign({
        id: user._id,
        name: user.name,
        role: user.role,
        location: user.location
      },process.env.JWT_secret_key,{expiresIn: '1h'});
      
    res.status(200).send({message: "Login successful",token: token,role: user.role});}}
  } catch (err) {
    res.status(500).send(err);
  }
};
