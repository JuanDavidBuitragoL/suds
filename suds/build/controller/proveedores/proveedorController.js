"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listarProvDAO_1 = __importDefault(require("../../dao/proveedores/listarProvDAO"));
const proveedorRepository_1 = require("../../repository/proveedores/proveedorRepository");
class listarProvController extends listarProvDAO_1.default {
    ctrlListarTodosProv(req, res) {
        const sql_proveedor_listar = proveedorRepository_1.SQL_PROVEEDORES.LISTAR_TODOS;
        listarProvController.listarTodosProv(sql_proveedor_listar, [], res);
    }
}
const ctrlListarTodosProv = new listarProvController();
exports.default = ctrlListarTodosProv;
//# sourceMappingURL=proveedorController.js.map