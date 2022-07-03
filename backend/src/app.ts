import "dotenv/config"
import express from "express";
import { router } from "./routes";
import cors from 'cors'

const app = express();

app.use(express.json())
app.use(cors())
app.use(router)


app.listen(4000, () => console.log(`🚀 App rodando na porta 4000`))