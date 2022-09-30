"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const common_routes_1 = require("./common.routes");
const product_controller_1 = __importDefault(require("../controllers/product.controller"));
const products_middleware_1 = __importDefault(require("../controllers/products.middleware"));
const { check } = require('express-validator');
class ProductRoutes extends common_routes_1.CommonRoutes {
    constructor(app) {
        super(app, "ProductsRoute");
    }
    configureRoutes() {
        //http://localhost:3000/products
        this.app.route('/product')
            .get(product_controller_1.default.listProducts);
        this.app.route('/product')
            .post(products_middleware_1.default.validateRequestProductBodyFields, product_controller_1.default.createProduct);
        //http://localhost:3000/products/2
        this.app.route('/product/:id')
            .get(product_controller_1.default.getProductById);
        this.app.route('/get-product-by-category/:category')
            .get(product_controller_1.default.getProductByCategory);
        this.app.route('/update-product/:id')
            .put(product_controller_1.default.updateProductById);
        this.app.route('/delete-product/:id')
            .delete(product_controller_1.default.deleteProduct);
        return this.app;
    }
}
exports.ProductRoutes = ProductRoutes;
//# sourceMappingURL=products.routes.js.map