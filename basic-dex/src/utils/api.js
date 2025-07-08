import axios from "axios";

const API_URL = `http://localhost:3000/creatures/`;

export const getCreatures = async () => {
	try {
		let url = API_URL;
		const response = await axios.get(url);

		return response.data;
	} catch (error) {
		console.error(`Error al ejecutar la solicitud`);
		throw error;
	}
}

export const getCreature = async (id) => {
	try {
		let url = API_URL;
		//console.log(url + id)
		const response = await axios.get(url + id)
		return response.data;
	} catch (error) {
		console.log(error)
		throw error;
	}
}

export const createCreature = async (creature) => {
	const response = await axios.post(API_URL, creature);
	return response.data;	
}

export const updateCreature = async (id, updatedCreature) => {
	const response = await axios.put(`${API_URL}/${id}`, updatedCreature);
	return response.data;		
}

export const deleteCreature = async (id) => {
	const response = await axios.delete(`${API_URL}/${id}`);
	return response.data;		
}