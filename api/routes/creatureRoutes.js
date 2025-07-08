import express from "express";
import {createCreature, getCreatures, getCreature, getCreaturesByType, updateCreature, deleteCreature} from "../controllers/creatureController.js";
import {verifyToken} from "../middlewares/userMiddleware.js";

const creatureRouter = express.Router();

creatureRouter.post(`/createCreature`, createCreature);
creatureRouter.get(`/`, getCreatures);
creatureRouter.get(`/:id`, getCreature);
creatureRouter.get(`/search/type`, getCreaturesByType);
creatureRouter.put(`/:id`, updateCreature);
creatureRouter.delete(`/:id`, deleteCreature);
/*
creatureRouter.post(`/`, verifyToken, createCreature);
creatureRouter.get(`/`, verifyToken, getCreatures);
creatureRouter.get(`/:id`, verifyToken, getCreature);
creatureRouter.get(`/search/type`, verifyToken, getCreaturesByType);
creatureRouter.put(`:id`, verifyToken, updateCreature);
creatureRouter.delete(`/:id`, verifyToken, deleteCreature);
*/
export {creatureRouter};