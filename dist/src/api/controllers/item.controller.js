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
const item_service_1 = __importDefault(require("../../service/item.service"));
// import { Item } from "../../models";
class ItemController {
    listItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const items = yield item_service_1.default.getItems();
            res.status(200).send(items);
        });
    }
    getItemById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const items = yield item_service_1.default.getItemById(+req.params.itemid);
            res.status(200).send(items);
        });
    }
    createItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const items = yield item_service_1.default.addItem(req.body);
            res.status(201).send(items);
        });
    }
    updateItemById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const items = yield item_service_1.default.updateItem(+req.params.itemid, req.body.qty, req.body.amount);
            res.status(200).send(items);
        });
    }
    deleteItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const items = yield item_service_1.default.deleteItemById(+req.params.itemid);
            res.status(200).send(items);
        });
    }
}
exports.default = new ItemController();
//# sourceMappingURL=item.controller.js.map