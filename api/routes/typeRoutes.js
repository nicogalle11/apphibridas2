import express from "express";
import {createType, getTypes, getType, updateType, deleteType} from "../controllers/typeController.js";
import { verifyToken } from "../middlewares/userMiddleware.js";

const typeRouter = express.Router();


typeRouter.post(`/`, verifyToken, createType);
typeRouter.get(`/`, verifyToken, getTypes);
typeRouter.get(`/:id`, verifyToken, getType);
typeRouter.put(`/:id`, verifyToken, updateType);
typeRouter.delete(`/:id`, verifyToken, deleteType);

export {typeRouter};