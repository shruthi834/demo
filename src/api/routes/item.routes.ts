import express from 'express';
import { CommonRoutes } from './common.routes';
import itemController from '../controllers/item.controller';

export class ItemRoutes extends CommonRoutes
{

    constructor(app:express.Application){
        super(app,"ItemsRoute");
    }

    configureRoutes(): express.Application 
    {
        this.app.route('/item')
            .get(itemController.listItem)
        
            this.app.route('/item')
            .post(itemController.createItem);

        this.app.route('/item/:itemid')
            .get(itemController.getItemById);
            
        this.app.route('/update-items/:itemid')
            .put(itemController.updateItemById);

        this.app.route('/delete-item/:itemid')
            .delete(itemController.deleteItem);
        
            return this.app;
    }

}