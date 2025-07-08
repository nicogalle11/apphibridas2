import typeModel from "../models/typeModel.js";

export const createType = async (req, res) => {
    try {
        const type = new typeModel({...req.body});
        const newType = await type.save();
        res.json(newType);
    } catch(err) {
        res.status(400).json({error: err.message})
    }
}

export const getTypes = async (req, res) => {
    try {
        const {sortBy, order} = req.query;
        let sort = {};

        if (sortBy) {sort[sortBy] = order === `desc` ? -1 : 1;}
        
        const types = await typeModel.find().sort(sort);
        res.json(types);
    } catch(err) {
        res.status(400).json({error: err.message});
    }
}

export const getType = async (req, res) => {
    try {
        const type = await typeModel.findById(req.params.id);
        if (!type) return res.status(404).json({error: "No hay resultados para la búsqueda"})
        res.json(type);
    } catch(err) {
        res.status(400).json({error: err.message})
    }
}

export const updateType = async (req, res) => {
    const typeId = req.params.id;
    const updates = req.body;
    try {
        const updatedType = await typeModel.findByIdAndUpdate(typeId, updates, {new:true});
        if (!updatedType) {return res.status(404).json({ message: "No hay resultados para la búsqueda" });}
        res.json(updatedType);
    } catch(err) {
        res.status(400).json({error: err.message})
    }
}

export const deleteType = async (req, res) => {
    const typeId = req.params.id;
    try {
        const deletedType = await typeModel.findByIdAndDelete(typeId);
        if (!deletedType) {return res.status(404).json({ message: "No hay resultados para la búsqueda" });}
        res.json({message: "Registro eliminado"});
    } catch(err) {
        res.status(400).json({error: err.message})
    }
}