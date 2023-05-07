const express = require("express");

const router = express.Router();

const getUsersController = require("./controllers/UsersController");

router.get("/api/users", getUsersController.getUsers);
router.post("/api/users", getUsersController.postUsers);
router.get("/api/users/:id", getUsersController.getUserById);

module.exports = router;