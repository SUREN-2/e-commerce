import { ErrorRequestHandler, Response } from "express";
import { HTTPSTATUS } from "../config/http.config";
import { AppError } from "../utils/AppError";
import { z, ZodError } from "zod";
import { clearAuthenticationCookies, REFRESH_PATH } from "../utils/cookie";


export const errorHandler: ErrorRequestHandler = (error,req,res,next):any => {

    console.log(`Error occured on PATH: ${req.path}`,error)
 
    const formatZodError = (res: Response,error: z.ZodError) => {
        
        const errors = error?.issues?.map((err) => ({
            field : err.path.join("."),
            message : err.message
         }))
        res.status(HTTPSTATUS.BAD_REQUEST).json({
            message : "Validation Error",
            error: errors
        })
    }

    if(req.path === REFRESH_PATH){
        clearAuthenticationCookies(res)
    }

    if(error instanceof SyntaxError){
        return res.status(HTTPSTATUS.BAD_REQUEST).json(
            {"messsage" : "Invalid Json Format, ckeck your requset body"})
    }


    if(error instanceof ZodError){
        return formatZodError(res ,error);
    }
    
    if(error instanceof AppError){
        return res.status(error.statusCode).json(
            {
                message : error.message,
                errorCode : error.errorCode
            }
        )
    }

    return res.status(HTTPSTATUS.INTERNAL_SERVER_ERROR).json(
        {
            message : "Internal Server Error",
            error : error?.message || "Unknown Error Occured"
        }
    )
} 