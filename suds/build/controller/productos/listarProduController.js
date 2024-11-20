"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listarProduDAO_1 = __importDefault(require("../../dao/productos/listarDAO/listarProduDAO"));
const productosRepository_1 = require("../../repository/productos/productosRepository");
class listarProduController extends listarProduDAO_1.default {
    ctrlListarTodosProdu(req, res) {
        const sql_productos_listar = productosRepository_1.SQL_PRODUCTOS.LISTAR_TODOS;
        listarProduController.listarTodosProdu(sql_productos_listar, [], res);
    }
    //Consultas
    ctrlConsulta1(req, res) {
        const sql_productos_consulta1 = productosRepository_1.SQL_PRODUCTOS.CONSULTA1;
        listarProduController.consulta1(sql_productos_consulta1, [], res);
    }
    ctrlConsulta5(req, res) {
        const sql_productos_consulta5 = productosRepository_1.SQL_PRODUCTOS.CONSULTA5;
        listarProduController.consulta5(sql_productos_consulta5, [], res);
    }
}
const ctrlListarTodosProdu = new listarProduController();
exports.default = ctrlListarTodosProdu;
//# sourceMappingURL=listarProduController.js.map