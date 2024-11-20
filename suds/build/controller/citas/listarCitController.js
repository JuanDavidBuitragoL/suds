"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listarCitDAO_1 = __importDefault(require("../../dao/citas/listarDAO/listarCitDAO"));
const citasRepository_1 = require("../../repository/citas/citasRepository");
class listarCitController extends listarCitDAO_1.default {
    ctrlListarTodosCit(req, res) {
        const sql_citas_listar = citasRepository_1.SQL_CITAS.LISTAR_TODOS;
        listarCitController.listarTodosOpt(sql_citas_listar, [], res);
    }
}
const ctrlListarTodosCit = new listarCitController();
exports.default = ctrlListarTodosCit;
//# sourceMappingURL=listarCitController.js.map