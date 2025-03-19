import { Users } from "../../schemas/userSchema.js";
import { hashPassword } from "../../utils/hashingPassword.js";

export const createUser = async (req, res) => {
    
    const {name, password} = req.body;

    const hashedPassword = await hashPassword(password);

    try{
        const newUser = await Users.create({
            name: name,
            password: hashedPassword,
        });
        res.send(newUser).status(201);
    }catch(err){
        res.send(err.errorResponse).status(400);
        
    }
  };