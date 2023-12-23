import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import appRoute from "./route/index.js";

dotenv.config();
const host = process.env.SERVER_HOST;
const port = process.env.SERVER_PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(appRoute);
app.get("/", (req, res) => {
	res.send("<h1>Response</h1>");
});
app.listen(port, host, () => {
	console.log(`http://${host}:${port}`);
});
