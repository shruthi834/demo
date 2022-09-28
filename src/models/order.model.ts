import {Model,DataTypes, HasManyAddAssociationMixin, HasManyGetAssociationsMixin} from 'sequelize';
import { connection } from '../config/connection';
import { Item } from './item.model';

export class Order extends Model{
    public oid!:number;
    public order_date!:string;
    public total!:number;
    public addItem!: HasManyAddAssociationMixin<Item,number>;
    public getItems! : HasManyGetAssociationsMixin<Item>;



} 

Order.init({
    oid:{
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement:true,
        primaryKey:true
    },
    orderDate:{
        type: new DataTypes.DATE,
        field:"order_date"
    },
    total:{
        type: DataTypes.DOUBLE
    }
},{
    tableName:"orders",
    timestamps:false,
    sequelize:connection


})