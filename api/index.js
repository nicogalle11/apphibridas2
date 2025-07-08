import express from "express";
import {creatureRouter, typeRouter, userRouter} from "./routes/index.js";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import {verifyToken} from "./middlewares/userMiddleware.js";
import cors from "cors";

dotenv.config();
mongoose.connect(process.env.MONGODB_URI)
	.then(() => console.log("MongoDB conectado"))
	.catch((err) => console.log("Error al conectar con MongoDB", err));

const app = express();
const PORT = 3000;
//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cors());
//app.use(express.static(path.join(__dirname, `public`)));
/*
app.get(`/`, (req, res) => {
    res.sendFile(path.join(__dirname, `public`, `index.html`))
});
*/

app.use('/creatures', creatureRouter);
app.use('/types', typeRouter);
app.use('/users', userRouter);

app.listen(PORT, () => {
    console.log(`Servidor arribaaa http://localhost:${PORT}`)
});