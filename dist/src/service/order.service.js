"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const order_model_1 = require("../models/order.model");
class OrderService {
    getOrders() {
        return order_model_1.Order.findAll();
    }
    getOrderById(oid) {
        return order_model_1.Order.findByPk(oid);
    }
    addOder(o) {
        return order_model_1.Order.create(o);
    }
    getOrderItems(oid) {
        return order_model_1.Order.findAll({
            include: [{
                    model: models_1.Item,
                    as: 'items'
                }],
            where: { oid }
        });
        // return Order.findByPk(oid);
    }
}
exports.default = new OrderService();
//# sourceMappingURL=order.service.js.map