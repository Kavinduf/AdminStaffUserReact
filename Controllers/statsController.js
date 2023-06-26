import User from "../Models/User.js";

const getStats = async (req, res) => {
  try {
    const userCount = await User.count({ role: "user" });
    const staffCount = await User.count({ role: "staff" });
    return res.status(200).json({ userCount, staffCount });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export { getStats };
