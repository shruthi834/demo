import express from 'express';
import OrderService from '../../service/order.service';
import { Request,Response } from 'express';
 

class OrderController{
    async listOrders(req:express.Request,res:express.Response){
        const orders=await OrderService.getOrders();
        res.status(200).send(orders);
    }
    async getOrderById(req:Request,res:Response){
        const orders=await OrderService.getOrderById(+req.params.oid)
        res.status(200).send(orders);
    }
    async createOrder(req:Request,res:Response){
        const orders=await OrderService.addOder(req.body);
        res.status(201).send(orders);
    }
    async getOrderItemDetails(req:Request,res:Response){
        const orders=await OrderService.getOrderItems(+req.params.oid);
        res.status(200).send(orders);
    }
}
export default new OrderController();