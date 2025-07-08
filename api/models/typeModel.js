import mongoose from "mongoose";

const typeSchema = new mongoose.Schema({
    //id: {type: Number, required: true},
    name: {type: String, required: true},
    color: {type: String, required: true},
    image: {type: String, required: true}
});

export const getAllTypes = () => {
    return types;
}

export const getTypesById = () => {
    return  types.find(types => types.id === id);
};

export default mongoose.model(`types`, typeSchema);