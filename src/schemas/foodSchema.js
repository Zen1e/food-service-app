import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    foodName: {type:String, require: true},
    category: {type:String, require: true},
    ingredients: {type:String, require: true},
    price: {type:Number, require: true},
    image: {type:String},
},{timestamps: true});

export const Foods = mongoose.model("food", foodSchema);