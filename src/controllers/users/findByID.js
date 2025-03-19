import { Users } from "../../schemas/userSchema.js";

export const findUser = async (req, res) => {

    const {id} = req.body;
    
    try{
        const user = await Users.findById(id, "location");
        res.send(user).status(200);
    }catch(err){
        res.send(err).status(404);     
    }
  };