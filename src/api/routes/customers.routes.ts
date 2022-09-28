import express from 'express';
import { CommonRoutes } from './common.routes';
import customerController from '../controllers/customer.controller';
import customersMiddleware from './customers.middleware';
import { body, validationResult } from 'express-validator';

export class CustomerRoutes extends CommonRoutes
{
    constructor(app:express.Application){
        super(app,"CustomerRoute")
    }
    configureRoutes(): express.Application {
        
        this.app.route('/customer')
            .get(customerController.listCustomers)

            this.app.route('/customer')
            .post(customersMiddleware.validateRequestCustomerBodyFields,customerController.createCustomer);

        // this.app.route('/customer')
        //     .post(body('email').isEmail(),
        //           body('firstName').isLength({min:5,max:10}),
        //           (req: express.Request,res:express.Response)=>{
        //             const errors=validationResult(req);
        //             if(!errors.isEmpty()){
        //                 return res.status(400).json({errors:errors.array()});
        //             }
                    
        //           }, 
        //           customerController.createCustomer
        // );

        this.app.route('/customer-by-id/:customerId')
            .get(customerController.getCustomerById)
            
        this.app.route('/customer-order/:customerId')
            .get(customerController.getCustomerOrderDetails)

        this.app.route('/customer/:customerId')
            .put(customerController.updateCustomer)
        
        this.app.route('/customer/:customerId')
            .delete(customerController.deleteCustomer)

            
            return this.app;
    }
    
}