import { Users } from "../../schemas/userSchema.js";

export const checkEmail = async (req,res) => {
    const {name} = req.body;
    try{
        const userExists = await Users.exists({name: name});
        if (userExists) {
            res.status(200).json({ exists: true });
        } else {
            res.status(200).json({ exists: false });
        }
    }catch(err){
        res.send(err);
    }
}