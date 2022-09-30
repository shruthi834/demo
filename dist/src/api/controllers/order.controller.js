"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_service_1 = __importDefault(require("../../service/order.service"));
class OrderController {
    listOrders(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const orders = yield order_service_1.default.getOrders();
            res.status(200).send(orders);
        });
    }
    getOrderById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const orders = yield order_service_1.default.getOrderById(+req.params.oid);
            res.status(200).send(orders);
        });
    }
    createOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const orders = yield order_service_1.default.addOder(req.body);
            res.status(201).send(orders);
        });
    }
    getOrderItemDetails(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const orders = yield order_service_1.default.getOrderItems(+req.params.oid);
            res.status(200).send(orders);
        });
    }
}
exports.default = new OrderController();
//# sourceMappingURL=order.controller.js.map