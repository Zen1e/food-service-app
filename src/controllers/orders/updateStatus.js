import { Orders } from "../../schemas/orderSchema.js";

export const updateStatus = async (req, res) => {

    const {id,status} = req.body;
    
    try{
        const order = await Orders.findOneAndUpdate({_id: id}, {status: status}, {new: true});
        res.send(order).status(200);
    }catch(err){
        res.send(err).status(404);     
    }
  };