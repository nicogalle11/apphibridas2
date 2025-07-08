import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const CreateCreaturesForm = () => {
	const navigate = useNavigate();
	const [creatureData, setCreatureData] = useState({
		number: ``,
		name: ``,
		types: ``
	})
	const [error, setError] = useState(``);

	const handleUpload = async (e) => {
		e.preventDefault();
		await axios.post(`http://localhost:3000/creatures/createCreature`, creatureData)
		.then((res) => {
			console.log(res);
			navigate(`/`);
		})
		.catch((error) => {
			console.log(error);
			setError(error.res.data.message);
		})
	}

	return (
		<div className="creatures">
			<h2>Agregar Pokémon</h2>
			<form>
				<label>Número</label>
				<input type="number" placeholder="#025" value={creatureData.number} onChange={(e) => setCreatureData({...creatureData, number: e.target.value})} required />

				<label>Nombre</label>
				<input type="text" placeholder="Pikachu" value={creatureData.name} onChange={(e) => setCreatureData({...creatureData, name: e.target.value})} required />

				<label>Tipo</label>
				<input type="text" placeholder="Eléctrico" value={creatureData.types} onChange={(e) => setCreatureData({...creatureData, types: e.target.value})} required />

				<button onClick={handleUpload}>Enviar</button>
			</form>
		</div>
	)
}

export default CreateCreaturesForm;