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
const customer_service_1 = __importDefault(require("../../service/customer.service"));
class CustomerController {
    listCustomers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const customers = yield customer_service_1.default.getCustomers();
            res.status(200).send(customers);
        });
    }
    getCustomerById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const customers = yield customer_service_1.default.gtCustomerById(+req.params.customerId);
            res.status(200).send(customers);
        });
    }
    createCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const customers = yield customer_service_1.default.addCustomer(req.body);
            res.status(201).send(customers);
        });
    }
    getCustomerOrderDetails(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const customers = yield customer_service_1.default.getCustomerOrders(+req.params.customerId);
            res.status(200).send(customers);
        });
    }
    updateCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const customers = yield customer_service_1.default.updateCustomer(+req.params.customerId, req.body.email, req.body.firstName);
            res.status(200).send(customers);
        });
    }
    deleteCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const customers = yield customer_service_1.default.deleteCustomer(+req.params.customerId);
            res.status(200).send(customers);
        });
    }
}
exports.default = new CustomerController();
//# sourceMappingURL=customer.controller.js.map