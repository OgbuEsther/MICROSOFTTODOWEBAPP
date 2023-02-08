import express, { Application } from "express"
import appConfig from "./app"
import { dbConfig } from "./Config/db"

const port:number = 4000

const app :Application = express()
appConfig(app)
dbConfig()

app.listen(port , () =>{
    console.log(`server is up on port ${port}`)
})