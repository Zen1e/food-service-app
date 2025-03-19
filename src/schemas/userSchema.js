import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, require: true, unique: true},
    password: { type: String, require: true},
    location: {type: String, require: true, default: ""},
    role: {type: String, require: true, default: "user"},
},{timestamps: true});

export const Users = mongoose.model("user_data", userSchema);