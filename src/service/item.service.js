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
const models_1 = require("../models");
class ItemService {
    getItems() {
        return models_1.Item.findAll();
    }
    getItemById(itemid) {
        return models_1.Item.findByPk(itemid);
    }
    addItem(i) {
        return models_1.Item.create(i);
    }
    updateItem(itemid, qty, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            yield models_1.Item.update({
                qty: qty,
                amount: amount
            }, {
                where: { itemid }
            });
            return models_1.Item.findByPk(itemid);
        });
    }
    deleteItemById(itemid) {
        return __awaiter(this, void 0, void 0, function* () {
            yield models_1.Item.destroy({
                where: { itemid },
            });
            return "Item " + itemid + " Deleted Successfully";
        });
    }
}
exports.default = new ItemService();
