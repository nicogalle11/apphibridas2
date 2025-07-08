import React, {useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
	const navigate = useNavigate();
	const [userData, setUserData] = useState({
		username: ``,
		password: ``
	});
	const [error, setError] = useState(``);
	const {user, setUser, auth} = useContext(AuthContext);

	const handleLogin = async (e) => {
		e.preventDefault();
		await axios.post(`http://localhost:3000/users/login`, userData, {
			headers: {'token': auth}
		})
		.then((res) => {
			console.log(res);
			setUser({
				id: res.data.user._id,
				username: res.data.user.username,
				email: res.data.user.email
			})
			Cookies.set(`jwToken`, res.data.jwToken, {expires: 3});
			navigate(`/`);
		})
		.catch((error) => {
			console.log(error);
			setError(error.res.data.message);
		})
	}

	return (
		<div className="userForm">
			<h2>Inicio de sesión</h2>
			<form>
				<label>Usuario</label>
				<input type="text" value={userData.username} onChange={(e) => setUserData({...userData, username: e.target.value})} />
				<label>Contraseña</label>
				<input type="password" value={userData.password} onChange={(e) => setUserData({...userData, password: e.target.value})} />
				<button onClick={handleLogin}>Iniciar sesión</button>
			</form>
		</div>
	)
}

export default Login;