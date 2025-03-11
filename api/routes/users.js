import express from "express";
import { updateUser, deleteUser, getUser, getAllUsers } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("Hello you are logged in");
// })

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("You are logged in and can delete account");
// })

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("You are logged in as admin and can delete account");
// })

// UPDATE
router.put("/:id", verifyUser, updateUser);

// DELETE
router.delete("/:id", verifyUser, deleteUser);

// GET
router.get("/:id", verifyUser, getUser);

// GET ALL
router.get("/", verifyAdmin, getAllUsers);


export default router