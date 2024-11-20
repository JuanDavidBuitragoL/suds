"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listarProvOptDAO_1 = __importDefault(require("../../dao/proveedores_opticas/listarDAO/listarProvOptDAO"));
const proveedores_opticasRepository_1 = require("../../repository/proveedores_opticas/proveedores_opticasRepository");
class listarProvOptController extends listarProvOptDAO_1.default {
    ctrlListarTodosProvOpt(req, res) {
        const sql_proveedoresopticas_listar = proveedores_opticasRepository_1.SQL_PROVEEDORES_OPTICAS.LISTAR_TODOS;
        listarProvOptController.listarTodosProvOpt(sql_proveedoresopticas_listar, [], res);
    }
}
const ctrlListarTodosProvOpt = new listarProvOptController();
exports.default = ctrlListarTodosProvOpt;
//# sourceMappingURL=listarProvOptController.js.map