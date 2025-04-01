import { Categories } from "../../schemas/categorySchema.js";

export const deleteCat = async (req,res) => {
    const {catName} = req.body;

    try{
        const response = await Categories.deleteOne({catName: catName})
        console.log(response);
        
        res.send(response).status(200);
    }catch(err){
        res.send(err).status(404);
    }
}