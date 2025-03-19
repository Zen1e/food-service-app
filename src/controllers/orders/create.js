import {Orders} from "../../schemas/orderSchema.js"

export const createOrder = async (req,res) => {
    const {user, username, totalPrice, foodOrderItems, location} = req.body;

    try{
        const newOrder = Orders.create({
            user: user,
            username: username,
            totalPrice: totalPrice,
            foodOrderItems: foodOrderItems,
            location: location
        })
        res.send(newOrder).status(201);
    }catch(err){
        res.send(err).status(500);
    }
}