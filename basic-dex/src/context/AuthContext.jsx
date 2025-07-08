import {createContext, useEffect, useState} from "react";
import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
	const [user, setUser] = useState(null);
	const auth = Cookies.get(`jwToken`) || null;
	const logoutUser = () => {
		setUser(null);
		Cookies.remove(`jwtoken`);
	}
	useEffect(() => {
		if (auth){
			const decoded = jwtDecode(auth);
			console.log(decoded);
			setUser({
				id: decoded.user._id,
				username: decoded.user.username,
				email: decoded.user.email
			})
		}
	}, [])

	return (
		<AuthContext.Provider value={{user, setUser, auth, logoutUser}}>
			{children}
		</AuthContext.Provider>
	)
}