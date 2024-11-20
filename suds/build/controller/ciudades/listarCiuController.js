"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listarCiuDAO_1 = __importDefault(require("../../dao/ciudades/listarDAO/listarCiuDAO"));
const ciudadesRepository_1 = require("../../repository/ciudades/ciudadesRepository");
class listarCiuController extends listarCiuDAO_1.default {
    ctrlListarTodosCiu(req, res) {
        const sql_ciudades_listar = ciudadesRepository_1.SQL_CIUDADES.LISTAR_TODOS;
        listarCiuController.listarTodosCiu(sql_ciudades_listar, [], res);
    }
}
const ctrlListarTodosCiu = new listarCiuController();
exports.default = ctrlListarTodosCiu;
//# sourceMappingURL=listarCiuController.js.map