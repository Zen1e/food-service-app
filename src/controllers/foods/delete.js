import { Foods } from "../../schemas/foodSchema.js";

export const deleteFood = async (req,res) => {
    const {id} = req.body;

    try{
        const response = await Foods.deleteOne({_id: id})
        console.log(response);
        
        res.send(response).status(200);
    }catch(err){
        res.send(err).status(404);
    }
}