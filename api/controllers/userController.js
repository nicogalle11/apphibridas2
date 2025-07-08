import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotend from "dotenv";
import userModel from "../models/userModel.js";




dotend.config();

const hiddenToken = process.env.JWT_SECRET;
/*
export const registerUser = async (req, res) => {
     const {username, email, password} = req.body;

    if (!username || !password || !email) return res.status(400).json({ error: `Falta uno o más campos requeridos` });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({username, email, password: hashedPassword});

    try {
        await newUser.save();
        res.status(201).json({message: `Usuario registrado`});
    } catch (err) {
        res.status(400).json({error: err.message});
    }  

}

export const loginUser = async (req, res) => {
    const {username, password} = req.body;
  
    const user = await userModel.findOne({username});
    if (!user) return res.status(404).json({error: `Usuario no encontrado`});
  
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(401).json({error: `Contraseña incorrecta`});
  
    const token = jwt.sign({id: user.id, username: user.username}, hiddenToken, {expiresIn: `1h`});
    
    res.status(200).json({token});
}
*/

export const registerUser = async (req,res) => {
	console.log(`aaaaaaaaaaaaaaaaaaaaaaaaaa`)
	try {
		let body = req.body;
		let user = new userModel({
			username: body.username,
			email: body.email,
			password: bcrypt.hashSync(body.password,10)
		});
		let savedUser = await user.save();

		res.json({
			user: savedUser
		})
	} catch (err) {
		res.status(400).json({
			message: err.message
		})
	}
}

export const loginUser = async (req, res) => {
	console.log(req.body.username);
	userModel.findOne({username: req.body.username})
	.then(datos => {
		if(datos){
			const passwordValido = bcrypt.compareSync(req.body.password, datos.password);
			if(!passwordValido) return res.status(400).json({error:`ok`, message: `Contraseña incorrecta`})
			const jwToken = jwt.sign({
				user: {_id: datos._id, username: datos.username, email: datos.email}
			}, hiddenToken, {expiresIn: process.env.EXPIRATION});
			res.json({
				user: {
					_id: datos._id,
					username: datos.username,
					email: datos.email
				},
				jwToken
			});						
		} else {
			res.status(400).json({
				error: `ok`,
				message: `contraseña incorrecta`
			})
		}
	})
	.catch(err => {
		res.status(400).json({
			error: `ok`,
			message: `Error de servidor` + err
		})
	})
}


export const getUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        res.json(users); 
    } catch(err) {
        res.status(400).json({error: err.message});
    }
}