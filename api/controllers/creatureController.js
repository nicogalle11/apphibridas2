//createCreature, getCreatures, getCreature, getCreaturesByType, updateCreature, deleteCreature
import creatureModel from "../models/creatureModel.js";

export const createCreature = async (req, res) => {
	try {
		const creature = new creatureModel({...req.body});
		const newCreature = await creature.save();
		res.json(newCreature);
	} catch(err) {
		res.status(400).json({error: err.message});
	}
}

export const getCreatures = async (req, res) => {
    try {
        const {types, sortBy, order} = req.query;
        let filter = {};
        let sort = {};

        if (types) filter.types = types;
        
        const creatures = await creatureModel.find(filter).sort({"number": 1 });
        res.json(creatures);
    } catch(err) {
        res.status(400).json({error: err.message});
    }
}

export const getCreature = async (req, res) => {
    try {
        const creature = await creatureModel.findById(req.params.id);
        if (!creature) return res.status(404).json({error: "No hay resultados para la búsqueda"})
        res.json(creature);
    } catch(err) {
        res.status(400).json({error: err.message})
    }
}

export const getCreaturesByType = async (req, res) => {
    try {
        const types = req.query.types.split(`,`);
        const creatures = await creatureModel.find({types: {$in: types}});
        res.json(creatures);
    } catch(err) {
        res.status(400).json({error: err.message})
    }
}

export const updateCreature = async (req, res) => {
	
    const creatureId = req.params.id;
    const updates = req.body;
	console.log(updates)
    try {
        const updatedCreature = await creatureModel.findByIdAndUpdate(creatureId, updates, {new: true});
        if (!updatedCreature) {return res.status(404).json({message: "No hay resultados para la búsqueda"});}
        res.json(updatedCreature);
    } catch(err) {
        res.status(400).json({error: err.message})
    }
}

export const deleteCreature = async (req, res) => {
    const creatureId = req.params.id;
    try {
        const deletedCreature = await creatureModel.findByIdAndDelete(creatureId);
        if (!deletedCreature) {return res.status(404).json({ message: "No hay resultados para la búsqueda" });}
        res.json({message: "Registro eliminado"});
    } catch(err) {
        res.status(400).json({error: err.message})
    }
}