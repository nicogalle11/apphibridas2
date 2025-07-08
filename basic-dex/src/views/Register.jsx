import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
	const navigate = useNavigate();
	const [userData, setUserData] = useState({
		username: "",
		email: "",
		password: ""
	})
	const [error, setError] = useState(``);
	const handleRegister = async (e) => {
		e.preventDefault();
		await axios.post(`http://localhost:3000/users/register`, userData)
		.then((res) => {
			//console.log(res);
			navigate(`/login`);
		})
		.catch((error) => {
			console.log(error);
			setError(error.response.data.message);
		})
	}


    return (
		/*
		<div className="userForm">
			<h2>Registro</h2>
			<RegisterForm />
			<button onClick={handleRegister}>Registrarse</button>
		</div>
		*/
		<div className="userForm">
			<h2>Registro</h2>
			<form>
				<label>Usuario</label>
				<input type="text" value={userData.username} onChange={(e) => setUserData({...userData, username: e.target.value})} pattern="^[A-Za-z0-9]{4,20}$" />
				<label>Correo electrónico</label>
				<input type="email" value={userData.email} onChange={(e) => setUserData({...userData, email: e.target.value})} pattern="[A-Za-z0-9_\.\+-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-\.]+" />
				<label>Contraseña</label>
				<input type="password" value={userData.password} onChange={(e) => setUserData({...userData, password: e.target.value})} pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"/>
				<label>Repetir contraseña</label>
				<input type="password" value={userData.validatePassword} onChange={(e) => setUserData({...userData, validatePassword: e.target.value})} pattern={userData.password}/>
				<button onClick={handleRegister}>Registrarse</button>
			</form>
		</div>
	);
}

export default Register;