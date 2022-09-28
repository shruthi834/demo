import express from 'express';
import { CommonRoutes } from './common.routes';
import orderController from '../controllers/order.controller';

export class OrderRoutes extends CommonRoutes
{
    constructor(app:express.Application)
    {
        super(app,"OrderRoute")
    }
    configureRoutes(): express.Application {

        this.app.route('/order')
            .get(orderController.listOrders)
        
        this.app.route('/order')
            .post(orderController.createOrder);

        this.app.route('/order/:oid')
            .get(orderController.getOrderById);

        this.app.route('/order-item/:oid')
            .get(orderController.getOrderItemDetails)
        
            return this.app;
    }
    
    

}