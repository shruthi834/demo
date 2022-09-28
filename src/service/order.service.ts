import { Item } from "../models";
import {Order} from "../models/order.model";

class OrderService{
    
    getOrders():Promise<Order[]>
    {
        return Order.findAll();
    }

    getOrderById(oid:number): Promise<Order | null>{
        return Order.findByPk(oid);
    }

    addOder(o:any) :Promise<Order>{
        return Order.create(o);
    }

    getOrderItems(oid:number){
        return Order.findAll({
            include:[{
                model:Item,
                as:'items'
            }],
            where:{oid}
        })
        // return Order.findByPk(oid);
    }
}
export default new OrderService();
