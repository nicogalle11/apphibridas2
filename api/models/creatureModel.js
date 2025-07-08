import mongoose from "mongoose";

const creatureSchema = new mongoose.Schema({
    //id: {type: Number, required: true},
    number: {type: Number, required: true},
    name: {type: String, required: true},
    types: [{type: String, required: true}],
    image: {type: String, required: false}
});

export const getAllCreatures = () => {
    return creatures;
}

export const getCreaturesById = () => {
    return  creatures.find(creatures => creatures.id === id);
};

export default mongoose.model(`creatures`, creatureSchema);