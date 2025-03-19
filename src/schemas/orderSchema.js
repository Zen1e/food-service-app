import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user: {type:mongoose.Schema.Types.ObjectId, require:true},
    username: {type:String, require:true},
    totalPrice: {type:Number, require: true},
    foodOrderItems: {type:Array, require: true},
    status: {type:String, require: true, default:"PENDING"},
    location: {type:String, require: true}
},{timestamps: true});

export const Orders = mongoose.model("order", orderSchema);