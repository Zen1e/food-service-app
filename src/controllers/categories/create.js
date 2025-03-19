import { Categories } from "../../schemas/categorySchema.js";

export const createCat = async (req,res) => {
    const {catName} = req.body;

    try{
        const newCat = Categories.create({
            catName: catName,
        })
        res.send(newCat).status(201);
    }catch(err){
        res.send(err).status(500);
    }
}