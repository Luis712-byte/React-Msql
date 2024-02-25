import express from "express";
import cors from"cors"
import {PORT} from "./config.js"
import indexRoutes from "./routes/index.routes.js"
import taksRoutes from "./routes/tasks.routes.js"

const app= express();

app.use(express.json());

app.use(cors({
    origin:true  //Permite que cualquier origen se puede conectar
}))

app.use(indexRoutes)
app.use(taksRoutes)

app.listen(PORT)
console.log(`server is running on port ${PORT}`)