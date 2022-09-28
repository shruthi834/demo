import  express  from "express";
import { body, validationResult } from 'express-validator';

class ProductMiddleWare {
    async validateRequestProductBodyFields(
        req:express.Request,
        res:express.Response,
        next:express.NextFunction

    ){
        
        if((req.body.price).isNumeric){
            next();
        }
        else{
            const errors = validationResult(req);
            res.status(400).json({ errors: errors.array() });
        }
    }
    
}
export default new ProductMiddleWare;