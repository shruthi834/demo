import express from "express";
import CustomerService from '../../service/customer.service';

class CustomerMiddleWare{
    async validateRequestCustomerBodyFields(
        req:express.Request,
        res:express.Response,
        next:express.NextFunction

    ){
        if(req.body && req.body.email && req.body.firstName){
        //    req.body('email').isEmail(),
        //     req.body('firstName').isLength({min:5,max:10})
            next();
        }
        else{
            res.status(400).send({error :'Missing required fields of customer'})
        }

    }

   
    
}
export default new CustomerMiddleWare