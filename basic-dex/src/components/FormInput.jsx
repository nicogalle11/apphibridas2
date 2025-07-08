import React, {useState} from "react"

const FormInput = (props) => {
	const [focused, setFocused] = useState(false);
	const {label, errorMessage, handleOnChange, ...otherProps} = props

	const handleFocus = (e) => {
		setFocused(true);
	}
	return (
		<div className="formInput">
			<label>{label}</label>
			<input onChange={handleOnChange} onBlur={handleFocus} focused={focused.toString()} {...otherProps} />
			<span>{errorMessage}</span>
		</div>
	)
}

export default FormInput;