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
exports.ProductService = void 0;
const product_model_1 = require("../models/product.model");
class ProductService {
    getProducts() {
        return product_model_1.Product.findAll();
    }
    getProductById(id) {
        return product_model_1.Product.findByPk(id);
    }
    addProduct(p) {
        return product_model_1.Product.create(p);
    }
    getProductByCategory(cat) {
        return product_model_1.Product.findAll({
            where: { category: cat }
        });
    }
    updateProduct(id, price, name, category) {
        return __awaiter(this, void 0, void 0, function* () {
            yield product_model_1.Product.update({
                name: name,
                category: category,
                price: price
            }, {
                where: { id },
            });
            return product_model_1.Product.findByPk(id);
        });
    }
    deleteProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield product_model_1.Product.destroy({
                where: { id },
            });
            return "Deleted Product " + id + " successfully";
        });
    }
}
exports.ProductService = ProductService;
exports.default = new ProductService();
