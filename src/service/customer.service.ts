import { Customer } from "../models/customer.model";
import {Order} from "../models"

class CustomerService
{

    getCustomers(): Promise<Customer[]>{
        return Customer.findAll();
    }

    gtCustomerById(customerId:number):Promise<Customer | null>{
        return Customer.findByPk(customerId);

    }
    addCustomer(c:any) :Promise<Customer>{
        return Customer.create(c);
    }

     getCustomerOrders (customerId:number) {
          return Customer.findAll({
           include:[{
               model:Order,
               as:'orders'
           }],
           where:{customerId}
        })
       
      
    }

    async updateCustomer(customerId:number,email:string,firstName:string){
        await Customer.update(
        {
            email:email,
            firstName:firstName
        },
        {
            where:{customerId}

        })
        return Customer.findByPk(customerId);

    }
    async deleteCustomer(customerId:number){
       await Customer.destroy({
        where:{customerId}
       })
       return "Deleted  "+customerId+" successfully";
    }
}
export default new CustomerService;