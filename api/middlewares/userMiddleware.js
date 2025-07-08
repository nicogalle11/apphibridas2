import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
/*
export const verifyToken = (req, res, next) => {
	const authHeader = req.headers.authorization;
	const token = authHeader.split(` `)[1];

	if (!authHeader) return res.status(403).json({error: `Se requiere un Token`});	

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.user = decoded; 
		next();
	} catch (err) {
		res.status(401).json({error: `Token inválido`});
	}
};
*/

export const verifyToken = (req,res,next) => {
	let token = req.get(`token`);
	jwt.verify(token, process.env.SEED,(error, decoded) => {
		if(error) {
			console.log(error);
			return res.status(401).json({
				error: `Token inválido`
			})
		}
		req.user = decoded.user;
		next();
	});
}