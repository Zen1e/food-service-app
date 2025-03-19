import { Foods } from "../../schemas/foodSchema.js";

export const createFood = async (req,res) => {
    const {foodName, category, ingredients, price, image} = req.body;

    try{
        const newFood = Foods.create({
            foodName: foodName,
            category: category,
            ingredients: ingredients,
            price: price,
            image: image,
        })
        res.send(newFood).status(201);
    }catch(err){
        res.send(err).status(500);
    }
}