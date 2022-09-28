import { Item } from "../models";

class ItemService {

    getItems():Promise<Item[]>
    {
        return Item.findAll();
    }

    getItemById(itemid:number):Promise<Item |null>
    {
        return Item.findByPk(itemid);
    }

    addItem(i:any):Promise<Item>
    {
        return Item.create(i);

    }
   async updateItem(itemid:number,qty:number,amount:number)
    {
       await Item.update(
        {
            qty:qty,
            amount:amount 
        },
        {
            where:{itemid}
        }
        )
        return Item.findByPk(itemid);
    }
    async deleteItemById(itemid:number){
        await Item.destroy({
            where:{itemid},
        })
        return "Item " +itemid+" Deleted Successfully"
    }


}
export default new ItemService();