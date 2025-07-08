import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {getCreature} from "../../utils/api.js";

const UpdateCreatureForm = () => {
	
	const navigate = useNavigate();
	const creatureId = useParams();
	const [creatureData, setCreatureData] = useState({		
		number: ``,
		name: ``,
		types: ``});

	try {
		const data = getCreature(creatureId.id);
		console.log(data);
		//setCreatureData(data);
	} catch(err) {
		console.log(`Error al ejecutar la consulta`);
	}

	const [error, setError] = useState(``);
/*
	const handleUpdate = async (e) => {
		e.preventDefault();
		await axios.post(`http://localhost:3000/creatures/updateCreature`, creatureData)
		.then((res) => {
			console.log(res);
			navigate(`/`);
		})
		.catch((error) => {
			console.log(error);
			setError(error.res.data.message);
		})
	}
*/
	return (
		<div className="creatures">
			<h2>Agregar Pokémon</h2>
			<form>
				<label>Número</label>
				<input type="number" value={data.number} onChange={(e) => setCreatureData({...creatureData, number: e.target.value})} required />

				<label>Nombre</label>
				<input type="text" value={data.name} onChange={(e) => setCreatureData({...creatureData, name: e.target.value})} required />

				<label>Tipo</label>
				<input type="text" value={data.types} onChange={(e) => setCreatureData({...creatureData, types: e.target.value})} required />

				<button>Enviar</button>
			</form>
		</div>
	)
}

export default UpdateCreatureForm;