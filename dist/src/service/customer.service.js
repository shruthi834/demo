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
Object.defineProperty(exports, "__esModule", { value: true });
const customer_model_1 = require("../models/customer.model");
const models_1 = require("../models");
class CustomerService {
    getCustomers() {
        return customer_model_1.Customer.findAll();
    }
    gtCustomerById(customerId) {
        return customer_model_1.Customer.findByPk(customerId);
    }
    addCustomer(c) {
        return customer_model_1.Customer.create(c);
    }
    getCustomerOrders(customerId) {
        return customer_model_1.Customer.findAll({
            include: [{
                    model: models_1.Order,
                    as: 'orders'
                }],
            where: { customerId }
        });
    }
    updateCustomer(customerId, email, firstName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield customer_model_1.Customer.update({
                email: email,
                firstName: firstName
            }, {
                where: { customerId }
            });
            return customer_model_1.Customer.findByPk(customerId);
        });
    }
    deleteCustomer(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield customer_model_1.Customer.destroy({
                where: { customerId }
            });
            return "Deleted  " + customerId + " successfully";
        });
    }
}
exports.default = new CustomerService;
//# sourceMappingURL=customer.service.js.map