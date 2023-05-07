const express = require("express");

const router = express.Router();

const getUsersController = require("./controllers/UsersController");

router.get("/api/users", getUsersController.getUsers);
router.get("/api/users/:id", getUsersController.getUserById);
router.post("/api/users", getUsersController.postUsers);
router.put("/api/users/:id", getUsersController.updateUser);
router.delete("/api/users/:id", getUsersController.deleteUser);

module.exports = router;