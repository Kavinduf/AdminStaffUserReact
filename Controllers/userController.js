import User from "../Models/User.js";

// add user API

const addUser = async (req, res) => {
  try {
    const user = await User.create({ ...req.body });
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json({ error });
  }
};

// Update user API

const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate(
      id,
      {
        ...req.body,
      },
      {
        new: true,
      }
    );
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json({ error });
  }
};

// Get user data API

const getUsers = async (req, res) => {
  const { role } = req.params;
  try {
    const users = await User.find({ role: "user" });
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Delete user API
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json({ error });
  }
};
export { addUser, updateUser, getUsers, deleteUser };
