import { Users } from "../../schemas/userSchema.js";

export const getUsers = async (req, res) => {
    console.log("get users",req.body);
    
    try{
        const users = await Users.find();
        res.send({status: "success", users}).status(200);
    }catch(err){
        res.send(err).status(400);     
    }
  };