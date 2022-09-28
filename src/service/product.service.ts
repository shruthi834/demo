import {Product} from '../models/product.model';


export class ProductService 
{

    getProducts(): Promise<Product[]>{
        return Product.findAll();
    }

    getProductById(id: number): Promise<Product | null>{
        return Product.findByPk(id);
    }
    
    addProduct(p:any) :Promise<Product>{
        return Product.create(p);
    }

    getProductByCategory(cat:string) : Promise<Product[] | []>{
        return Product.findAll({
            where:{category :cat}
        })
    }

    async updateProduct(id:number,price:number,name:string,category:string){
         await Product.update(
            {
                name:name,
                category:category,
                price:price
            },
            {
              where: { id },
            }
            
          );
          return Product.findByPk(id);

    }
    async deleteProductById(id:number)
    {
        await Product.destroy({
            where:{id},
        })
        return "Deleted Product "+id+" successfully";

        

    }
    

}
    

export default new ProductService();


