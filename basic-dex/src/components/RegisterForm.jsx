import React, {useRef, useState} from "react";
import {useForm} from "react-hook-form";
import FormInput from "./FormInput";

//console.log(FormInput)

const Form = () => {
	const [values, setValues] = useState({
		username: ``,
		mail: ``,
		password: ``,
		confirmPassword: ``
	});

	const inputs = [
		{
			id: 1,
			name: `username`,
			type: `text`,
			placeholder: `Nombre de usuario`,
			errorMessage: `El usuario debe tener entre 4 y 20 caracteres y no puede incluir caracateres especiales`,
			label: `Usuario`,
			pattern: `^[A-Za-z0-9]{4,20}$`,
			required: true
		},
		{
			id: 2,
			name: `mail`,
			type: `email`,
			placeholder: `ejemplo@ejemplo.com`,
			errorMessage: `Debe ser una dirección de correo electrónico correcta.`,
			label: `Correo electrónico`,
			pattern: `[A-Za-z0-9_\.\+-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-\.]+`,
			required: true
		},
		{
			id: 3,
			name: `password`,
			type: `password`,
			placeholder: `Ingrese contraseña`,
			errorMessage: `La contraseña debe tener entre 8 y 20 caracteres y, al menos, una letra, un número y un caracter especial.`,
			label: `Contraseña`,
			pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
			required: true
		},
		{
			id: 4,
			name: `confirmPassword`,
			type: `password`,
			placeholder: `Ingrese nuevamente la contraseña`,
			errorMessage: `Las contraseñas no coinciden`,
			label: `Confirmar contraseña`,
			pattern: values.password,
			required: true
		}
	]

	const handleOnChange = (e) => {
		setValues({...values, [e.target.name]: e.target.value});
	}

	return (
		<form>
			{inputs.map((input) => (
				<FormInput key={input.id} {...input} value={values[input.name]} handleOnChange={handleOnChange} />
			))}			
		</form>
	)
}

export default Form;