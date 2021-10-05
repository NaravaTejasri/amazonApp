import mongoose from "mongoose";

//creating schema for the user
//mongoose.schema(2parameters)
//timestamps:for creating a user in the database  and also updating the user record

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
    isSeller: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
);

//creating a model based on this schema
//mongoose.model(2parameters) -(modelname, schema)
const User = mongoose.model("User", userSchema);

export default User;
