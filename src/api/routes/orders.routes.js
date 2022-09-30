"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const common_routes_1 = require("./common.routes");
const order_controller_1 = __importDefault(require("../controllers/order.controller"));
class OrderRoutes extends common_routes_1.CommonRoutes {
    constructor(app) {
        super(app, "OrderRoute");
    }
    configureRoutes() {
        this.app.route('/order')
            .get(order_controller_1.default.listOrders);
        this.app.route('/order')
            .post(order_controller_1.default.createOrder);
        this.app.route('/order/:oid')
            .get(order_controller_1.default.getOrderById);
        this.app.route('/order-item/:oid')
            .get(order_controller_1.default.getOrderItemDetails);
        return this.app;
    }
}
exports.OrderRoutes = OrderRoutes;
