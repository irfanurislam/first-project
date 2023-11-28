const app: Application = express();
import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors"; 
 export const globalErrorHandler =(err:any,req: Request , res:Response,next:NextFunction) =>{
    const statusCode = 500;
    const message = err.message || 'something went wrong'
    return res.status(statusCode).json({
      success:false,
      message
    })
  }