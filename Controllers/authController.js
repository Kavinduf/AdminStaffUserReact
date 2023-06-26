// import User from "../Models/User.js";

// const register = async (req, res) => {
//   const { fname, lname, dob, gender, role, email, password } = req.body;
//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(409).json({ message: "Email already registered" });
//     }
//     const newUser = new User({
//       fname,
//       lname,
//       dob,
//       gender,
//       role,
//       email,
//       password,
//     });
//     await newUser.save();
//     res.status(201).json({ message: "User registered successfully" });
//   } catch (error) {
//     res.status(400).json({ error });
//   }
// };
