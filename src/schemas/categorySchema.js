import mongoose from "mongoose";

const catSchema = new mongoose.Schema({
    catName: { type: String, require: true, unique: true}
},{timestamps: true});

export const Categories = mongoose.model("categories", catSchema);