import {connection} from '../config/connection';
import { Product ,Order,Item} from '../models';

// Product.findAll().then(products =>{
//     products.forEach(p =>console.log(p.name));
// })


async function addOrder(){
    let tx=connection.transaction();
    try{
        const item1= await Item.create({"amount":6344,"qty":1,"product_fk":1});
        const item2= await Item.create({"amount":4644,"qty":2,"product_fk":1});
        const order= await Order.create({
            customer_fk:"anna@gmail.com",
            orderDate: new Date(),
            total :81344.00

        });
        await order.addItem(item1);
        await order.addItem(item2);

        (await tx).commit();
        connection.close();
    }
    catch(err){
        console.log(err);
        (await tx).rollback();

    }
}
addOrder();