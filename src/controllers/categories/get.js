import { Categories } from "../../schemas/categorySchema.js";

export const getCats = async (req, res) => {
    
    try{
        const cats = await Categories.find();
        res.send({status: "success", cats}).status(200);
    }catch(err){
        res.send(err).status(400);     
    }
  };