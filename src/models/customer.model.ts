import {Model,DataTypes, HasManyGetAssociationsMixin} from 'sequelize';
import { connection } from '../config/connection';
import {Order} from './order.model';

export class Customer extends Model{
    public customerId!:number;
    public email!:string;
    public firstName!:string;
    public getOders!:HasManyGetAssociationsMixin<Order>;
}

Customer.init({
    customerId: {
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    email:{
        type:DataTypes.STRING(100),
       
    },
    firstName:{
        type:DataTypes.STRING(100),
        allowNull:false,
        field: "first_name"
    }
},
{
    tableName: "customers",
    timestamps: false,
    sequelize:connection
})