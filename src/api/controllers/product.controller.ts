import express from 'express';
import ProductService from '../../service/product.service';
import { Request,Response } from 'express';
// import Product from '../../service/product.service';
import {Product} from '../../models/product.model';
import { validationResult } from "express-validator";

class ProductController{
    async listProducts(req:express.Request,res:express.Response){
        const products=await ProductService.getProducts();
        res.status(200).send(products);

    }
    async getProductById(req: Request, res:Response){
        const products=await ProductService.getProductById(+req.params.id);
        res.status(200).send(products);
        // res.send()
    }
    async createProduct(req: Request, res:Response){
        const products=await ProductService.addProduct(req.body);

        // const error=validationResult(req)
        // if(!error.isEmpty()){
        //     res.json(error.array())


        // }
        // else{
        //     res.status(201).send(products);

        // }
        res.status(201).send(products);
    }

    async getProductByCategory(req: Request, res:Response){
        const products=await ProductService.getProductByCategory(req.params.category);
        res.status(200).send(products);
    }

    async updateProductById(req:Request,res:Response){
        const products= await ProductService.updateProduct(+req.params.id,+req.body.price,req.body.name,req.body.category);
        res.status(200).send(products);
    }
    async deleteProduct(req:Request,res:Response){
        const products=await ProductService.deleteProductById(+req.params.id)
        res.status(200).send(products);
        

    }
}
export default new ProductController();

