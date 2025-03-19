import { Foods } from "../../schemas/foodSchema.js";

export const getFoods = async (req, res) => {
    const {category} = req.params;
    try{
        const foods = await Foods.find({category: category});
        res.send({status: "success", foods}).status(200);
    }catch(err){
        res.send(err).status(400);     
    }
};