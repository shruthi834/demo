import express from 'express';
import { CommonRoutes } from './common.routes';
import productController from '../controllers/product.controller';
import productsMiddleware from '../controllers/products.middleware';
const{check}=require('express-validator');

export class ProductRoutes extends CommonRoutes{
    constructor(app:express.Application){
        super(app,"ProductsRoute");
        
    }
    configureRoutes(): express.Application {
        
        //http://localhost:3000/products
        this.app.route('/product')
            .get(productController.listProducts)

        this.app.route('/product')
            .post(productsMiddleware.validateRequestProductBodyFields,productController.createProduct); 


            //http://localhost:3000/products/2
        this.app.route('/product/:id')
            .get(productController.getProductById)

        this.app.route('/get-product-by-category/:category')
            .get(productController.getProductByCategory);


        this.app.route('/update-product/:id')
            .put(productController.updateProductById);
             
        this.app.route('/delete-product/:id')
            .delete(productController.deleteProduct);
           
    
        return this.app;
    }
}