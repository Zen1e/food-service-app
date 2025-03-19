import { Users } from "../../schemas/userSchema.js";

export const editUser = async(req,res) => {
    try{
        const {id, location} = req.body;
        const result = await Users.findByIdAndUpdate(id, {
            location: location
        }, {new: true});
        res.send(result).status(200);
    }catch(err){
        res.status(500).send(err);
    }
}