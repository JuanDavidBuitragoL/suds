"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listarProvDAO_1 = __importDefault(require("../../dao/proveedores/listarDAO/listarProvDAO"));
const proveedorRepository_1 = require("../../repository/proveedores/proveedorRepository");
class listarProvController extends listarProvDAO_1.default {
    ctrlListarTodosProv(req, res) {
        const sql_proveedor_listar = proveedorRepository_1.SQL_PROVEEDORES.LISTAR_TODOS;
        listarProvController.listarTodosProv(sql_proveedor_listar, [], res);
    }
    ctrlconsulta3(req, res) {
        const sql_consulta3 = proveedorRepository_1.SQL_PROVEEDORES.CONSULTA3;
        listarProvController.consulta3(sql_consulta3, [], res);
    }
    ctrlconsulta8(req, res) {
        const sql_consulta8 = proveedorRepository_1.SQL_PROVEEDORES.CONSULTA8;
        listarProvController.consulta8(sql_consulta8, [], res);
    }
}
const ctrlListarTodosProv = new listarProvController();
exports.default = ctrlListarTodosProv;
//# sourceMappingURL=listarProvController.js.map