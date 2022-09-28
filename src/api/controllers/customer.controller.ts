import { Request,Response } from 'express';
import express from 'express';
import CustomerService from '../../service/customer.service';
import {Customer,Order} from '../../models/index';

class CustomerController{
    async listCustomers(req:express.Request,res:Response){
        const customers=await CustomerService.getCustomers();
        res.status(200).send(customers);
    }

    async getCustomerById(req:Request,res:Response){
        const customers=await CustomerService.gtCustomerById(+req.params.customerId);
        res.status(200).send(customers);
    }
    async createCustomer(req:Request,res:Response){
        const customers=await CustomerService.addCustomer(req.body);
        res.status(201).send(customers);
    }

    async getCustomerOrderDetails(req:Request,res:Response){
        const customers=await CustomerService.getCustomerOrders(+req.params.customerId);
        res.status(200).send(customers);
    }
    async updateCustomer(req:Request,res:Response){
        const customers=await CustomerService.updateCustomer(+req.params.customerId,req.body.email,req.body.firstName);
        res.status(200).send(customers);
    }
    async deleteCustomer(req:Request,res:Response){
        const customers=await CustomerService.deleteCustomer(+req.params.customerId);
        res.status(200).send(customers);
    }



    /////data from 2 tables//////////
    // async getCustomerOrders  (req:Request,res:Response) {
    //      const data= await Customer.findAll({
    //         include:[{
    //             model:Order,
    //             as:'orders'
    //         }],
    //         where:{email:req.params.email}
    //      })
    //      res.status(200).send(data)
    // }
    


}
export default new CustomerController();