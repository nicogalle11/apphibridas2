import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	username: {type: String, required: true, unique: true},
	email: {type: String, required: true},
	password: {type: String, required: true},
	role: {type: String, required: false}
});

export default mongoose.model(`users`, userSchema);