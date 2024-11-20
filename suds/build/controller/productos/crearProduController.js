"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crearProduDAO_1 = __importDefault(require("../../dao/productos/crearDAO/crearProduDAO"));
const productosRepository_1 = require("../../repository/productos/productosRepository");
class crearProduController extends crearProduDAO_1.default {
    postProducto(req, res) {
        const { codigo_producto, nombre_producto, descripcion_producto, precio_producto, existencias_producto, id_proveedor } = req.body;
        const datos = [codigo_producto, nombre_producto, descripcion_producto, precio_producto, existencias_producto, id_proveedor];
        crearProduController.crearProducto(productosRepository_1.SQL_PRODUCTOS.VERIFICAR, productosRepository_1.SQL_PRODUCTOS.CREAR, datos, res);
    }
}
const ctrlCrearProdu = new crearProduController();
exports.default = ctrlCrearProdu;
//# sourceMappingURL=crearProduController.js.map