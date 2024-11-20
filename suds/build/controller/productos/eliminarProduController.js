"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eliminarProduDAO_1 = __importDefault(require("../../dao/productos/elminarDAO/eliminarProduDAO"));
const productosRepository_1 = require("../../repository/productos/productosRepository");
class eliminarProduController extends eliminarProduDAO_1.default {
    borrarProducto(req, res) {
        const codigo = req.params.id;
        const parametro = [codigo];
        eliminarProduController.borrarPorId(productosRepository_1.SQL_PRODUCTOS.ELIMINAR, parametro, res);
    }
}
const ctrlEliminarProdu = new eliminarProduController();
exports.default = ctrlEliminarProdu;
//# sourceMappingURL=eliminarProduController.js.map