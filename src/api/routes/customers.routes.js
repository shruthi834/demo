"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRoutes = void 0;
const common_routes_1 = require("./common.routes");
const customer_controller_1 = __importDefault(require("../controllers/customer.controller"));
const customers_middleware_1 = __importDefault(require("./customers.middleware"));
class CustomerRoutes extends common_routes_1.CommonRoutes {
    constructor(app) {
        super(app, "CustomerRoute");
    }
    configureRoutes() {
        this.app.route('/customer')
            .get(customer_controller_1.default.listCustomers);
        this.app.route('/customer')
            .post(customers_middleware_1.default.validateRequestCustomerBodyFields, customer_controller_1.default.createCustomer);
        // this.app.route('/customer')
        //     .post(body('email').isEmail(),
        //           body('firstName').isLength({min:5,max:10}),
        //           (req: express.Request,res:express.Response)=>{
        //             const errors=validationResult(req);
        //             if(!errors.isEmpty()){
        //                 return res.status(400).json({errors:errors.array()});
        //             }
        //           }, 
        //           customerController.createCustomer
        // );
        this.app.route('/customer-by-id/:customerId')
            .get(customer_controller_1.default.getCustomerById);
        this.app.route('/customer-order/:customerId')
            .get(customer_controller_1.default.getCustomerOrderDetails);
        this.app.route('/customer/:customerId')
            .put(customer_controller_1.default.updateCustomer);
        this.app.route('/customer/:customerId')
            .delete(customer_controller_1.default.deleteCustomer);
        return this.app;
    }
}
exports.CustomerRoutes = CustomerRoutes;
