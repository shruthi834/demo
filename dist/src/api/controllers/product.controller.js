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
const product_service_1 = __importDefault(require("../../service/product.service"));
class ProductController {
    listProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield product_service_1.default.getProducts();
            res.status(200).send(products);
        });
    }
    getProductById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield product_service_1.default.getProductById(+req.params.id);
            res.status(200).send(products);
            // res.send()
        });
    }
    createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield product_service_1.default.addProduct(req.body);
            // const error=validationResult(req)
            // if(!error.isEmpty()){
            //     res.json(error.array())
            // }
            // else{
            //     res.status(201).send(products);
            // }
            res.status(201).send(products);
        });
    }
    getProductByCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield product_service_1.default.getProductByCategory(req.params.category);
            res.status(200).send(products);
        });
    }
    updateProductById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield product_service_1.default.updateProduct(+req.params.id, +req.body.price, req.body.name, req.body.category);
            res.status(200).send(products);
        });
    }
    deleteProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield product_service_1.default.deleteProductById(+req.params.id);
            res.status(200).send(products);
        });
    }
}
exports.default = new ProductController();
//# sourceMappingURL=product.controller.js.map