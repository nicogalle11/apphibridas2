import React, {useEffect, useState} from "react";
import "./App.scss";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import { getCreatures } from "./utils/api.js";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import Home from "./views/Home";
import Register from "./views/Register";
import Login from "./views/Login";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import CreateCreaturesForm from "./views/ABM/CreateCreatures";
import UpdateCreatureForm from "./views/ABM/UpdateCreatures";

const App = () => {

	/*fetch(`localhost:3000/api`)
	.then(response => {
		if(!response.ok){
			throw new Error(`Error en la solicitud`);
		}
		return response.json();
	})
	.then(data => console.log(data))
	.catch(err => console.log(err));*/

/*
	axios.get(`localhost:3000/api`)
	.then(res => console.log(res))
	.catch(err => console.log(err));
*/


	return (
		<>
			<Logo />
			<Navbar />
			<Routes>
				<Route element={<ProtectedRoutes />}>
					<Route path="/upload" element={<CreateCreaturesForm />} />
					<Route path="/update/:id" element={<UpdateCreatureForm />} />
				</Route>
R				<Route path="/" element={<Home />} />
				<Route path="/registro" element={<Register />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</>
	)
}

export default App
