import { Orders } from "../../schemas/orderSchema.js";

export const getOrders = async (req, res) => {

    const {user} = req.body;
    
    try{
        const order = await Orders.find({user: user});
        res.send(order).status(200);
    }catch(err){
        res.send(err).status(404);     
    }
  };