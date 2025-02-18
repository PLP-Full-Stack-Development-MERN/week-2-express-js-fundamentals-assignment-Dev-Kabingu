const express = require("express");
const userController = require ("../controllers/userController");
const userRouter = express.Router();

userRouter.get('/', userController.getUser);
userRouter.post ('/', userController.createUser);
userRouter.put('/:id', userController.updateUser);
userRouter.delete('/:id', userController.deleteUser);

module.exports = userRouter;