import express from 'express';
import {Server,createServer} from 'http';
import cors from 'cors';
import { CommonRoutes } from './routes/common.routes';
import { ProductRoutes } from './routes/products.routes';
// import * as winston from 'winston';// for logging 
// import * as expressWinston from 'express-winston';
import { CustomerRoutes } from './routes/customers.routes';
import { OrderRoutes } from './routes/orders.routes';
import { ItemRoutes } from './routes/item.routes';
// var expresValidator = require('express-validator') ;



const app: express.Application=express();//middlewar for restful

const server:Server=createServer(app);

const port:number=3000;

const routes:Array<CommonRoutes>=[];

//configure middle ware

app.use(express.json());
app.use(cors());


//logger configuration

// const loggerOptions: expressWinston.LoggerOptions = {

//         transports:[new winston.transports.Console()],
//         format:  winston.format.combine(
//                 winston.format.json(),
//                 winston.format.prettyPrint(),
//                 winston.format.colorize({all:true})

//         ) 
// };

// app.use(expressWinston.logger(loggerOptions))

//end logger configuration

routes.push(new ProductRoutes(app));
routes.push(new CustomerRoutes(app));
routes.push(new OrderRoutes(app));
routes.push(new ItemRoutes(app));

const msg=`Server running at http://localhost:${port}`;

app.get("/",(req:express.Request,res: express.Response)=>{
        res.status(200).send(msg);
});

server.listen(port,()=>console.log(msg));

export default  app;