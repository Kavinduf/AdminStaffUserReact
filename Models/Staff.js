import mongoose from "mongoose";

const StaffSchema = new mongoose.Schema({
  fname: {
    type: String,
  },
  lname: {
    type: String,
  },
  dob: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  role: {
    type: String,
    enum: ["user", "staff", "admin"],
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});

export default mongoose.model("User", UserSchema);
