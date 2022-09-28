import ItemService from "../../service/item.service";
// import  express  from "express";
import { Request,Response } from "express";
// import { Item } from "../../models";


class ItemController{
    async listItem(req:Request,res:Response){
        const items=await ItemService.getItems();
        res.status(200).send(items);
    }

    async getItemById(req:Request,res:Response){
        const items=await ItemService.getItemById(+req.params.itemid);
        res.status(200).send(items);
    }

    async createItem(req:Request,res:Response){
        const items=await ItemService.addItem(req.body);
        res.status(201).send(items);
    }

    async updateItemById(req:Request,res:Response){
        const items=await ItemService.updateItem(+req.params.itemid,req.body.qty,req.body.amount)
        res.status(200).send(items)
    }

    async deleteItem(req:Request,res:Response){
        const items=await ItemService.deleteItemById(+req.params.itemid)
        res.status(200).send(items);
    }
}
export default new ItemController();