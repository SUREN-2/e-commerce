import "dotenv/config"

import cors from "cors"
import express from "express"
import cookieParser from "cookie-parser"
import { config } from "./config/app.config"
import connectDatabase from "./database/database"
import { errorHandler } from "./middlewares/errorHander"
import { HTTPSTATUS } from "./config/http.config"
import { aysncHandler } from "./middlewares/aysncHandler"



const app = express()
const BASE_PATH = config.BASE_PATH; 


app.use(express.json())
app.use(express.urlencoded({extended: true}))




app.use(cookieParser())
app.use(
    cors({
        origin: config.BASE_PATH,
        credentials : true
    })
)



app.get("/", aysncHandler( async (req ,res)=>{
   
    res.status(HTTPSTATUS.OK).json({message: "Hello Kata bazar"})
}))


app.use(errorHandler);

app.listen(config.PORT ,async()=>{
    console.log(`Server listening on port ${config.PORT} in ${config.NODE_ENV}`)
    await connectDatabase()
})
