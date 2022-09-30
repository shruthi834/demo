"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemRoutes = void 0;
const common_routes_1 = require("./common.routes");
const item_controller_1 = __importDefault(require("../controllers/item.controller"));
class ItemRoutes extends common_routes_1.CommonRoutes {
    constructor(app) {
        super(app, "ItemsRoute");
    }
    configureRoutes() {
        this.app.route('/item')
            .get(item_controller_1.default.listItem);
        this.app.route('/item')
            .post(item_controller_1.default.createItem);
        this.app.route('/item/:itemid')
            .get(item_controller_1.default.getItemById);
        this.app.route('/update-items/:itemid')
            .put(item_controller_1.default.updateItemById);
        this.app.route('/delete-item/:itemid')
            .delete(item_controller_1.default.deleteItem);
        return this.app;
    }
}
exports.ItemRoutes = ItemRoutes;
//# sourceMappingURL=item.routes.js.map