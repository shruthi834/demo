"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const cors_1 = __importDefault(require("cors"));
const products_routes_1 = require("./routes/products.routes");
const winston = __importStar(require("winston")); // for logging 
const expressWinston = __importStar(require("express-winston"));
const customers_routes_1 = require("./routes/customers.routes");
const orders_routes_1 = require("./routes/orders.routes");
const item_routes_1 = require("./routes/item.routes");
// var expresValidator = require('express-validator') ;
const app = (0, express_1.default)(); //middlewar for restful
const server = (0, http_1.createServer)(app);
const port = 3000;
const routes = [];
//configure middle ware
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//logger configuration
const loggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.json(), winston.format.prettyPrint(), winston.format.colorize({ all: true }))
};
app.use(expressWinston.logger(loggerOptions));
//end logger configuration
routes.push(new products_routes_1.ProductRoutes(app));
routes.push(new customers_routes_1.CustomerRoutes(app));
routes.push(new orders_routes_1.OrderRoutes(app));
routes.push(new item_routes_1.ItemRoutes(app));
const msg = `Server running at http://localhost:${port}`;
app.get("/", (req, res) => {
    res.status(200).send(msg);
});
server.listen(port, () => console.log(msg));
exports.default = app;
