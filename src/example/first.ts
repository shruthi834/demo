import {Product} from '../models/product.model'
// import {Op} from 'sequelize/types';
import {connection} from '../config/connection';
import {Sequelize} from 'sequelize';





function printAll()
{

    Product.findAll().then(products =>{
        products.forEach(p=>{
            console.log(p.id + "," + p.name + "," +p.category);
        })

    });
}

printAll();
console.log("***********");
function printNameAndPrice(){
    Product.findAll({attributes:['name','price']}).then(elems =>{
        elems.forEach(p => console.log(p.getDataValue("name"),p.getDataValue("price")));
        //console.log(elems);
       connection.close();
    })
    
}
//printNameAndPrice();

console.log("**********Async and await****");

async function getAll(){
    const products= await Product.findAll();
    return products;
}

async function print()
{
    const products = await getAll();
    products.forEach(p => console.log(p.name));

    const max =await Product.max("price");
    // const sum =await Product.sum("price");
    const sum =await Product.sum("price",{where:{category:'mobile'}});
    console.log(max,sum);

    console.log("*********");
    await Product.findAll({
        attributes:['category',[Sequelize.fn('sum',Sequelize.col('price')),'total']],
        group:['category']
    });
    connection.close();
}
print();

