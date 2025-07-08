import express from "express";
import dotend from "dotenv";
import {registerUser, loginUser, getUsers} from "../controllers/userController.js";

dotend.config();

const userRouter = express.Router();

userRouter.post(`/register`, registerUser);
userRouter.post(`/login`, loginUser);
userRouter.get(`/userlist`, getUsers);

export {userRouter};