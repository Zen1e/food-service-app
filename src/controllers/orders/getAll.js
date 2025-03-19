import { Orders } from "../../schemas/orderSchema.js";

export const getAllOrders = async (req, res) => {
    
    try{
        const orders = await Orders.find({});
        res.send(orders).status(200);
    }catch(err){
        res.send(err).status(404);     
    }
  };