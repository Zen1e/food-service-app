import { Foods } from "../../schemas/foodSchema.js";

export const editFood = async(req,res) => {
    const {id, foodName, price, category, ingredients, image} = req.body;

    try{
        const response = await Foods.findByIdAndUpdate({_id: id}, {foodName: foodName, price: price, category: category, ingredients: ingredients, image:image});
        res.send(response).status(200);
    }
    catch(err){
        res.send(err).status(400);
    }
}