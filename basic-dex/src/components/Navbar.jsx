import {NavLink} from 'react-router-dom';
import { AuthContextProvider } from '../context/AuthContext';

const Navbar = () => {
//	console.log(AuthContextProvider)
	const logoutUser = () => {
		setUser(null);
		Cookies.remove(`jwtoken`);
	}
	return (
		<nav>
			<ul>
				<li><NavLink to="/">Home</NavLink></li>
				<li><NavLink to="/upload">Cargar</NavLink></li>
				<li><NavLink to="/update">Modificar</NavLink></li>
				<li><NavLink to="/delete">Eliminar</NavLink></li>
				<li><NavLink to="/login">Login</NavLink></li>
				<li><NavLink to="/registro">Registrarse</NavLink></li>
				<li><NavLink to="/" onClick={logoutUser}>Logout</NavLink></li>
			</ul>
		</nav>
	)
}

export default Navbar;