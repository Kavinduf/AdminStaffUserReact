import express from "express";
import {
  addUser,
  getUsers,
  updateUser,
  deleteUser,
} from "../Controllers/userController.js";

const router = express.Router();

// router.route("/").post(addUser).get(getUsers);
router.route("/").post(addUser);
router.get("/:role").get(getUsers);
router.delete("/:id").delete(deleteUser);
router.route("/:id").patch(updateUser);

export default router;
