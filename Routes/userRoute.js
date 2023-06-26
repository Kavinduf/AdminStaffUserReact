import express from "express";
import {
  addUser,
  getUsers,
  updateUser,
  deleteUser,
  loginUser,
} from "../Controllers/userController.js";

const router = express.Router();

// router.route("/").post(addUser).get(getUsers);
router.route("/:role").get(getUsers);
router.route("/").post(addUser);
router.route("/login").post(loginUser);
router.route("/:id").delete(deleteUser).patch(updateUser);

export default router;
