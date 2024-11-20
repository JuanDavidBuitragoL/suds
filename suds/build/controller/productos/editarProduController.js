"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const editarProduDAO_1 = __importDefault(require("../../dao/productos/actualizarDAO/editarProduDAO"));
const productosRepository_1 = require("../../repository/productos/productosRepository");
class editarProduController extends editarProduDAO_1.default {
    updateProducto(req, res) {
        const { codigo_producto, nombre_producto, descripcion_producto, precio_producto, existencias_producto, id_proveedor, id_producto } = req.body;
        const datos = [codigo_producto, nombre_producto, descripcion_producto, precio_producto, existencias_producto, id_proveedor, id_producto];
        editarProduController.editarProducto(productosRepository_1.SQL_PRODUCTOS.EDITAR, datos, res);
    }
}
const ctrlEditarProdu = new editarProduController();
exports.default = ctrlEditarProdu;
//# sourceMappingURL=editarProduController.js.map