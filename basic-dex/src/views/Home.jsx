import React, {useEffect, useState} from "react";
import {getCreatures} from "../utils/api.js";
import {Route, Routes} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
	const [creatures, setCreatures] = useState([]);
	//const setLoading = useState(false);
	const fetchCreatures = async () => {
		//setLoading(true)
		try {			
			const data = await getCreatures();
			setCreatures(data);
		} catch(err) {
			console.log(`Error al ejecutar la consulta`);
		} finally {
			//setLoading(false);
		}
	}
	useEffect(() => {
		fetchCreatures()
	},[])

	const selectCreatureToUpdate = (e) => {
		navigate(`/update/${e.target.value}`)
	}
	const selectCreatureToDelete = (e) => {
		navigate(`/delete/${e.target.value}`)
	}

	return (		
		creatures.length > 0 ? (
			<div id="listaCompletaHome">
				<ul>
					{
						creatures.map(creature => (
							<li key={creature._id} >
								<p>#{String(creature.number).padStart(3, '0')} - {creature.name}</p>
								<img src={`./src/img/sprites/${creature.number}.png`} />								
								<p>Tipos: {creature.types}</p>
								<button onClick={selectCreatureToUpdate} value={creature._id}>Modificar</button>
								<button onClick={selectCreatureToDelete}>Eliminar</button>
							</li>
						))
					}
				</ul>
			</div>
		) : (
			<p>acá no hay nada</p>
		)		
	)
}

export default Home;